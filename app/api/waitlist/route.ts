import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Coraly Space Waitlist" <${process.env.GMAIL_USER}>`,
      to: 'coralyspace@gmail.com',
      replyTo: email,
      subject: `🌿 New Waitlist Sign-up — ${email}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#0D0D0D;color:#F5EFE8;border-radius:8px;">
          <div style="color:#EF7A6C;font-size:11px;letter-spacing:3px;margin-bottom:16px;">CORALY SPACE · NEW WAITLIST SIGN-UP</div>
          <h2 style="font-size:22px;margin:0 0 24px;">Someone just joined the waitlist 🎉</h2>
          <p style="font-size:16px;margin:0 0 8px;">
            <a href="mailto:${email}" style="color:#EF7A6C;">${email}</a>
          </p>
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
