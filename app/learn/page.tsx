'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Ticker from '@/components/Ticker';
import {
  IMAGES,
  BG_AUTUMN_LEAVES_SUN,
  BG_WINTER_TYPO_SNOW,
  BG_FOREST_PATH_SUNSET,
  BRAND_QUOTE_GOOD_DAY,
  BRAND_VENN_SUSTAINABILITY,
} from '@/lib/coraly-images-manifest';

const coral = '#EF7A6C';
const gold = '#C9A84C';
const black = '#0D0D0D';
const offW = '#FAF7F4';
const char = '#1C1C1C';
const muted = '#8B7E7B';

// ─── Article data ──────────────────────────────────────────────────────────────
const POSTS = [
  {
    img: IMAGES.CAROLINE_SNOW,
    cat: 'Models with Impact',
    title: 'The Woman in Red',
    desc: "Every season brings a new chapter. Winter is not an absence — it's a transformation.",
    time: '5 min',
    accent: '#8B2020',
    tag: 'FEATURED',
    body: [
      "There's a photograph of Caroline standing in a snow-dusted forest, red coat, looking back over her shoulder. It's not styled. It's just her, on a walk, in January. But something about it stops you.",
      "Winter has a bad reputation. We talk about it like it's a thing to survive — shorter days, darker moods, SAD calendars and vitamin D tablets. But Caroline has always seen it differently. 'Winter strips everything back,' she says. 'The trees show their structure. You see what's actually there.'",
      "That's what the red coat pictures became — a running editorial series about being visible in the invisible season. About choosing presence when everything else is retreating. The Woman in Red is not a character. It's a practice.",
      "For Coraly Space, this translates directly into how the community is held through winter. More check-ins. More creative challenges. More reasons to make something warm. Because the antidote to a long dark season is never isolation — it's showing up, even in red, even in the cold.",
      "If you're reading this in winter and feeling it: you're not alone. You're just between chapters. The next one starts whenever you put your coat on.",
    ],
  },
  {
    img: IMAGES.BLOG_WINTER_STARS,
    cat: 'Sustainability & Lifestyle',
    title: 'Winter Wonderlands',
    desc: 'Starlit forests, silent paths, warm community. How Coraly Space keeps creativity alive in winter.',
    time: '4 min',
    accent: '#2A4A7F',
    tag: null,
    body: [
      "The Milky Way looks different in winter. The cold air is cleaner, the skies darker, the silence sharper. There's a reason so many creative traditions — from Yule to solstice rituals — are built around the longest nights. Darkness isn't absence. It's permission.",
      "At Coraly Space, winter is when we double down on the knowledge hub. Not because we have more time (we don't), but because the season invites a different kind of attention. Slower reads. Longer conversations. Projects that don't need to ship by Friday.",
      "The Winter Wonderlands series is a collection of reflections from the community — people sharing what they're making, reading, cooking, noticing. It's deliberately unglamorous. No productivity hacks. Just honest accounts of creative life in the cold.",
      "What emerges is always the same: the people who thrive in winter are the ones who stopped fighting it. They made space for the quiet. They lit a candle and called it enough. They joined the Tuesday Zoom even when they didn't feel like it — and left an hour later feeling human again.",
    ],
  },
  {
    img: IMAGES.BLOG_AUTUMN_LEAVES,
    cat: 'Circular Economy',
    title: 'Quality Over Quantity',
    desc: 'Autumn teaches us. Let go of what no longer serves — buy less, buy better.',
    time: '6 min',
    accent: coral,
    tag: null,
    body: [
      "Every autumn, without fail, the trees let go. Not because they've failed — but because releasing is part of thriving. The leaf on the ground feeds next year's growth. Nothing is wasted. Everything cycles.",
      "We built Coraly Space's marketplace on this principle. Every item listed there has been made with intention, or is being passed on with care. There are no impulse buys. There are no landfill-bound fast fashion pieces. There is only: do you actually want this? Will it serve you?",
      "The circular economy is not a trend. It's a return. Before mass production, communities repaired, reused, and passed things on. The Teemill model we use for the Coraly Store is built on the same logic — nothing is made until you order it, and everything is designed to be returned and remade.",
      "What would it mean to shop like autumn? To consciously release what you no longer need — back into the community, via the marketplace — and receive only what you'll truly use? That's the experiment we're running. Come join it.",
      "Practical start: before your next purchase, ask three questions. Do I love it? Will I use it for at least three years? Could I buy it second-hand? If yes to all three, you're shopping like a tree.",
    ],
  },
  {
    img: IMAGES.BLOG_WINTER_COSY,
    cat: 'Comfort & Wellbeing',
    title: 'Busy Lives, Creativity & Comfort',
    desc: 'The season for slowing down, warming up, and creating with intention.',
    time: '4 min',
    accent: gold,
    tag: null,
    body: [
      "There is a lie that creativity requires suffering. That you have to be cold, broke, or lonely to make good work. Coraly Space was built on the opposite belief: that warmth, comfort, and community are the conditions in which creativity flourishes.",
      "In winter especially, this matters. The Danish concept of hygge — warmth, coziness, togetherness — is not self-indulgence. It's infrastructure. You cannot pour from an empty mug. (Literally — make yourself a tea before you read the rest of this.)",
      "Our community members report that their most creative periods often follow a period of deliberate rest. The knitter who takes a month off and comes back to their best work. The writer who stops forcing output and finds the story arrives on its own.",
      "What we've learned: comfort is not the enemy of creativity. Urgency is. When you stop creating from anxiety and start creating from fullness — from a warm room, a good conversation, a season that gives you permission to slow down — the work changes.",
      "This winter, we're inviting the community to one simple practice: make one thing, just for the joy of it, with no plan to share it. See what happens.",
    ],
  },
  {
    img: BG_AUTUMN_LEAVES_SUN,
    cat: 'Sustainability',
    title: 'Rewilding Our Relationship with Nature',
    desc: 'What does it mean to rewild yourself? From urban gardens to community green spaces.',
    time: '7 min',
    accent: '#4A7A3A',
    tag: null,
    body: [
      "'Rewild' started as an ecological term — the reintroduction of species, the restoration of habitats. But it has grown into something much larger. A cultural movement. A personal practice. A question: what have we tamed in ourselves that needs to run free?",
      "For Caroline, rewilding is literal and metaphorical. It's the walk in the forest before the workshop. It's the Gruffalo in the woods (yes, really — more on that in About). It's the decision to build a business that moves at the speed of seasons, not quarters.",
      "For the Coraly Space community, rewilding looks different for everyone. For the urban solopreneur, it might be a window box of herbs and a weekly park lunch. For the suburban parent, it might be the nature art project that takes over the kitchen table. For the university student, it might be the community garden plot.",
      "The REWILD tee in the Coraly Store is a wearable manifesto. Three words, all caps, black cotton. Because the statement is simple: we belong to nature, not the other way around.",
      "Practical rewilding this season: walk somewhere you've never walked before. Bring nothing. Notice everything. Come back and tell us what you found.",
    ],
  },
  {
    img: BG_WINTER_TYPO_SNOW,
    cat: 'Community',
    title: 'Finding Your People in a Disconnected World',
    desc: "25% of adults are lonely. The antidote is not an app — it's belonging.",
    time: '5 min',
    accent: coral,
    tag: null,
    body: [
      "The statistics are not comfortable. One in four adults reports significant loneliness. Among young adults aged 16–24, it's even higher. Among solopreneurs, creatives, and neurodivergent people — the groups Coraly Space was built for — the numbers are starker still.",
      "The loneliness epidemic is not a failure of individuals. It's a design failure. We built cities for cars, not people. We built social media for engagement, not connection. We built economies that reward independence and punish interdependence.",
      "Caroline started Coraly Space because she felt it herself. Not dramatically — not isolation, but the quiet ache of not quite fitting anywhere. Too creative for the corporate networks. Too business-minded for the pure artists. Too interested in sustainability to fit the mainstream consumer world.",
      "What she built is not a platform. It's a container. A place where the mismatched people find each other. Where the neurodivergent dancer and the solopreneur parent and the diaspora maker and the LGBTQ+ creative technologist all end up in the same Tuesday Zoom — and realise they were looking for each other all along.",
      "If you're reading this and recognising yourself in the gap: welcome. You found your people. We just needed you to show up.",
    ],
  },
  {
    img: BG_FOREST_PATH_SUNSET,
    cat: 'Creative Living',
    title: 'The Slow Path Forward',
    desc: 'In a world of hustle, choosing stillness is radical.',
    time: '6 min',
    accent: '#7A5A2A',
    tag: null,
    body: [
      "Hustle culture promised that speed was the point. Move fast, break things, ship at all costs. And for a while — for some people, in some sectors — it worked. But the wreckage it left behind is visible everywhere: burnout, broken relationships, work that's fast but hollow.",
      "Coraly Space is a slow company. Not because we're unambitious — we're building a multi-sided ecosystem across community, retail, education, and gamification. But because we know that sustainable growth requires sustainable pace.",
      "The slow path forward looks like: building community before building product. Listening before launching. Launching small and learning, rather than launching big and hoping. It looks like Caroline at the local stall, talking to one person for twenty minutes, because that conversation matters more than the next hundred impressions.",
      "It also looks like this knowledge hub — which publishes when there's something worth saying, not on a content calendar. Which means you won't get a post every week, but when you do, it will be real.",
      "What would your work look like if you chose the slow path? Not slow as in lazy. Slow as in: rooted. Deliberate. Built to last.",
    ],
  },
  {
    img: IMAGES.BLOG_WINTER_PATH,
    cat: 'Mental Health',
    title: 'SAD Season & Creative Resilience',
    desc: "Caroline's own experience with winter darkness — and the rituals that carry her through.",
    time: '8 min',
    accent: '#3A5A8A',
    tag: null,
    body: [
      "January is hard. Caroline will say it plainly because the alternative — pretending it isn't — has never helped anyone. Seasonal Affective Disorder affects millions of people in the UK, and in the wellness and sustainability space especially, there's a pressure to be relentlessly positive that makes the dark months harder.",
      "This article exists because it was written in January, at the low point of a difficult winter, as an act of creative defiance. Not 'ten tips for a productive January'. Just: here is what this is like, and here is what helps.",
      "What helps, for Caroline: light therapy lamp on before 7am. The walk, even when it's raining, even for fifteen minutes. The call with someone who doesn't need you to perform wellness. The creative project with no deadline and no audience — just the thing itself, made for the making.",
      "What also helps: the community. The Coraly Space community has become, unexpectedly, a mental health resource. Not because we're therapists (we're not), but because belonging is medicine. Knowing that your Tuesday Zoom will happen. That someone noticed you were quiet last week. That there's a space that holds you as you are, not as you perform.",
      "The n8n automation Caroline is building for January blog posts is itself a mental health strategy: reduce the cognitive load of content creation during the hardest month. Systems as self-care. Infrastructure as resilience.",
      "If you're in a dark January: you're not alone, you're not failing, and it will change. And Coraly Space will be here either way.",
    ],
  },
];

const CATEGORIES = ['All', 'Sustainability', 'Community', 'Circular Economy', 'Creative Living', 'Mental Health', 'Comfort & Wellbeing'];

// ─── Article modal ─────────────────────────────────────────────────────────────
function ArticleModal({ post, onClose }: { post: typeof POSTS[0]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 500,
        background: 'rgba(13,13,13,.88)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '40px 24px', overflowY: 'auto',
        animation: 'fadeUp .3s ease',
      }}
    >
      <article style={{
        width: '100%', maxWidth: '720px',
        background: char, borderRadius: '4px',
        border: `1.5px solid ${post.accent}40`,
        overflow: 'hidden',
        boxShadow: `0 32px 80px rgba(0,0,0,.6), 0 0 0 1px ${post.accent}20`,
      }}>
        {/* Hero image */}
        <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
          <img src={post.img} alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,transparent 30%,rgba(28,28,28,.95))' }} />

          {/* Close button */}
          <button onClick={onClose} aria-label="Close article"
            style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(13,13,13,.75)', backdropFilter: 'blur(8px)',
              border: `1px solid rgba(250,247,244,.15)`, color: offW,
              fontSize: '18px', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              transition: 'background .2s, border-color .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = post.accent; e.currentTarget.style.borderColor = post.accent; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(13,13,13,.75)'; e.currentTarget.style.borderColor = 'rgba(250,247,244,.15)'; }}
          >×</button>

          {/* Category + tag */}
          <div style={{ position: 'absolute', bottom: '20px', left: '24px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: post.accent, background: 'rgba(13,13,13,.85)', padding: '4px 10px', borderRadius: '2px' }}>
              {post.cat.toUpperCase()}
            </span>
            {post.tag && (
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: 'white', background: post.accent, padding: '4px 10px', borderRadius: '2px' }}>
                {post.tag}
              </span>
            )}
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '1px', color: 'rgba(250,247,244,.4)' }}>
              {post.time} read
            </span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '36px 40px 48px' }}>
          <h2 style={{
            fontFamily: "'Playfair Display',serif", fontSize: 'clamp(26px,3.5vw,38px)',
            fontWeight: 700, color: offW, lineHeight: 1.15, marginBottom: '24px',
          }}>
            {post.title}
          </h2>

          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '16px', fontStyle: 'italic', color: `${post.accent}cc`, lineHeight: 1.7, marginBottom: '28px', borderLeft: `3px solid ${post.accent}`, paddingLeft: '16px' }}>
            {post.desc}
          </p>

          {post.body.map((para, i) => (
            <p key={i} style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: '15px', lineHeight: 1.9,
              color: 'rgba(250,247,244,.65)', marginBottom: i < post.body.length - 1 ? '20px' : '0',
            }}>
              {para}
            </p>
          ))}

          {/* Footer */}
          <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: `1px solid rgba(250,247,244,.07)`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: 'rgba(250,247,244,.3)' }}>
              CORALY SPACE · KNOWLEDGE HUB
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link href="/community" className="cbtn" style={{ fontSize: '10px', padding: '9px 18px', background: post.accent }}>
                Join the Community
              </Link>
              <button onClick={onClose} className="gbtn" style={{ fontSize: '10px', padding: '9px 18px' }}>
                Close ×
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

// ─── Post card ─────────────────────────────────────────────────────────────────
function PostCard({ post, large = false, onRead }: { post: typeof POSTS[0]; large?: boolean; onRead: () => void }) {
  const [hov, setHov] = useState(false);

  return (
    <div data-reveal
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', overflow: 'hidden', borderRadius: '3px',
        border: `1.5px solid ${hov ? post.accent : 'rgba(250,247,244,.06)'}`,
        cursor: 'default', transition: 'all .3s ease',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? `0 16px 40px rgba(0,0,0,.3)` : 'none',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ height: large ? '280px' : '180px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img src={post.img} alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,transparent 40%,rgba(13,13,13,.65))' }} />
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: post.accent, background: 'rgba(13,13,13,.85)', padding: '4px 10px', borderRadius: '2px' }}>
            {post.cat.toUpperCase()}
          </span>
          {post.tag && (
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: 'white', background: post.accent, padding: '4px 10px', borderRadius: '2px' }}>
              {post.tag}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: large ? '24px' : '18px 20px', background: char, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: large ? '22px' : '16px', fontWeight: 600, color: offW, lineHeight: 1.3, marginBottom: '10px' }}>
          {post.title}
        </h3>
        <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'rgba(250,247,244,.4)', marginBottom: '14px', flex: 1 }}>
          {post.desc}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(250,247,244,.07)', paddingTop: '12px' }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', color: 'rgba(250,247,244,.3)', letterSpacing: '1px' }}>
            {post.time} read
          </span>
          <button onClick={onRead}
            style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: '11px', fontWeight: 600,
              color: post.accent, background: 'none', border: 'none', cursor: 'pointer',
              padding: '4px 0', transition: 'letter-spacing .2s, opacity .2s',
              opacity: hov ? 1 : 0.8,
              letterSpacing: hov ? '1px' : '0',
            }}
          >
            Read →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openPost, setOpenPost] = useState<typeof POSTS[0] | null>(null);
  useScrollReveal();

  const filtered = activeCategory === 'All'
    ? POSTS
    : POSTS.filter(p => p.cat.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Article modal */}
      {openPost && <ArticleModal post={openPost} onClose={() => setOpenPost(null)} />}

      {/* Hero */}
      <section data-section style={{ background: black, padding: '100px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${IMAGES.BLOG_WINTER_STARS})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
        <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: `linear-gradient(90deg,transparent,${coral}40,transparent)`, animation: 'scanH 8s linear infinite', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '4px', color: coral, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '1px', background: coral }} />KNOWLEDGE HUB<div style={{ width: '24px', height: '1px', background: coral }} />
          </div>
          <h1 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(40px,5vw,72px)', fontWeight: 700, lineHeight: 1.05, color: offW, marginBottom: '20px' }}>
            Learn. Share.<br /><em style={{ color: coral }}>Grow Together.</em>
          </h1>
          <p data-reveal style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(250,247,244,.45)', maxWidth: '560px', margin: '0 auto 40px' }}>
            Sustainability stories, community wisdom, creative living guides, and reflections from Caroline and the Coraly Space community.
          </p>
          {/* Category filter */}
          <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)}
                style={{
                  fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px',
                  color: activeCategory === c ? 'white' : coral,
                  border: `1px solid ${activeCategory === c ? coral : 'rgba(239,122,108,.3)'}`,
                  background: activeCategory === c ? coral : 'rgba(239,122,108,.05)',
                  padding: '7px 16px', borderRadius: '20px', cursor: 'pointer', transition: 'all .2s ease',
                }}>
                {c.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Ticker items={['KNOWLEDGE', '·', 'SUSTAINABILITY', '·', 'COMMUNITY', '·', 'CREATIVITY', '·', 'WELLBEING', '·', 'CIRCULAR ECONOMY', '·']} />

      {/* Featured post (always POSTS[0]) */}
      <section data-section style={{ background: black, padding: '80px 48px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '1px', background: coral }} />FEATURED THIS SEASON
          </div>
          <PostCard post={POSTS[0]} large onRead={() => setOpenPost(POSTS[0])} />
        </div>
      </section>

      {/* Filtered grid */}
      <section data-section style={{ background: black, padding: '60px 48px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '1px', background: coral }} />
            {activeCategory === 'All' ? 'ALL ARTICLES' : activeCategory.toUpperCase()}
            <span style={{ marginLeft: 'auto', fontFamily: "'DM Mono',monospace", fontSize: '9px', color: 'rgba(250,247,244,.3)' }}>
              {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
              {(activeCategory === 'All' ? POSTS.slice(1) : filtered).map((post, i) => (
                <PostCard key={i} post={post} onRead={() => setOpenPost(post)} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'rgba(250,247,244,.3)', fontFamily: "'DM Mono',monospace", fontSize: '11px', letterSpacing: '2px' }}>
              NO ARTICLES IN THIS CATEGORY YET — CHECK BACK SOON
            </div>
          )}
        </div>
      </section>

      {/* Sustainability visual */}
      <section data-section style={{ background: char, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div data-reveal style={{ borderRadius: '3px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.3)' }}>
            <img src={BRAND_VENN_SUSTAINABILITY} alt="Sustainability ecosystem diagram" style={{ width: '100%', display: 'block' }} />
          </div>
          <div>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />THE TRIPLE BOTTOM LINE
            </div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: offW, lineHeight: 1.1, marginBottom: '20px' }}>
              People. Planet.<br /><em style={{ color: coral }}>Profit.</em>
            </h2>
            <p data-reveal style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(250,247,244,.45)', marginBottom: '20px' }}>
              Coraly Space is built on the belief that commerce and community can heal each other. Every article, every product, every event is part of one ecosystem.
            </p>
            <p data-reveal style={{ fontSize: '14px', lineHeight: 1.85, color: 'rgba(250,247,244,.35)', marginBottom: '28px' }}>
              Explore the knowledge hub to understand the principles, the people, and the projects that make it real.
            </p>
            <div data-reveal>
              <Link href="/community" className="cbtn">Join the Conversation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote + newsletter */}
      <section data-section style={{ background: black, padding: '80px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div data-reveal style={{ borderRadius: '3px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.3)', marginBottom: '60px' }}>
            <img src={BRAND_QUOTE_GOOD_DAY} alt="Coraly Space — have a good day" style={{ width: '100%', display: 'block' }} />
          </div>
          <div data-reveal style={{ textAlign: 'center', padding: '60px 32px', border: `1px solid rgba(239,122,108,.15)`, borderRadius: '3px', background: 'rgba(239,122,108,.03)' }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '14px' }}>WEEKLY WISDOM</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: offW, marginBottom: '12px' }}>
              Get the newsletter.<br /><em style={{ color: coral }}>Stay inspired.</em>
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(250,247,244,.4)', marginBottom: '28px', lineHeight: 1.7 }}>
              Sustainability stories, community highlights, and early access to events — direct to your inbox.
            </p>
            <div style={{ display: 'flex', gap: '8px', maxWidth: '400px', margin: '0 auto' }}>
              <input type="email" placeholder="your@email.com"
                style={{ flex: 1, padding: '13px 16px', background: 'rgba(255,255,255,.06)', border: '1.5px solid rgba(250,247,244,.15)', borderRadius: '3px', color: offW, fontFamily: "'DM Sans',sans-serif", fontSize: '14px', outline: 'none' }} />
              <button className="cbtn" style={{ padding: '13px 20px', whiteSpace: 'nowrap' }}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
