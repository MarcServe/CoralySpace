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
| `NEXT_PUBLIC_LAUNCH_MODE` | Yes | `mini` for the crowdfunder page, `full` for the whole site |

Then configure **one** sending option below. If `SMTP_HOST` is set it wins; otherwise the
Gmail settings are used.

### Option A — any SMTP provider

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | e.g. `smtp.resend.com`, `smtp-relay.brevo.com`, your own host |
| `SMTP_PORT` | `587` for STARTTLS, `465` for SSL. Defaults to 587 |
| `SMTP_USER` | Username, also used as the from address |
| `SMTP_PASS` | Password or API key |

Better deliverability than Gmail, and nothing is tied to a personal mailbox. Worth doing if
the crowdfunder drives real volume.

### Option B — a Gmail account we control

| Variable | Purpose |
| --- | --- |
| `GMAIL_USER` | Sending Gmail address (ours, not Caroline's) |
| `GMAIL_APP_PASSWORD` | Google **App Password**, not the account password |

To generate one: Google Account → Security → 2-Step Verification (must be on) →
App passwords → create one for "Mail". Use the 16-character value, spaces removed.

Without valid credentials every submission returns an error to the visitor, so verify this
before sending any traffic to the site.

## Testing it works

Submit the form on the live site with a real address and confirm the notification arrives at
the `WAITLIST_TO_EMAIL` inbox. Check junk if it does not appear — and if you are using
Option B, expect Gmail to be stricter about mail sent from a personal account.

## Data protection note

The consent checkbox must be ticked before the form will submit, and the API rejects any
submission without it, so every address on the list has explicitly opted in. Include an
unsubscribe option in every message you send.
