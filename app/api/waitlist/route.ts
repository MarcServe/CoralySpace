import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Where signups are forwarded. Caroline only ever supplies an email address —
 * the sending account belongs to us, so she needs no credentials or setup.
 * Accepts a comma-separated list to copy in additional recipients.
 */
const RECIPIENTS = (process.env.WAITLIST_TO_EMAIL ?? 'coralyspace@gmail.com')
  .split(',')
  .map(address => address.trim())
  .filter(Boolean);

/**
 * Generic SMTP first, falling back to Gmail. Either way the credentials are
 * ours, not the client's.
 */
function createTransport() {
  if (process.env.SMTP_HOST) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
  }

  const sender = process.env.SMTP_USER ?? process.env.GMAIL_USER;

  try {
    await createTransport().sendMail({
      from: `"Coraly Space Waitlist" <${sender}>`,
      to: RECIPIENTS,
      replyTo: email,
      subject: `🌿 New Waitlist Sign-up — ${email}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#0D0D0D;color:#F5EFE8;border-radius:8px;">
          <div style="color:#EF7A6C;font-size:11px;letter-spacing:3px;margin-bottom:16px;">CORALY SPACE · NEW WAITLIST SIGN-UP</div>
          <h2 style="font-size:22px;margin:0 0 24px;">Someone just joined the waitlist 🎉</h2>
          <p style="font-size:16px;margin:0 0 8px;">
            <a href="mailto:${email}" style="color:#EF7A6C;">${email}</a>
          </p>
          <p style="font-size:13px;color:#9A8E8A;margin:0;">Reply to this email to write to them directly.</p>
          <div style="margin-top:28px;padding:16px;background:#1a1a1a;border-radius:4px;font-size:12px;color:#666;">
            They agreed to receive occasional updates when they signed up.
            <br />Sent from coraly.space · ${new Date().toUTCString()}
          </div>
        </div>
      `,
    });
  } catch (e) {
    console.error('Email send error:', e);
    return NextResponse.json({ error: 'Could not send. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
