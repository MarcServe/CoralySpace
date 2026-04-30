# Coraly Space — Complete Image Reference Map
## All 36 images across Batches 1, 2 & 3
### Usage: `import { IMAGE_NAME } from './coraly-images-manifest'`

---

## LOGOS

| Variable | Description | Size | Use In |
|---|---|---|---|
| `LOGO_SPACE_LIGHT` | Coraly Space — cream/gold circular | ~18KB | Light sections, stall print |
| `LOGO_SPACE_DARK` | Coraly Space — black/gold circular | ~24KB | **NAV**, dark sections, footer |
| `LOGO_UK_PREMIUM` | Coraly UK — botanical shadow bg | ~39KB | Yin-yang section, UK pages |

---

## CAROLINE — FOUNDER & MODEL

| Variable | Shot | Best Used In |
|---|---|---|
| `CAROLINE_RIVER` | Teal Coraly hoodie, river, golden light | **HERO** — primary founder image |
| `CAROLINE_FIELD` | White Coraly tank, summer field, bold | About page secondary / Models section |
| `CAROLINE_AUTUMN` | Red coat, autumn lane, back view | About section main editorial photo |
| `CAROLINE_SNOW` | Red coat, snowy forest, looking back | Blog featured card / Models section |
| `CAROLINE_GRUFFALO` | With Gruffalo in forest, real photo | About page — shows personality |
| `CAROLINE_MODEL` | Teal sweatshirt, Lisbon plaza | Alternate hero / social proof |

---

## MODELS

| Variable | Shot | Best Used In |
|---|---|---|
| `MODEL_COAST` | Female model, Butterfly & Moon tee, coast | Shop hero / product "As Worn" feature |

---

## BRAND ASSETS

| Variable | Description | Use In |
|---|---|---|
| `BRAND_GRUFFALO_ART` | Illustrated circle — Caroline + Gruffalo | Decorative/rotating badge in About |
| `BRAND_DANCE_EVENT` | Dance & Voice workshop flyer | Events tab in About / Knowledge Hub |
| `BRAND_ADVENTURE` | "Adventure @coraly.space" social graphic | Blog card / Community section |
| `BRAND_COLLECTION` | 5-product flat lay overview | Shop hero banner |

---

## PRODUCTS — KIDS RANGE (Coraly Space cream label)

| Variable | Product | Colour | Price |
|---|---|---|---|
| `PRODUCT_MOON_PHASE` | Moon Phase Tee | White | £22 |
| `PRODUCT_FOX_GLOVE_KIDS` | Fox Glove Kids Tee | White long sleeve | £24 |
| `PRODUCT_BUTTERFLY_PINK` | Kids Butterfly Illustration | Pink long sleeve | £26 |
| `PRODUCT_SUNSHINE` | Coraly Sunshine Tee | Yellow | £20 |
| `PRODUCT_CORAL_ROSE` | Coral Rose Hoodie | Grey | £38 |
| `PRODUCT_BUTTERFLY_KIDS` | Butterfly Kids Tee | Yellow | £22 |

---

## PRODUCTS — ADULT RANGE (Teemill green label / creator)

| Variable | Product | Colour | Note |
|---|---|---|---|
| `PRODUCT_BUTTERFLIES_NAVY` | Butterflies T-Shirt | Navy | Adult, 9 species |
| `PRODUCT_SCARLETT` | Scarlett Shocks | Black long sleeve | Creator collab — ballet shoe |
| `PRODUCT_FOX_ADULT` | Fox Glove Adult Tee | White long sleeve | Editorial spotlight |
| `PRODUCT_DEER` | Deer Art Tee | White | Artist edition |
| `PRODUCT_ASYMMETRIC_BF` | Asymmetrical Butterfly | White | Vintage/dark print |
| `PRODUCT_BUTTERFLY_MOON` | Butterfly & Moon | White women's | Celestial — worn by model |
| `PRODUCT_ROSE_HAND` | Rose in the Hand | White | Variety Issue creator |
| `PRODUCT_REWILD` | REWILD REWILD REWILD | Black | Statement piece — featured spotlight |
| `PRODUCT_MENS_TEE` | Coraly Tee Men's | White | Minimal — masculine branding |
| `PRODUCT_BLACK_BUTTERFLY` | Coraly Space Butterfly Tee | Black women's | NEW |
| `PRODUCT_SPACE_OVAL` | Coraly.Space Oval Tee | White | NEW |

---

## NATURE & LIFESTYLE

| Variable | Shot | Best Used In |
|---|---|---|
| `NATURE_ORCHIDS` | Coral orchids + candle, warm light | Shop lifestyle banner / cinemagraph |
| `NATURE_AUTUMN_LEAVES` | Autumn leaves, bokeh water | Blog card — Circular Economy |
| `NATURE_WINTER_COSY` | Mug + open book + snow window | Blog — Busy Lives / Winter Wellbeing |
| `NATURE_WINTER_STARS` | Milky Way through snowy trees | Blog — Winter Wonderlands hero |
| `NATURE_WINTER_PATH` | Snow path through bare trees | Blog — seasonal / contemplative |

---

## PLACEMENT REFERENCE — Page by Page

### Home / Hero
- Right panel: `CAROLINE_RIVER`
- Stats: 25% lonely, 3+ communities, ∞ creativity

### Models Section (3-up grid)
- `MODEL_COAST` | `CAROLINE_FIELD` | `CAROLINE_SNOW`

### About Section
- Main editorial photo: `CAROLINE_AUTUMN`
- Rotating badge: `BRAND_GRUFFALO_ART`
- Events tab image: `BRAND_DANCE_EVENT`
- Personality photo: `CAROLINE_GRUFFALO`

### Shop Hero Banner
- `BRAND_COLLECTION`

### Shop — Model "As Worn"
- `MODEL_COAST` (wearing `PRODUCT_BUTTERFLY_MOON`)

### Shop — REWILD Spotlight
- `PRODUCT_REWILD` (full-width featured banner)

### Blog / Knowledge Hub
- Featured: `CAROLINE_SNOW` — "The Woman in Red"
- `NATURE_WINTER_STARS` — "Winter Wonderlands"
- `NATURE_AUTUMN_LEAVES` — "Quality Over Quantity"
- `NATURE_WINTER_COSY` — "Busy Lives, Creativity & Comfort"

### Community / Heart Section
- `NATURE_HEART_LEAF` (from original uploads)

### Yin-Yang Section
- Left (Coraly Space): `LOGO_SPACE_DARK`
- Right (Coraly UK): `LOGO_UK_PREMIUM`

### Nav (all pages)
- `LOGO_SPACE_DARK`

### Footer
- `LOGO_SPACE_DARK`

---

## CLAUDE.md SNIPPET — Paste into Cursor

\`\`\`markdown
## IMAGE ASSETS
All images are in: `./coraly-images-manifest.js`
Import: `import { IMAGES } from './coraly-images-manifest'`

### Key images by role:
- HERO: IMAGES.CAROLINE_RIVER
- SHOP MODEL: IMAGES.MODEL_COAST  
- ABOUT MAIN: IMAGES.CAROLINE_AUTUMN
- NAV LOGO: IMAGES.LOGO_SPACE_DARK
- LIGHT LOGO: IMAGES.LOGO_SPACE_LIGHT
- UK LOGO: IMAGES.LOGO_UK_PREMIUM
- FEATURED PRODUCT: IMAGES.PRODUCT_REWILD
- SHOP HERO: IMAGES.BRAND_COLLECTION

Never use placeholder images — always reference IMAGES.X from the manifest.
\`\`\`

---

*Generated by Biz Boosters Ltd for Coraly Space · IP Caroline McGlone*
*Batches 1-3 · 36 images total · Ready for Framer / Cursor / Next.js*
