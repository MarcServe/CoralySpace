# CORALY SPACE — NEW CHAT HANDOFF PROMPT
# Copy everything below the line and paste at the start of your new chat
# ═══════════════════════════════════════════════════════════════════════

---

Hi Claude — I'm Mike, founder of Biz Boosters Ltd and TalkWeb (talkweb.io), based in Bristol/Slough UK. I'm continuing work on a client website project from a previous session.

## CLIENT: CORALY SPACE
- Client: Caroline McGlone — founder of Coraly Space (coralyspace.com)
- What it is: Multi-sided sustainability ecosystem platform — community marketplace, curated shop, knowledge hub, social games
- Tagline: "Belong. Connect. Thrive."
- Sub-tagline: "Creative community & curation. Creating a sustainability ecosystem together."
- Mission: Build a kinder, more connected world where people and planet thrive together (25% of adults are lonely — Coraly Space is the antidote)

## BRAND
- Primary colour: #EF7A6C (Australian Coral)
- Gold accent: #C9A84C
- Black: #0D0D0D
- Cream: #F5EFE8
- Fonts: Playfair Display (serif headings) + DM Sans (body) + DM Mono (labels)
- Aesthetic: Techy + contemporary art + holistic warmth — dual personality
- Coraly Space (.com) = dark, techy, community platform
- Coraly UK (.uk) = warm, holistic, retail/trade arm

## FOUR PILLARS (never change these)
1. Community Marketplace — peer-to-peer sustainable commerce
2. Coraly Store — Caroline's own merchandise via Teemill (organic cotton, on-demand)
3. Knowledge Hub — blog, courses, events, community wisdom
4. Social Games — eco challenges, missions, badges, gamification

## TARGET AUDIENCE
Female solopreneurs, neurodivergent creators, parents, LGBTQ+ community, diaspora, dancers, creative technologists, universities, sustainable makers

## WHAT WAS BUILT (previous session)
Three files are saved and ready:

### coraly-complete.jsx
Full working React/JSX website with all sections:
- Nav (sticky, blur scroll, dark logo)
- Hero (split — Caroline by river right, animated text left)
- Ticker (scrolling brand values)
- Models Section (3-up grid — coastal model + Caroline shots)
- About (tabbed Story/Mission/Events, editorial photos)
- Blog Grid (4 cards — winter/seasonal content)
- Shop Preview (model + product cards)
- Waitlist (with role selector + confirmation)
- Footer (full nav + TalkWeb placeholder + copyright)

### coraly-images-manifest.js
36 images embedded as base64. Import with:
`import { IMAGES } from './coraly-images-manifest'`

### coraly-image-map.md
Full reference — every image named, described, placed by page

## IMAGE REFERENCE (key images)

| Variable | What It Is | Used In |
|---|---|---|
| IMAGES.CAROLINE_RIVER | Caroline, teal Coraly hoodie, river | HERO primary |
| IMAGES.CAROLINE_FIELD | Caroline, white tank, summer field | Models section |
| IMAGES.CAROLINE_AUTUMN | Caroline, red coat, autumn lane | About editorial |
| IMAGES.CAROLINE_SNOW | Caroline, red coat, snowy forest | Blog featured |
| IMAGES.CAROLINE_GRUFFALO | Caroline with Gruffalo in forest | About personality |
| IMAGES.MODEL_COAST | Female model, Butterfly & Moon tee, coast | Shop hero |
| IMAGES.LOGO_SPACE_DARK | Coral+gold logo on black | NAV + dark sections |
| IMAGES.LOGO_SPACE_LIGHT | Coral+gold logo on cream | Light sections |
| IMAGES.LOGO_UK_PREMIUM | Coraly UK botanical logo | Yin-yang section |
| IMAGES.PRODUCT_REWILD | REWILD tee — black statement | Shop spotlight |
| IMAGES.BRAND_COLLECTION | 5-product flat lay | Shop hero banner |
| IMAGES.BRAND_DANCE_EVENT | Dance & Voice workshop flyer | Events tab |

## WHAT'S NEXT (continue from here)

### Option A — Batch 4 Images
I have more images to add. I'll upload them now. Please:
1. Catalogue each image (type, subject, mood)
2. Decide best placement
3. Encode and add to the manifest
4. Update the site

### Option B — Framer Build
Move the complete site into Framer using Claude Code + Cursor. Full dependency stack:
- GSAP + ScrollTrigger (scroll animations, SplitText headlines)
- Framer Motion (page transitions, component animations)
- React Three Fiber + Drei (3D elements)
- Spline (hero 3D orb embed — coral/gold palette)
- Lenis (smooth scroll — always initialise first)
- Barba.js (page transitions)
- Tailwind CSS (styling)
- shadcn/ui + Aceternity UI (premium components)
MCP servers: Figma, Framer (Tommy D. Rossi + Design Bridge), GSAP, Playwright, GitHub

### Option C — CLAUDE.md for Cursor
Generate the complete CLAUDE.md file with all brand rules, image references, animation preferences, and dependency hierarchy so Claude Code in Cursor can autonomously build and iterate.

### Option D — Kling AI Video Pipeline (TalkWeb)
Continue the autonomous video generation setup:
- MCP server configured
- Drop [VIDEO] + brief → Claude generates scenes → calls Kling → returns URLs
- TalkWeb brand preset: electric blue #1A1AFF, professional, AI-forward, warm

## OTHER CONTEXT
- I use n8n, Docker, Cursor, Supabase — comfortable with systems
- I prefer fire-and-forget workflows — build it, notify me, I check later
- TalkWeb is an AI voice receptionist SaaS (talkweb.io) — separate project
- Caroline has real events (Dance & Voice workshops, Britannia Dance Studio, Cainscross, £12)
- Teemill shop needs connecting — organic cotton, on-demand, zero waste
- TalkWeb integration placeholder is in the footer (🎙️ badge) — wire up when Caroline activates
- QR code for November face-to-face stalls still needed
- n8n blog automation pipeline for January (Caroline's difficult SAD month)

## START COMMAND
Tell me which option (A/B/C/D) you want to start with, or just start uploading images/files and I'll pick up from there.

