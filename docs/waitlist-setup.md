# Waitlist Setup

Where signups go, and how to configure it.

## What happens on submit

1. The visitor fills in the form — first name, email, role, town or city, what they are
   interested in, how they heard about us, and the consent tick.
2. The form posts to `/api/waitlist`.
3. The route forwards the details to whoever is listed in `WAITLIST_TO_EMAIL`,
   with reply-to set to the signup so Caroline can answer straight from the notification.

Only the email address and the consent tick are required; everything else is optional, so a
visitor in a hurry can still join in seconds.

**Caroline supplies nothing but an email address.** No account, no password, no app
password, no confirmation step. The sending account is ours and lives entirely in our
environment variables, so if her address ever changes it is a one-line update.

Nothing is stored in a database — the inbox is the list. If volume grows, or you need to
export addresses into a mailing tool, add storage before the campaign scales.

## Environment variables

Set these in Vercel (Project → Settings → Environment Variables) and in `.env.local` for
local development.

| Variable | Required | Purpose |
| --- | --- | --- |
| `WAITLIST_TO_EMAIL` | Yes | Where signups are forwarded. Comma-separate for multiple recipients. Defaults to `coralyspace@gmail.com` |
| `WAITLIST_FROM_EMAIL` | Recommended | Visible From address. Use a verified domain address when on Resend (e.g. `waitlist@coraly.space`). Falls back to `GMAIL_USER` |
| `WAITLIST_FROM_NAME` | Optional | From name. Defaults to `Coraly Space` |
| `NEXT_PUBLIC_LAUNCH_MODE` | Yes | `mini` for the crowdfunder page, `full` for the whole site |

Then configure **one** sending option below. If `SMTP_HOST` is set it wins; otherwise the
Gmail settings are used.

### Option A — any SMTP provider

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | e.g. `smtp.resend.com`, `smtp-relay.brevo.com`, your own host |
| `SMTP_PORT` | `587` for STARTTLS, `465` for SSL. Defaults to 587 |
| `SMTP_USER` | SMTP login username (for Resend this is always `resend`) |
| `SMTP_PASS` | Password or API key |
| `WAITLIST_FROM_EMAIL` | **Required with Resend** — must be an address on a domain you verified there, e.g. `waitlist@coraly.space` |

Better deliverability than Gmail, and nothing is tied to a personal mailbox. Worth doing if
the crowdfunder drives real volume.

### Option B — a Gmail account we control

| Variable | Purpose |
| --- | --- |
| `GMAIL_USER` | Sending Gmail address (ours, not Caroline's) |
| `GMAIL_APP_PASSWORD` | Google **App Password**, not the account password |

To generate one:

1. 2-Step Verification must already be on (yours is).
2. Skip the Security page — App passwords is no longer listed there.
   Open this URL while signed into the sending Gmail account:
   https://myaccount.google.com/apppasswords
   Or search "App passwords" in the search box at the top of myaccount.google.com.
3. Create one, name it "Coraly Space", copy the 16-character code, remove the spaces.

If that URL says app passwords aren't available, the account is using security
keys only, Advanced Protection, or a work/school Workspace policy. In that
case skip Gmail and use Option A (Resend or any SMTP) instead.

Without valid credentials every submission returns an error to the visitor, so verify this
before sending any traffic to the site.

## Testing it works

Submit the form on the live site with a real address and confirm the notification arrives at
the `WAITLIST_TO_EMAIL` inbox. Check junk if it does not appear.

## If mail goes to spam

Personal Gmail (Option B) often lands in spam when sent from Vercel because:

- The message is sent from your Gmail via an app password on a server IP Google does not recognise
- The From address is your personal `@gmail.com`, but Reply-To is the visitor's address — filters treat that like impersonation
- Gmail-to-Gmail between two different accounts via SMTP is scored more strictly than mail sent in the Gmail web app

**Quick fixes (already in the app):**

- Plain-text + HTML multipart (not HTML-only)
- No emoji in the subject line
- Simple subject: `Coraly Space waitlist: [name]`
- Light, transactional email styling

**Best fix — use Resend on your domain (recommended before the crowdfunder):**

1. Create a free account at [resend.com](https://resend.com)
2. Add and verify `coraly.space` (DNS records for SPF + DKIM — Resend shows you exactly what to add)
3. In Vercel, set:

   | Variable | Value |
   | --- | --- |
   | `SMTP_HOST` | `smtp.resend.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_USER` | `resend` |
   | `SMTP_PASS` | your Resend API key |
   | `WAITLIST_FROM_EMAIL` | `waitlist@coraly.space` (or `hello@coraly.space`) |
   | `WAITLIST_TO_EMAIL` | `coralyspace@gmail.com` |

4. Remove `GMAIL_USER` and `GMAIL_APP_PASSWORD` from Vercel so SMTP is used
5. Redeploy, submit a test signup, then in Gmail open the message → **Not spam** → **Move to Primary**

Until DNS is set up, Caroline can mark the first few notifications as "Not spam" so Gmail learns they are wanted.

## Data protection note

The consent checkbox must be ticked before the form will submit, and the API rejects any
submission without it, so every address on the list has explicitly opted in. Include an
unsubscribe option in every message you send.
