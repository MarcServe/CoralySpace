# Waitlist Setup

Where signups go, and how to configure it.

## What happens on submit

1. The form posts to `/api/waitlist` with name, email, role, location, interests,
   how they heard about us, and the consent tick.
2. The route appends a row to a **Google Sheet** — this is the list of record.
3. It then emails **coralyspace@gmail.com** so Caroline sees signups as they arrive.

The sheet and the email are independent on purpose. If the sheet is unreachable the email
still sends and says so; if the email fails but the sheet worked, the signup is still safe.

## Environment variables

Set these in Vercel (Project → Settings → Environment Variables) and in `.env.local` for
local development.

| Variable | Required | Purpose |
| --- | --- | --- |
| `GMAIL_USER` | Yes | Gmail address that sends the notification |
| `GMAIL_APP_PASSWORD` | Yes | Google **App Password**, not the account password |
| `GOOGLE_SHEET_WEBHOOK_URL` | Yes | Apps Script web app URL (below) |
| `GOOGLE_SHEET_SECRET` | Optional | Shared string so only our site can write to the sheet |
| `NEXT_PUBLIC_LAUNCH_MODE` | Yes | `mini` for the crowdfunder page, `full` for the whole site |

Without `GMAIL_APP_PASSWORD` every submission returns an error to the visitor, so verify
this before sending any traffic to the site.

### Getting a Gmail App Password

Google Account → Security → 2-Step Verification (must be on) → App passwords → create one
for "Mail". Use the 16-character value, spaces removed.

## Google Sheet setup

1. Create a sheet named e.g. **Coraly Space Waitlist**.
2. Put these headers in row 1, in this order:

   `Timestamp | Name | Email | Role | Location | Interests | Heard via | Consent`

3. Extensions → Apps Script, replace the contents with the script below.
4. If you want the shared secret, set `SECRET` to the same value as `GOOGLE_SHEET_SECRET`.
   Leave it as an empty string to skip the check.
5. Deploy → New deployment → type **Web app**, execute as **Me**, access
   **Anyone**. Copy the web app URL into `GOOGLE_SHEET_WEBHOOK_URL`.

```js
const SECRET = ''; // must match GOOGLE_SHEET_SECRET, or leave empty to disable

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (SECRET && data.secret !== SECRET) {
      return ContentService.createTextOutput('Unauthorised');
    }

    SpreadsheetApp.getActiveSheet().appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.role || '',
      data.location || '',
      data.interests || '',
      data.howHeard || '',
      data.consent ? 'Yes' : 'No',
    ]);

    return ContentService.createTextOutput('OK');
  } catch (err) {
    return ContentService.createTextOutput('Error: ' + err);
  }
}
```

Re-deploy the script (new version) after any edit, otherwise the old code keeps running.

## Testing it works

Submit the form on the live site with a real address, then check:

- a new row appears in the sheet
- the notification email arrives
- the email footer says "Saved to the waitlist sheet" — if it says otherwise, the webhook
  URL is wrong or the script was not deployed

## Data protection note

The consent checkbox is required before the form will submit, and the answer is stored in
the sheet. Only email people who ticked it, and include an unsubscribe option in every
message.
