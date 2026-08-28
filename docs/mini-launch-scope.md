# Mini Launch — Scope, Pricing and Workflow

Draft reply for Caroline (cc Yan). Adjust tone and figures before sending.

---

Hi Caroline, hi Yan,

Thanks for the clear brief — it made this straightforward. Everything below is done and
ready for you to look at, with nothing lost from the current build.

## 1. Your current site is preserved

All three iterations are saved and can be reopened at any time:

| Version | What it is |
| --- | --- |
| Version 1 | The original foundation build — structure, pillars, theme and language systems |
| Version 2 | Usability and performance pass, waitlist email, your new photography |
| Version 3 | The full site you have been reviewing, including the hero video |

Version 3 is also kept on its own working copy, so when you are ready for the full launch we
just switch it back on — no rebuild, no extra development cost.

## 2. What the stripped-back version does

The crowdfunder site is the same design, simply reduced to what you want public right now:

- **Hero** — layout, motion and background video unchanged
  - Top line now reads **A PLACE OF BELONGING : CREATIVE, CONNECTED, COMMUNITY**
  - Headline kept exactly as it was
  - Paragraph now reads **A connected creative space where conscious people belong, make, and thrive together**
  - Strapline now reads **CONNECTED · CULTURE · CREATIVITY · COMPASSION**
  - The *Explore the Space* button is removed, leaving one clear waitlist action
- **Marquee bar** — kept as-is, ready for your revised wording whenever you have it
- **About** — a short brand introduction using your WIP tagline, with placeholder body copy
  in place until the copy audit, and a waitlist call to action
- **Waitlist** — the sign-up you liked from the Community page, now on the landing page
- **Footer** — your existing footer, with the link columns replaced by *More coming soon ...*
- **Navigation** — Shop only
- **Shop** — live, with a short placeholder line-up ready for you to nominate the real
  early-release products and how many to show
- Every other page is hidden and quietly redirects to the landing page

## 3. Pricing

**£150** for the simplification as delivered above. This covers version archiving, stripping
the site back, the copy updates, footer and navigation changes, shop placeholders, and the
switch that restores the full site later.

Not included at this price, and best agreed separately when you are ready:

- Logo animation for the hero
- A new or re-edited background video
- Final marquee wording and the About copy rewrite once your audit is done
- Building out the real product selection on the Shop page

That keeps pre-launch spend at the lower end you asked for, and leaves the £300 option open
if you later decide the logo animation is worth doing.

## 4. What I need from you

1. Confirmation to proceed at £150
2. Your final marquee wording when decided
3. Which products to feature on the Shop page, and how many

Happy to jump on a call if it is easier to talk any of it through.

Best,
Mike

---

## Internal notes (not for the client)

- Archived as tags `v1.0-foundation`, `v2.0-phase-one`, `v3.0-hero-video`, plus branch `full-site-v3`.
- Mini launch is controlled by `NEXT_PUBLIC_LAUNCH_MODE` in `.env.production`. Set it to
  `full` (file or Vercel dashboard) to restore the complete site — verified working both ways.
- Placeholder copy to replace before full launch: the Lorem Ipsum paragraph in the About
  intro, and the four placeholder products in the Shop early-release grid.
