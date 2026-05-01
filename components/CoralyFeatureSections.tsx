'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IMAGES } from '@/lib/coraly-images-manifest';

const COMMUNITY_GROUPS = [
  { title: 'Dancers & Movers', desc: 'Active explorers who connect through movement and embodied creativity.', img: IMAGES.BRAND_DANCE_EVENT, tags: ['Movement', 'Expression'] },
  { title: 'Active People & Explorers', desc: 'Walkers, adventurers, nature-lovers, and people who need connection in motion.', img: IMAGES.BRAND_ADVENTURE, tags: ['Adventure', 'Nature'] },
  { title: 'Solopreneurs & Small Businesses', desc: 'Independent founders building meaningful work on their own terms.', img: IMAGES.MODEL_LISBON_SCULPTURE, tags: ['Business', 'Growth'] },
  { title: 'Neurodivergent Folks', desc: 'Different ways of thinking, creating, processing, and connecting.', img: IMAGES.BRAND_KNOWLEDGE_TEA_MOTION, tags: ['Inclusion', 'Belonging'] },
  { title: 'Parents & Carers', desc: 'People holding families, communities, and care responsibilities who need support too.', img: IMAGES.CAROLINE_AUTUMN, tags: ['Care', 'Rest'] },
  { title: 'Caring Professions', desc: 'Teachers, nurses, counsellors, and helpers carrying burnout and giving so much.', img: IMAGES.BLOG_WINTER_COSY, tags: ['Burnout', 'Recovery'] },
  { title: 'Community Leaders', desc: 'Bridge-builders and space-holders finding support for themselves too.', img: IMAGES.BRAND_COLLECTION, tags: ['Leadership', 'Impact'] },
  { title: 'Virtuoso Creatives', desc: 'High-performing creatives looking for peers who understand the pressure.', img: IMAGES.CAROLINE_SNOW, tags: ['Craft', 'Excellence'] },
  { title: 'LGBTQIA+ Community', desc: 'A visible, celebratory space for safety and authentic belonging.', img: IMAGES.BRAND_EXPLORE_CREATE, tags: ['Safety', 'Pride'] },
  { title: 'Cultural Leaders & Diaspora', desc: 'Heritage keepers and cultural connectors enriching every room they enter.', img: IMAGES.BLOG_AUTUMN_LEAVES, tags: ['Culture', 'Heritage'] },
  { title: 'Sustainable Makers', desc: 'Artists, makers, upcyclers, and creators building with the planet in mind.', img: IMAGES.PRODUCT_COLLECTION, tags: ['Makers', 'Circular'] },
  { title: 'Universities & Educators', desc: 'Learning communities, students, and educators building practical futures.', img: IMAGES.BLOG_WINTER_STARS, tags: ['Learning', 'Future'] },
];

const FREE_FEATURES = [
  'Weekly community digest',
  'Public forums and discussions',
  'Basic articles and guides',
  'Monthly virtual events',
  'Coraly newsletter',
  'Free sustainability challenges',
];

const PRO_FEATURES = [
  'Courses and masterclasses',
  'Expert-led workshops',
  'Peer mentoring circles',
  'Business tools for makers',
  'Burnout recovery programmes',
  'Contributor-only content',
];

const CONTRIBUTORS = [
  { title: 'Movement & Dance', desc: 'Somatic practice, creative movement, and active wellbeing.', img: IMAGES.BRAND_DANCE_EVENT },
  { title: 'Sustainability Makers', desc: 'Circular economy, sourcing, and low-waste living guides.', img: IMAGES.BRAND_COLLECTION },
  { title: 'Neurodivergent Coaches', desc: 'Friendly systems, executive function tools, and inclusive support.', img: IMAGES.BRAND_KNOWLEDGE_TEA_MOTION },
  { title: 'Solopreneur Mentors', desc: 'Business confidence, client attraction, and burnout prevention.', img: IMAGES.MODEL_LISBON_SCULPTURE },
];

export function CoralyCommunityGroups({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className={`home-section community-groups-feature ${compact ? 'community-groups-feature--compact' : ''}`} data-section>
      <div className="section-feature-header" data-reveal>
        <span>OUR PEOPLE</span>
        <h2>You belong here.</h2>
        <p>Coraly Space is for people who do not fit neatly into one box.</p>
      </div>

      <div className="community-groups-grid">
        {COMMUNITY_GROUPS.map((group, index) => (
          <article
            key={group.title}
            className={`community-group-card ${active === index ? 'is-active' : ''}`}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            data-reveal
          >
            <img src={group.img} alt={group.title} />
            <div className="community-group-card__body">
              <h3>{group.title}</h3>
              <p>{group.desc}</p>
              <div>
                {group.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CoralyInfoHub({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState<'tiers' | 'contributors'>('tiers');

  return (
    <section className={`home-section info-hub-feature ${compact ? 'info-hub-feature--compact' : ''}`} data-section>
      <div className="section-feature-header" data-reveal>
        <span>KNOWLEDGE HUB</span>
        <h2>{compact ? 'Knowledge, made practical.' : 'Your information home.'}</h2>
        <p>Expert knowledge, community wisdom, and human contributors.</p>
      </div>

      <div className="info-hub-tabs" role="tablist" aria-label="Info Hub views" data-reveal>
        <button type="button" className={tab === 'tiers' ? 'is-active' : ''} onClick={() => setTab('tiers')}>Free vs Pro</button>
        <button type="button" className={tab === 'contributors' ? 'is-active' : ''} onClick={() => setTab('contributors')}>Human Contributors</button>
      </div>

      {tab === 'tiers' ? (
        <div className="info-tier-grid">
          <article className="info-tier-card" data-reveal>
            <img src={IMAGES.BLOG_AUTUMN_LEAVES} alt="Free community resources" />
            <div>
              <span>ALWAYS FREE</span>
              <h3>£0</h3>
              <ul>
                {FREE_FEATURES.map(feature => <li key={feature}>{feature}</li>)}
              </ul>
              <Link href="/community" className="glbtn">Get started free</Link>
            </div>
          </article>
          <article className="info-tier-card info-tier-card--pro" data-reveal>
            <img src={IMAGES.BRAND_KNOWLEDGE_TEA_MOTION} alt="Pro Knowledge Hub" />
            <div>
              <span>PRO MEMBER · LAUNCHING SOON</span>
              <h3>£TBC <small>/month</small></h3>
              <ul>
                {PRO_FEATURES.map(feature => <li key={feature}>{feature}</li>)}
              </ul>
              <Link href="/community" className="cbtn">Join Pro waitlist</Link>
            </div>
          </article>
        </div>
      ) : (
        <div className="contributors-grid">
          {CONTRIBUTORS.map(item => (
            <article className="contributor-card" key={item.title} data-reveal>
              <img src={item.img} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
