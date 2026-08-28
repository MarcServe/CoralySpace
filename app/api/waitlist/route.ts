import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type WaitlistEntry = {
  name: string;
  email: string;
  role: string;
  location: string;
  interests: string[];
  howHeard: string;
  consent: boolean;
  submittedAt: string;
};

/**
 * Appends the signup to the Google Sheet behind GOOGLE_SHEET_WEBHOOK_URL
 * (an Apps Script web app — see docs/waitlist-setup.md).
 *
 * The sheet is the durable list, but a failure here must never cost us a
 * signup, so errors are logged and swallowed: the email still goes out.
 */
async function appendToSheet(entry: WaitlistEntry): Promise<boolean> {
  const webhook = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhook) return false;

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...entry,
        interests: entry.interests.join(', '),
        secret: process.env.GOOGLE_SHEET_SECRET ?? '',
      }),
    });
    if (!res.ok) {
      console.error('Sheet append failed:', res.status, await res.text());
      return false;
    }
    return true;
  } catch (e) {
    console.error('Sheet append error:', e);
    return false;
  }
}

function row(label: string, value: string) {
  return `<tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#aaa;width:120px;vertical-align:top;">${label}</td><td style="padding:10px 0;border-bottom:1px solid #222;">${value || '—'}</td></tr>`;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, role, location, howHeard, consent } = body;
  const interests: string[] = Array.isArray(body.interests) ? body.interests : [];

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ error: 'Consent is required to join the waitlist.' }, { status: 400 });
  }

  const entry: WaitlistEntry = {
    name: name ?? '',
    email,
    role: role ?? '',
    location: location ?? '',
    interests,
    howHeard: howHeard ?? '',
    consent: true,
    submittedAt: new Date().toISOString(),
  };

  const storedInSheet = await appendToSheet(entry);

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
      subject: `🌿 New Waitlist Sign-up — ${entry.name || entry.email}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#0D0D0D;color:#F5EFE8;border-radius:8px;">
          <div style="color:#EF7A6C;font-size:11px;letter-spacing:3px;margin-bottom:16px;">CORALY SPACE · NEW WAITLIST SIGN-UP</div>
          <h2 style="font-size:22px;margin:0 0 24px;">Someone just joined the waitlist 🎉</h2>
          <table style="width:100%;border-collapse:collapse;">
            ${row('Name', entry.name)}
            ${row('Email', `<a href="mailto:${entry.email}" style="color:#EF7A6C;">${entry.email}</a>`)}
            ${row('Role', entry.role)}
            ${row('Location', entry.location)}
            ${row('Interests', entry.interests.join(', '))}
            ${row('Heard via', entry.howHeard)}
            ${row('Email consent', 'Yes — opted in')}
          </table>
          <div style="margin-top:28px;padding:16px;background:#1a1a1a;border-radius:4px;font-size:12px;color:#666;">
            ${storedInSheet ? 'Saved to the waitlist sheet.' : 'NOT saved to the sheet — keep this email as the only record.'}
            <br />Sent from coraly.space · ${new Date().toUTCString()}
          </div>
        </div>
      `,
    });
  } catch (e) {
    console.error('Email send error:', e);
    // The sheet is the list of record — if that worked, the signup is safe
    // even though the notification email did not go out.
    if (storedInSheet) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: 'Could not send. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
