# Waitlist Setup

Where signups go, and how to configure it.

## What happens on submit

1. The visitor enters an email address and presses the button.
2. The form posts to `/api/waitlist`.
3. The route emails **coralyspace@gmail.com** with the address, with reply-to set to the
   signup so Caroline can respond straight from the notification.

Nothing is stored in a database — the inbox is the list. If the volume grows, or you need to
export addresses into a mailing tool, move storage into a sheet or a proper mailing platform
before the campaign scales.

## Environment variables

Set these in Vercel (Project → Settings → Environment Variables) and in `.env.local` for
local development.

| Variable | Required | Purpose |
| --- | --- | --- |
| `GMAIL_USER` | Yes | Gmail address that sends the notification |
| `GMAIL_APP_PASSWORD` | Yes | Google **App Password**, not the account password |
| `NEXT_PUBLIC_LAUNCH_MODE` | Yes | `mini` for the crowdfunder page, `full` for the whole site |

Without `GMAIL_APP_PASSWORD` every submission returns an error to the visitor, so verify this
before sending any traffic to the site.

### Getting a Gmail App Password

Google Account → Security → 2-Step Verification (must be on) → App passwords → create one
for "Mail". Use the 16-character value, spaces removed.

## Testing it works

Submit the form on the live site with a real address and confirm the notification email
arrives at coralyspace@gmail.com. Check the junk folder if it does not appear.

## Data protection note

The form carries a line of small print under the button — "By joining you agree to receive
occasional updates from Coraly Space. Unsubscribe anytime." — which is the basis for emailing
people who sign up. Include an unsubscribe link in every message you send.
