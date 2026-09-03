import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Where signups are forwarded. Caroline only ever supplies an email address —
 * the sending account belongs to us, so she needs no credentials or setup.
 */
const RECIPIENTS = (process.env.WAITLIST_TO_EMAIL ?? 'coralyspace@gmail.com')
  .split(',')
  .map(address => address.trim())
  .filter(Boolean);

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fromAddress() {
  const email =
    process.env.WAITLIST_FROM_EMAIL?.trim() ||
    process.env.SMTP_FROM_EMAIL?.trim() ||
    process.env.GMAIL_USER?.trim() ||
    process.env.SMTP_USER?.trim();

  if (!email) return null;

  const name = process.env.WAITLIST_FROM_NAME?.trim() || 'Coraly Space';
  return `"${name}" <${email}>`;
}

type SignupDetails = {
  name: string;
  email: string;
  role: string;
  location: string;
  howHeard: string;
  interests: string;
};

function buildPlainText(details: SignupDetails) {
  const lines = [
    'New Coraly Space waitlist sign-up',
    '',
    `Name: ${details.name || '—'}`,
    `Email: ${details.email}`,
    `Role: ${details.role || '—'}`,
    `Location: ${details.location || '—'}`,
    `Interests: ${details.interests || '—'}`,
    `Heard via: ${details.howHeard || '—'}`,
    'Email consent: Yes — opted in',
    '',
    `To reply to this person, email: ${details.email}`,
    '',
    `Sent from coraly.space · ${new Date().toUTCString()}`,
  ];

  return lines.join('\n');
}

function buildHtml(details: SignupDetails) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid #e8dfd4;color:#6b615c;width:120px;vertical-align:top;">${label}</td><td style="padding:10px 0;border-bottom:1px solid #e8dfd4;color:#1a1210;">${value || '—'}</td></tr>`;

  return `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#ffffff;color:#1a1210;border:1px solid #e8dfd4;border-radius:8px;">
      <p style="margin:0 0 8px;font-size:11px;letter-spacing:2px;color:#EF7A6C;text-transform:uppercase;">Coraly Space · Waitlist</p>
      <h2 style="font-size:20px;font-weight:600;margin:0 0 20px;line-height:1.3;">New waitlist sign-up</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.5;">
        ${row('Name', escapeHtml(details.name))}
        ${row('Email', `<a href="mailto:${escapeHtml(details.email)}" style="color:#EF7A6C;">${escapeHtml(details.email)}</a>`)}
        ${row('Role', escapeHtml(details.role))}
        ${row('Location', escapeHtml(details.location))}
        ${row('Interests', escapeHtml(details.interests))}
        ${row('Heard via', escapeHtml(details.howHeard))}
        ${row('Consent', 'Yes — opted in')}
      </table>
      <p style="font-size:13px;color:#6b615c;margin:20px 0 0;">Reply to this email to write to them directly.</p>
      <p style="font-size:12px;color:#9a8e8a;margin:24px 0 0;">Sent from coraly.space · ${new Date().toUTCString()}</p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, consent } = body;

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ error: 'Consent is required to join the waitlist.' }, { status: 400 });
  }

  const from = fromAddress();
  if (!from) {
    console.error('Waitlist email misconfigured: no sender address');
    return NextResponse.json({ error: 'Could not send. Please try again.' }, { status: 500 });
  }

  const details: SignupDetails = {
    name: String(body.name ?? '').trim(),
    email: String(email).trim(),
    role: String(body.role ?? '').trim(),
    location: String(body.location ?? '').trim(),
    howHeard: String(body.howHeard ?? '').trim(),
    interests: (Array.isArray(body.interests) ? body.interests : [])
      .map((interest: unknown) => String(interest).trim())
      .filter(Boolean)
      .join(', '),
  };

  const subjectName = details.name || details.email;

  try {
    await createTransport().sendMail({
      from,
      to: RECIPIENTS,
      replyTo: details.email,
      subject: `Coraly Space waitlist: ${subjectName}`,
      text: buildPlainText(details),
      html: buildHtml(details),
      headers: {
        'Auto-Submitted': 'auto-generated',
        'X-Auto-Response-Suppress': 'All',
      },
    });
  } catch (e) {
    console.error('Email send error:', e);
    return NextResponse.json({ error: 'Could not send. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
