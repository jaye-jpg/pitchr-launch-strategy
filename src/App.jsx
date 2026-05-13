import React, { useState } from 'react';

const sections = [
  {
    tab: 'Goals',
    eyebrow: '1. Launch Goals',
    title: 'The marketing function has three jobs in the next 90 days.',
    intro: 'Everything that gets prioritised in this plan ladders to one of these three numbers.',
    type: 'goals',
    rows: [
      ['Customers', '20 active paying customers by end of August', 'Primary commercial KPI'],
      ['Database', '1,500+ new contacts added to email list', 'Compounds beyond Q1 — fuels the next campaign at near-zero cost'],
      ['Audience', '5,000+ followers on the Pitchr LinkedIn brand page by end of August', 'Owned reach that compounds beyond Q1. Reduces dependency on paid for every future campaign.'],
    ],
  },
  {
    tab: 'Timeline',
    eyebrow: '2. Launch Timeline',
    title: 'Campaign window: June 1 – August 31, 2026',
    intro: 'Three phases. Each one has a job.',
    type: 'timeline',
    phases: [
      {
        title: 'Phase 1 — Launch Month (June 1 – June 30)',
        job: 'Job: Make the launch impossible to miss. Fill the 20 spots.',
        points: [
          ['Launch Week (June 1–7)', 'LAUNCH DAY. All paid channels go live. Brand launch emails send to the full 3,000-person database. Organic social blitz across LinkedIn brand page + Instagram. The 20 launch offer spots open for sign-up. Customer onboarding kicks off as spots fill.'],
          ['Week 2 (June 8–14)', 'Spot conversion continues. First customer briefs start running. Brand-voice content amplifies launch momentum across channels.'],
          ['Week 3 (June 15–21)', 'First customer coverage starts landing — every placement becomes a content moment. Case study format ready to capture wins.'],
          ['Week 4 (June 22–30)', 'Launch offer wraps. Prep Phase 2 transition. First retention conversations with month-1 customers.'],
        ],
      },
      {
        title: 'Phase 2 — Sustain (July 1 – July 31)',
        job: 'Job: Build the engine. Make it repeatable.',
        points: [
          ['Offer', 'Offer publicly shifts to "First campaign on us with a 2-month commit" (runs all of July)'],
          ['Referral program', 'Referral program goes live (detailed in Section 11)'],
          ['Social proof', 'Customer coverage drives social proof — every placement becomes a content moment'],
          ['Paid creative', 'Paid creative optimised based on Phase 1 data — kill underperformers, double down on winners'],
          ['Organic content', 'First wave of organic content carousels deployed across Pitchr brand channels'],
        ],
      },
      {
        title: 'Phase 3 — Scale (August 1 – August 31)',
        job: 'Job: Compound what works. Set up Q4.',
        points: [
          ['Paid spend', 'Scale paid spend in proven channels'],
          ['Creative', 'Refresh creative against new audiences'],
          ['Referral program', 'Referral program contributes meaningfully (target: 15% of new demos by month-end)'],
          ['KPI', '20-customer KPI hit; planning begins for Q4 push toward the 100-customer Year 1 target'],
        ],
      },
    ],
  },
  {
    tab: 'Messaging',
    eyebrow: '3. Campaign Messaging',
    title: 'Every line of copy in every channel should ladder back to something in this section.',
    intro: 'Pitchr is the modern PR platform built for businesses that need media coverage without the agency overhead.',
    type: 'messaging',
    value: 'Get covered. Without the retainer, the WIP meetings, or the BS.',
    body: 'It\'s not an agency. It\'s not DIY. It\'s the third option — and the third option is what most of the audience has been waiting for without knowing it exists.',
    pillars: [
      ['1. Accessibility', 'PR doesn\'t have to mean a $10K retainer. From $1,500/month.', 'Pricing campaigns, paid social hooks, comparison content'],
      ['2. Real Expertise + Real Platform', 'Senior PR humans, AI-powered workflow. Not a bot. Not an agency.', 'Trust-building, brand POV, demos'],
      ['3. Customer Control', 'You stay in the driver\'s seat. Brief it. Approve it. Watch it land.', 'Product demos, onboarding, feature stories'],
      ['4. Built by Insiders', 'Built by people with 10 years of agency PR experience — the people who saw what was broken and decided to fix it.', 'Brand POV content, demo positioning, credibility sections'],
      ['5. Results, Not Process', 'From brief to coverage in weeks, not quarters. Real placements, not retainer reports.', 'Case studies, social proof, results-led content'],
    ],
  },
  {
    tab: 'Themes',
    eyebrow: '4. The Campaign Themes',
    title: 'Four recurring narrative pillars.',
    intro: 'Each one can run for months and support dozens of pieces of content. They don\'t compete — they work different angles of the same brand truth.',
    type: 'themes',
    cards: [
      ['Theme 1: Brief it. Approve it. Covered.', 'Mechanic-led. How Pitchr actually works. Speaks to results and user control.', ['Real coverage. No fluff.', 'Monday: brief it. Still Monday: pitch out.', 'The whole agency process. Without the whole agency process.']],
      ['Theme 2: Senior PR. On demand.', 'Credibility theme. Anchored in 10 years of agency experience.', ['The PR humans inside Pitchr have spent a decade getting clients into the media.', '10,000+ hours of PR work, so you don\'t have to.', 'Senior thinking. Without the senior account management.']],
      ['Theme 3: Built for the brief.', 'Customer theme. Stories about who Pitchr is for.', ['Built for the operator who just needs to hit send.', 'For business owners who\'d rather run their business than run a WIP meeting.', 'One product launch. One week. No in-house headaches. Pitchr.']],
      ['Theme 4: Coverage that earns its place.', 'Results theme. Real coverage, real outcomes.', ['Real publications. Real journalists. Real reads.', 'Three customers. Twelve placements. One quarter.', 'We don\'t promise coverage. We deliver it.']],
    ],
  },
  {
    tab: 'Offers',
    eyebrow: '5. Launch Offers',
    title: 'A two-stage offer structure',
    intro: 'A two-stage offer structure: a high-urgency launch offer that creates the moment, then a sustainable acquisition offer that runs through the rest of the campaign.',
    type: 'offers',
    stages: [
      {
        title: 'Stage 1: The Launch Offer (June 1 — limit 20 spots)',
        offer: 'The Offer: 3 months for the price of 2.',
        points: ['Sign up during launch, get your first month free.', 'Pay $1,500 in month 2 and $1,500 in month 3.', 'Free demo with a Pitchr PR professional included.', 'Credit card required at signup. Auto-charges from Month 2 unless cancelled (standard SaaS trial-to-paid mechanic).', 'Hard cap at 20 spots, available on a first-come-first-served basis.'],
        note: 'Customer pays: $3,000 total over 3 months (vs. $4,500 sticker) Pitchr discount per customer: $1,500 (one campaign value)',
      },
      {
        title: 'Stage 2: The Sustaining Offer (July 1 — open to all)',
        offer: 'The Offer: Your first campaign on us when you commit to 2 months.',
        points: ['Sign up with a 2-month minimum commitment.', 'First campaign free — 3 campaigns for the price of 2 in your first 2 months.', 'Runs as the public offer for the rest of the campaign.'],
        note: 'This becomes Pitchr\'s standing acquisition offer post-launch — sustainable, no awkward sunset moment, sound retention math because the 2-month commit forces customers to ride out the timing gap between campaign launch and coverage landing.',
      },
    ],
  },
  {
    tab: 'Numbers',
    eyebrow: '6. The Launch Offer — The Numbers',
    title: 'The Math',
    intro: 'Discount ceiling: 20 × $1,500 = $30,000 maximum exposure Average customer 90-day spend: $3,000 (assuming they stay through month 3)',
    type: 'numbers',
    rows: [
      ['Cap (all 20 spots fill, all stay 3 months)', '20', '$30,000', '$60,000', '$30,000'],
      ['Realistic (20 fill, 85% retain through 3 months)', '20 fill / ~17 retain', '$30,000', '~$50,000', '~$20,000'],
      ['Soft (15 spots fill, 80% retain)', '15 fill / ~12 retain', '$22,500', '~$36,000', '~$13,500'],
    ],
    why: [
      'Generates a real launch moment. The combination of "free first month" + a hard cap at 20 spots is inherently shareable and social. It gives the launch a story that customers will share and screenshot.',
      'Lowest possible psychological friction. A free first month is the lowest barrier to trial. Conversion will be materially higher than any % off discount.',
      'Built-in scarcity and urgency. A hard cap of 20 spots creates real urgency — there\'s a finite ceiling, and once it\'s reached, the offer is gone. Every signup tightens the supply for the next prospect.',
    ],
  },
  {
    tab: 'Paid Media',
    eyebrow: '7. Paid Media Tiers',
    title: 'Three budget options to choose from.',
    intro: 'Each has consequences attached.',
    type: 'paid',
    tiers: [
      ['Tier 1: Skinny — $1,500–$2,500/month', 'What it buys:', ['Meta: $1,200/month, 2–3 ads in rotation, narrow audience', 'LinkedIn: $300–$800/month, retargeting only (no cold prospecting)', 'Heavy reliance on organic content and customer referrals'], 'Expected output:', ['30–50 demos/month from paid (60% of total)', '40% of customers come from organic content and referrals', '5–8 new customers/month — Q1 KPI hit, but tight'], 'Risks: Little room to test creative. Slow channel validation. Organic content has to carry significant weight. Referral program needs to ramp fast given limited paid spend. LinkedIn ROI hard to prove at this spend.'],
      ['Tier 2: Lean — $3,000–$5,000/month (recommended)', 'What it buys:', ['Meta: $2,500/month, 5 ads in rotation, 2–3 audience segments', 'LinkedIn: $1,000–$1,500/month, retargeting + a layer of cold prospecting', 'Small budget for influencer co-marketing'], 'Expected output:', ['60–80 demos/month from paid (50–55% of total)', '10–12 new customers/month — Q1 KPI hit comfortably', 'Clear channel data by week 4–6 of launch'], 'Risks: Still requires good creative on the first 1–2 tests. LinkedIn spend needs tight targeting. Demands real attention to attribution.'],
      ['Tier 3: Aggressive — $6,000–$10,000/month', 'What it buys:', ['Meta: $5,000/month, 5–7 ad concepts, 4+ audience segments', 'LinkedIn: $2,000–$3,000/month, sponsored content + InMail', 'Higher-end production for hero creative'], 'Expected output:', ['100+ demos/month from paid (60–70% of total)', '15–25 new customers/month — Q1 KPI smashed', 'Faster path to 100 customers (month 6–8 instead of month 12)'], 'Risks: Higher cash burn early. Diminishing returns kick in faster if creative isn\'t strong. Demands operational capacity to handle inbound.'],
    ],
  },
  {
    tab: 'Channels',
    eyebrow: '8. Channel-Specific Messaging',
    title: 'The core message stays consistent.',
    intro: 'The expression of it adapts to the channel.',
    type: 'channels',
    cards: [
      ['8.1 LinkedIn — Paid', 'Audience mode: Higher-attention, B2B-fluent, scrolling between work Lead with: Insight or POV, not product Format:Strong visual + one-line hook + 2-line body + CTA', ['Marketing managers, this one\'s for you.', 'If you\'ve ever paid $10K a month for PR and wondered where it went — this one\'s for you.', 'Spent the last year asking "is the press release out yet?" Same.', 'AI is finally doing something useful for PR — but not in the way most of the noise suggests.']],
      ['8.2 LinkedIn — Organic (Pitchr Brand Page)', 'Audience mode: Following for product, customer wins, industry takes Format: Polished but not corporate Frequency: 5 posts/week', ['This week, one of our customers landed in the AFR.', 'Where does a $10K PR retainer actually go?']],
      ['8.3 Meta (Facebook + Instagram)', 'Audience mode: Broader, mixed-intent, more emotional Format: Image/video + short hook Best-performing concepts:Side-by-side comparisons, customer stories, coverage screenshots, bold brand statements', ['Same outcome. Different invoice.', 'PR was broken.', 'We rebuilt it.']],
      ['8.4 Cold Outreach (LinkedIn DM)', 'Sample DM:', ['Hi [name],', 'Saw your post about [specific thing]. We\'re building something exactly for businesses like yours — Pitchr, on-demand PR for companies that don\'t want the $10K agency retainer. Senior PR humans, transparent pricing, no WIPs.', 'Currently offering a free first month for the first 20 customers if it\'s worth a quick chat?', '— Joseph']],
    ],
  },
  {
    tab: 'Organic',
    eyebrow: '9. Organic Social Strategy',
    title: 'The Approach',
    intro: 'The blog content already on the Pitchr site is the raw material — repurpose it across every social channel. Long-form lives on the site; short-form lives on LinkedIn, Instagram, Meta.',
    type: 'organic',
    cadence: ['Pitchr brand page (LinkedIn): 5 posts/week', 'Instagram: 4 posts/week + daily Stories', 'TikTok (optional, test only): 2–3 posts/week if appetite exists'],
    pillars: [
      ['Pillar 1 — Customer Wins (35%)', 'Real coverage placements. Screenshots, publication logos, customer name (with permission), the brief-to-coverage timeline. The single most persuasive content Pitchr can publish. Format: "This week, one of our customers got into…" — works as a carousel on LinkedIn, a Reel on Instagram, a screenshot post on every platform.'],
      ['Pillar 2 — PR Education (30%)', 'Repurpose the blog content. Carousels, threads, short videos. Each blog becomes 4–5 social posts:'],
      ['Pillar 3 — Brand Perspective (20%)', 'Brand-voice insights on the PR industry, journalism, and how earned media actually works. Educational and confident without being personal. Establishes Pitchr as a credible category voice — opinions about the industry, not opinions from a person. Examples: "Where your retainer actually goes," "What journalists actually look for in a pitch," "Why most PR reporting is theatre."'],
      ['Pillar 4 — Product / Build-in-Public (15%)', 'Feature releases, dashboard glimpses, roadmap teases, "here\'s what we shipped this week." Builds trust by showing real progress.'],
    ],
  },
  {
    tab: 'Email',
    eyebrow: '10. Email Strategy',
    title: 'Pitchr has ~3,000 contacts on the email list.',
    intro: 'That\'s a real asset. The launch should treat email as a primary acquisition and conversion channel.',
    type: 'email',
    sequences: [
      ['Send 1 — Pre-launch tease (May 27):', 'Subject: Something we\'ve been building.', 'For the first time, PR doesn\'t have to mean a $10K retainer.'],
      ['Send 2 — Launch day (June 1, morning):', 'Subject: We\'re live. 20 free-month spots are open.', 'Pitchr is officially live.'],
      ['Sequence 2 — Final Reminder (June 8, to non-converters)', 'Subject: Only [X] of 20 spots left.', 'Pitchr\'s launch offer is filling fast. Whatever\'s left when you read this is what\'s left.'],
      ['Sequence 3 — Onboarding (new customers)', 'Goal: Get the first campaign live within 14 days of signup — the single biggest retention driver.', 'Day 0: Welcome + "Step 1: brief your first campaign"'],
      ['Sequence 4 — Monthly Brand Newsletter (post-launch)', 'Brand-voice newsletter, monthly, to the full list.', 'Industry commentary, customer wins, one piece of PR thinking. The kind of email people actually open. Builds long-term brand affinity and re-engagement between purchase moments.'],
    ],
  },
  {
    tab: 'Referral',
    eyebrow: '11. Referral Program',
    title: 'The Offer',
    intro: 'For the referrer: Refer a brand, get a free month of Pitchr. For the referred: First campaign on us when you sign up.',
    type: 'referral',
    body: 'Dual-sided. Both parties benefit. Critical for actual sharing behaviour.',
    cards: [
      ['The Mechanic', 'Each customer gets a unique referral link in their Pitchr dashboard. Tracks signups, conversions, and credits applied. Free months stack — refer 3 customers in a quarter, get 3 free months.'],
      ['The Trigger Moment', 'This is the most important design decision in the program: the referral prompt fires when a customer gets coverage, not at random.'],
      ['In-platform pop-up:', 'Congrats — your campaign landed in [publication]. Want to share your win? Refer another brand to Pitchr and we\'ll give you a free month. [Share my link →]'],
      ['Follow-up email (2 hours after coverage logged):', 'Subject: You\'re in [publication]. Want to do that for a friend?'],
    ],
  },
  {
    tab: 'KPIs',
    eyebrow: '12. KPIs & Reporting',
    title: 'North Star',
    intro: 'Demo bookings → conversions to paid.',
    type: 'kpis',
    rows: [
      ['Launch month (June)', '30–40', '12–15', '+600'],
      ['Sustain (July)', '30–40', '6–8', '+500'],
      ['Scale (August)', '35–50', '6–10', '+400'],
      ['Total Q1', '95–130', '24+', '+1,500'],
    ],
    benchmarks: ['Demo booked → paid: target 25–30% (B2B SaaS standard)', 'Cost per demo (paid blended): target <$150', 'Customer acquisition cost (CAC): target <$500 blended', 'Time-to-first-coverage (product success metric): target <21 days from signup'],
    cadence: ['Weekly: Paid performance, demos booked, demo-to-close conversion', 'Monthly: Full marketing review, channel ROI, content performance', 'End of Q1 (Aug 31): Strategic review, channel reweighting, plan for Q4 push toward 100-customer Year 1 KPI'],
  },
  {
    tab: 'Brief',
    eyebrow: '13. The One-Sentence Brief',
    title: 'If everything in this document reduces to a single sentence:',
    intro: 'Pitchr is the third option between hiring a PR agency and doing nothing — and our job in the next 90 days is to make that third option visible, credible, and irresistible to enough growing Australian businesses to land 20 paying customers and 1,500 new contacts.',
    type: 'brief',
    body: 'Everything else is execution.',
  },
];

function Eyebrow({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-1 rounded-full border border-[#A6FF00]/40 bg-[#A6FF00]/10 px-2.5 py-1 text-[10px] font-bold tracking-tight text-[#A6FF00]">
      <span className="h-1 w-1 rounded-full bg-[#A6FF00]" />
      {children}
    </div>
  );
}

function Heading({ children }) {
  return <h2 className="text-4xl font-black leading-[0.92] tracking-[-0.065em] text-white md:text-6xl">{children}</h2>;
}

function Intro({ children }) {
  return <p className="mt-5 max-w-4xl text-sm font-medium leading-7 text-white/60">{children}</p>;
}

function Shell({ section, children }) {
  return (
    <div className="relative min-h-full overflow-y-auto bg-[#050505]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(166,255,0,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent)]" />
      <div className="relative z-10 p-8 md:p-10">
        <Eyebrow>{section.eyebrow}</Eyebrow>
        <Heading>{section.title}</Heading>
        <Intro>{section.intro}</Intro>
        {children}
      </div>
    </div>
  );
}

function Card({ title, children, highlight = false }) {
  return (
    <div className={`rounded-[1.5rem] border p-6 ${highlight ? 'border-[#A6FF00] bg-[#A6FF00] text-black' : 'border-[#A6FF00]/20 bg-white/[0.035] text-white'}`}>
      <h3 className="text-lg font-black tracking-[-0.04em]">{title}</h3>
      <div className={`mt-3 text-xs font-medium leading-5 ${highlight ? 'text-black/70' : 'text-white/55'}`}>{children}</div>
    </div>
  );
}

function BulletList({ items }) {
  return <ul className="space-y-2">{items.map((item) => <li key={item}>• {item}</li>)}</ul>;
}

function Goals({ section }) {
  return <Shell section={section}><div className="mt-9 grid gap-4 md:grid-cols-3">{section.rows.map(([goal, target, why]) => <Card key={goal} title={goal}><p className="text-3xl font-black tracking-[-0.06em] text-[#A6FF00]">{target}</p><p className="mt-3">{why}</p></Card>)}</div></Shell>;
}

function Timeline({ section }) {
  return <Shell section={section}><div className="mt-9 grid gap-4 md:grid-cols-3">{section.phases.map((phase, i) => <Card key={phase.title} title={phase.title} highlight={i === 0}><p className="mb-4 font-bold">{phase.job}</p>{phase.points.map(([label, body]) => <div key={label} className="mb-4"><strong>{label}</strong><p className="mt-1">{body}</p></div>)}</Card>)}</div></Shell>;
}

function Messaging({ section }) {
  return <Shell section={section}><div className="mt-8 rounded-[1.5rem] border border-[#A6FF00]/30 bg-[#A6FF00] p-6 text-black"><div className="text-[10px] font-black uppercase tracking-[0.18em]">Value Proposition</div><div className="mt-2 text-3xl font-black tracking-[-0.065em]">{section.value}</div></div><p className="mt-5 text-sm font-medium leading-7 text-white/60">{section.body}</p><div className="mt-5 grid gap-3 md:grid-cols-5">{section.pillars.map(([pillar, says, use]) => <Card key={pillar} title={pillar}><strong>What it says</strong><p>{says}</p><strong className="mt-3 block">When to use</strong><p>{use}</p></Card>)}</div></Shell>;
}

function Themes({ section }) {
  return <Shell section={section}><div className="mt-8 grid gap-4 md:grid-cols-2">{section.cards.map(([title, body, lines]) => <Card key={title} title={title}><p>{body}</p><div className="mt-4 space-y-2">{lines.map((line) => <p key={line} className="rounded-2xl bg-black/35 p-3 text-sm font-black tracking-[-0.03em] text-white">{line}</p>)}</div></Card>)}</div></Shell>;
}

function Offers({ section }) {
  return <Shell section={section}><div className="mt-8 grid gap-4 md:grid-cols-2">{section.stages.map((stage, i) => <Card key={stage.title} title={stage.title} highlight={i === 0}><p className="mb-4 text-base font-black">{stage.offer}</p><BulletList items={stage.points} /><p className="mt-4 font-bold">{stage.note}</p></Card>)}</div></Shell>;
}

function Numbers({ section }) {
  return <Shell section={section}><div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#A6FF00]/20 bg-white/[0.035]">{section.rows.map((row) => <div key={row[0]} className="grid gap-3 border-b border-[#A6FF00]/10 p-5 last:border-b-0 md:grid-cols-5">{row.map((cell) => <div key={cell} className="text-sm font-black text-white">{cell}</div>)}</div>)}</div><div className="mt-5 grid gap-3 md:grid-cols-3">{section.why.map((item) => <Card key={item} title="Why This Offer Works"><p>{item}</p></Card>)}</div></Shell>;
}

function Paid({ section }) {
  return <Shell section={section}><div className="mt-8 grid gap-4 md:grid-cols-3">{section.tiers.map(([title, buyLabel, buys, outputLabel, outputs, risks], i) => <Card key={title} title={title} highlight={i === 1}><strong>{buyLabel}</strong><BulletList items={buys} /><strong className="mt-4 block">{outputLabel}</strong><BulletList items={outputs} /><p className="mt-4">{risks}</p></Card>)}</div></Shell>;
}

function Channels({ section }) {
  return <Shell section={section}><div className="mt-8 grid gap-4 md:grid-cols-2">{section.cards.map(([title, body, examples]) => <Card key={title} title={title}><p>{body}</p><div className="mt-4 space-y-2">{examples.map((example) => <p key={example} className="rounded-2xl bg-black/35 p-3 text-sm font-black tracking-[-0.03em] text-white">{example}</p>)}</div></Card>)}</div></Shell>;
}

function Organic({ section }) {
  return <Shell section={section}><div className="mt-8 grid gap-3 md:grid-cols-3">{section.cadence.map((item) => <Card key={item} title={item}><span /></Card>)}</div><div className="mt-5 grid gap-4 md:grid-cols-2">{section.pillars.map(([title, body]) => <Card key={title} title={title}><p>{body}</p></Card>)}</div></Shell>;
}

function Email({ section }) {
  return <Shell section={section}><div className="mt-8 grid gap-4 md:grid-cols-2">{section.sequences.map(([title, subject, body]) => <Card key={title} title={title}><strong>{subject}</strong><p className="mt-3">{body}</p></Card>)}</div></Shell>;
}

function Referral({ section }) {
  return <Shell section={section}><p className="mt-5 text-sm font-medium leading-7 text-white/60">{section.body}</p><div className="mt-8 grid gap-4 md:grid-cols-4">{section.cards.map(([title, body]) => <Card key={title} title={title}><p>{body}</p></Card>)}</div></Shell>;
}

function KPIs({ section }) {
  return <Shell section={section}><div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#A6FF00]/20 bg-white/[0.035]">{section.rows.map((row, index) => <div key={row[0]} className={`grid gap-3 border-b border-[#A6FF00]/10 p-5 last:border-b-0 md:grid-cols-4 ${index === section.rows.length - 1 ? 'bg-[#A6FF00] text-black' : 'text-white'}`}>{row.map((cell) => <div key={cell} className="text-sm font-black">{cell}</div>)}</div>)}</div><div className="mt-5 grid gap-3 md:grid-cols-4">{section.benchmarks.map((item) => <Card key={item} title={item}><span /></Card>)}</div><div className="mt-5 grid gap-3 md:grid-cols-3">{section.cadence.map((item) => <Card key={item} title={item}><span /></Card>)}</div></Shell>;
}

function Brief({ section }) {
  return <Shell section={section}><div className="mt-8 rounded-[2rem] border border-[#A6FF00]/30 bg-[#A6FF00] p-8 text-black"><p className="text-4xl font-black leading-[0.95] tracking-[-0.07em] md:text-6xl">{section.intro}</p></div><p className="mt-6 text-2xl font-black tracking-[-0.05em] text-white">{section.body}</p></Shell>;
}

const renderers = { goals: Goals, timeline: Timeline, messaging: Messaging, themes: Themes, offers: Offers, numbers: Numbers, paid: Paid, channels: Channels, organic: Organic, email: Email, referral: Referral, kpis: KPIs, brief: Brief };

export default function App() {
  const [cur, setCur] = useState(0);
  const section = sections[cur];
  const Page = renderers[section.type];
  const isFirst = cur === 0;
  const isLast = cur === sections.length - 1;
  const goTo = (index) => setCur(Math.max(0, Math.min(sections.length - 1, index)));

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-white antialiased md:py-10">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'); * { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; } @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <div className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[34px] border border-[#A6FF00]/20 bg-[#080808] shadow-2xl shadow-black/60">
        <section className="relative overflow-hidden border-b border-[#A6FF00]/15 px-8 py-10 md:px-12 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(166,255,0,0.18),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(166,255,0,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
          <div className="relative">
            <div className="absolute right-0 top-0 text-3xl font-black tracking-[-0.06em] text-white">Pitchr<span className="text-[#A6FF00]">.</span></div>
            <div className="mb-6 inline-flex items-center gap-1 rounded-full border border-[#A6FF00]/40 bg-[#A6FF00]/10 px-2.5 py-1 text-[10px] font-semibold text-[#A6FF00]">
              <span className="h-1 w-1 rounded-full bg-[#A6FF00]" />
              3-month launch campaign | June 1 – August 31
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white md:text-7xl">Pitchr Launch Strategy</h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-white/60">Design note: this document is the source of truth for the launch. Each numbered section is modular — designed to be laid out as its own slide, spread, or section in the final design deck.</p>
          </div>
        </section>
        <nav className="flex overflow-x-auto border-b border-[#A6FF00]/15 bg-[#050505] px-5 md:px-8" aria-label="Guide navigation">
          {sections.map((item, index) => <button key={item.tab} type="button" onClick={() => goTo(index)} className={`whitespace-nowrap border-b-2 px-4 py-4 text-xs font-bold tracking-tight transition ${cur === index ? 'border-[#A6FF00] text-[#A6FF00]' : 'border-transparent text-white/35 hover:text-white/80'}`}>{item.tab}</button>)}
        </nav>
        <section className="h-[820px] overflow-y-auto [scrollbar-gutter:stable]">
          <div key={cur} className="h-full animate-[fadeIn_0.24s_ease]"><Page section={section} /></div>
        </section>
        <footer className="flex items-center justify-between border-t border-[#A6FF00]/15 bg-[#050505] px-6 py-4 md:px-10">
          <button type="button" disabled={isFirst} onClick={() => goTo(cur - 1)} className="h-10 rounded-full border border-[#A6FF00]/25 bg-transparent px-5 text-xs font-bold text-white/55 transition hover:bg-[#A6FF00]/10 hover:text-white disabled:opacity-20">Back</button>
          <div className="flex items-center gap-2 text-xs font-bold text-white/35"><span className="h-1.5 w-1.5 rounded-full bg-[#A6FF00]" />{cur + 1} of {sections.length}</div>
          <button type="button" onClick={() => goTo(cur + 1)} className="h-10 rounded-full bg-[#A6FF00] px-5 text-xs font-black text-black transition hover:bg-[#A6FF00]/85">{isLast ? 'Done' : 'Next'}</button>
        </footer>
      </div>
    </main>
  );
}
