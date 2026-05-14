import React, { useMemo, useState } from 'react';

const tabs = ['Overview', 'Goals KPIs', 'Messaging', 'Channels', 'Timelines'];

const campaignShape = [
  ['Launch', 'June 1 - August 31 (3 months)', 'The 20 launch offer spots are open, paid media runs across Meta + LinkedIn + Google, organic content goes live, email sequences activate, referral program runs.'],
  ['Sustain', 'September 1 onwards', 'The sustaining offer kicks in for prospects who missed the 20 spots, and the campaign engine continues running on a steadier cadence.'],
];

const offers = [
  {
    title: 'Stage 1 - The Launch Offer',
    timing: 'June 1 - August 31, capped at 20 spots',
    headline: '3 months for the price of 2.',
    body: 'Sign up during the launch window, get your first month free. Pay $1,500 in month 2 and $1,500 in month 3.',
    points: [
      'The first month is free - $1,500 of campaign value at no cost',
      'A free demo with a Pitchr PR professional, walking them through the platform end-to-end',
      'Hand-held onboarding through their first campaign brief, pitch, and placement',
      'Full platform access from day one',
      'Hard cap at 20 spots, available on a first-come-first-served basis',
      'Credit card required at signup. Auto-charges from Month 2 unless cancelled.',
      'Customer pays $3,000 total over 3 months (vs. $4,500 sticker)',
      'Pitchr discount per customer: $1,500',
    ],
    note: "The goal for these 20 launch recipients isn't just acquisition. It's demonstration. Every one of them becomes an active platform user who's been walked through how Pitchr actually works - by a Pitchr PR professional.",
    highlight: true,
  },
  {
    title: 'Stage 2 - The Sustaining Offer',
    timing: 'September 1 onwards, open to all',
    headline: 'Your first campaign on us when you commit to 2 months.',
    body: "For prospects who missed the 20 launch spots, this becomes Pitchr's standing offer. Sign up with a 2-month minimum commitment. First campaign free - 3 campaigns for the price of 2 in the first 2 months.",
    points: [
      'Sustainable - no awkward sunset moment',
      'The 2-month commit solves the biggest product risk (customers churning before coverage lands)',
      'Cleaner retention math than the launch offer because of the upfront commitment',
      'Runs indefinitely as the default acquisition mechanic',
    ],
    note: "If the 20 launch spots fill significantly faster than 3 months, the sustain stage can be deployed earlier at the team's discretion. September 1 is a planning anchor, not a hard date.",
  },
];

const offerMath = [
  ['Cap (all 20 spots fill, all stay 3 months)', '20', '$30,000', '$60,000', '$30,000'],
  ['Realistic (20 fill, 85% retain through 3 months)', '20 fill / ~17 retain', '$30,000', '~$50,000', '~$20,000'],
  ['Soft (15 spots fill, 80% retain)', '15 fill / ~12 retain', '$22,500', '~$36,000', '~$13,500'],
];

const goals = [
  ['Customers', '20 active paying customers by end of August', 'Primary commercial KPI'],
  ['Database', '1,500+ new contacts added to email list', 'Compounds beyond Q1 - fuels the next campaign at near-zero cost'],
  ['Audience', '5,000+ followers on the Pitchr LinkedIn brand page by end of August', 'Owned reach that compounds beyond Q1. Reduces dependency on paid for every future campaign.'],
];

const benchmarks = [
  'Demo booked to paid: target 25-30% (B2B SaaS standard)',
  'Cost per demo (paid blended): target <$150',
  'Customer acquisition cost (CAC): target <$500 blended',
  'Time-to-first-coverage (product success metric): target <21 days from signup',
];

const kpiRows = [
  ['Launch month (June)', '30-40', '12-15', '+600'],
  ['Mid-launch (July)', '30-40', '6-8', '+500'],
  ['Late-launch (August)', '35-50', '6-10', '+400'],
  ['Total Q1', '95-130', '24+', '+1,500'],
];

const reportingCadence = [
  'Weekly: Paid performance, demos booked, demo-to-close conversion, channel ROI',
  'Monthly: Full marketing review, content performance, customer onboarding metrics',
  'End of Q1 (August 31): Strategic review, channel reweighting, plan for Q4 push toward the 100-customer Year 1 KPI',
];

const messagingPillars = [
  ['1. Accessibility', "PR doesn't have to mean a $10K retainer. From $1,500/month.", 'Pricing campaigns, paid social hooks, comparison content'],
  ['2. Real Expertise + Real Platform', 'Senior PR humans, AI-powered workflow. Not a bot. Not an agency.', 'Trust-building, brand POV, demos'],
  ['3. Customer Control', "You stay in the driver's seat. Brief it. Approve it. Watch it land.", 'Product demos, onboarding, feature stories'],
  ['4. Built by Insiders', 'Built by people with 10 years of agency PR experience.', 'Brand POV content, demo positioning, credibility sections'],
  ['5. Results, Not Process', 'From brief to coverage in weeks, not quarters. Real placements, not retainer reports.', 'Case studies, social proof, results-led content'],
];

const bannedCopy = ['Revolutionary', 'synergy', 'leverage', 'unlock', 'empower (as a verb)', "we're excited to announce", 'powered by AI as the lead message'];

const themes = [
  ['Theme 1: Brief it. Approve it. Covered.', 'Mechanic-led. How Pitchr actually works.', ['Real coverage. No fluff.', 'Monday: brief it. Still Monday: pitch out.', 'The whole agency process. Without the whole agency process.']],
  ['Theme 2: Senior PR. On demand.', 'Credibility theme. Anchored in 10 years of agency experience.', ['The PR humans inside Pitchr have spent a decade getting clients into the media.', "10,000+ hours of PR work, so you don't have to.", 'Senior thinking. Without the senior account management.']],
  ['Theme 3: Built for the brief.', 'Customer theme. Stories about who Pitchr is for.', ['Built for the operator who just needs to hit send.', "For business owners who'd rather run their business than run a WIP meeting.", 'One product launch. One week. No in-house headaches. Pitchr.']],
  ['Theme 4: Coverage that earns its place.', 'Results theme.', ['Real publications. Real journalists. Real reads.', "We don't promise coverage. We deliver it."]],
];

const channelMix = [
  ['Paid Media (Meta, LinkedIn, Google)', 'Demand generation, demo bookings', 'June 1 - August 31', 'Marketing + agency / freelance'],
  ['Organic Social (LinkedIn, Instagram)', 'Trust, credibility, audience growth', 'Pre-launch population + weekly cadence from June 1', 'Content creator (briefed separately)'],
  ['Email', 'Conversion of existing 3,000-person database + nurture of new sign-ups', 'Launch week + ongoing', 'Marketing'],
  ['Website', 'Conversion of all inbound traffic', 'Live for launch', 'Marketing + dev'],
  ['Referral Program', 'Compounding acquisition once customer base grows', 'From mid-July', 'Product + marketing'],
];

const paidBudget = [
  ['Meta (Facebook + Instagram)', '$2,000', 'Volume + retargeting. Broad reach to founders/marketing managers. Cheap CPMs, fast creative testing.'],
  ['LinkedIn', '$1,200', 'High-intent prospecting + retargeting. Reaches the marketing manager segment by job title. Higher CPMs but better intent.'],
  ['Google Ads', '$1,300', 'Capture high-intent search demand. People actively searching PR agency Australia, press release service, alternatives to PR agencies, etc.'],
  ['Influencer / partner co-marketing', '$500 (flexible)', 'Small budget for opportunistic partnerships - boosted posts, sponsored newsletter mentions, founder-network amplification.'],
  ['Total', '~$5,000/month', ''],
];

const paidNotes = [
  ['Meta', ['5 creative concepts in rotation: The Receipt, The Coverage Wall, The Brand Statement, The 3-for-2 Offer Hook, The Outcome (Brief on Monday. Live by Friday.)', '2-3 audience segments: marketing managers, business owners, retargeting', 'Format mix: 60% static image, 30% Reels-style vertical video, 10% carousel', 'Test cycles: weekly creative refresh based on CTR, kill anything under 1.5% by week 2', 'CTA: Book a demo cold, Claim a spot retargeting']],
  ['LinkedIn', ['4 creative concepts in rotation: The Receipt, The Industry Truth, The Outcome, The AI-in-PR Angle', 'Audience targeting: Marketing Manager / Head of Marketing / Founder titles at 10-200 employee companies in Australia, plus retargeting layer', 'Format mix: 70% single image with strong hook + body copy, 30% short-form video', 'Sponsored content + Message Ads to test InMail performance', "Tightly targeted - don't waste spend on too-broad audiences"]],
  ['Google Ads', ['Search campaigns targeting high-intent queries', 'PR agency Australia + variants', 'Press release service + variants', 'Alternatives to named PR agencies', 'Affordable PR Australia', 'PR for startups Australia', 'Branded search (Pitchr) - defensive, low-cost, high-conversion', 'Ad copy variants: launch offer-led, value-prop-led, credibility-led', 'Conversion optimisation: target Book a demo form fills']],
  ['Influencer / partner co-marketing', ['Identify 3-5 relevant founder-network or marketing-community newsletters/podcasts that take sponsored placements', 'Small spend per placement ($150-$500)', "Test-and-learn - keep what converts, drop what doesn't"]],
];

const paidTiers = [
  ['Tier 1 - Skinny ($1,500-$2,500/month)', 'Scale down option', ['Meta: $1,000/month (2-3 ads, narrow audience)', 'LinkedIn: $400/month (retargeting only)', 'Google Ads: $800/month (branded + 2-3 high-intent search terms only)', 'Expected output: 30-50 demos/month, 5-8 new customers/month - Q1 KPI hit but tight', 'Risks: limited creative testing, slow channel validation, harder to prove channel ROI']],
  ['Tier 2 - Lean ($3,000-$5,000/month)', 'Recommended', ['The default budget tier. This is what the plan is built around.', '60-80 demos/month from paid (50-55% of total demos)', '10-12 new customers/month from paid - Q1 KPI hit comfortably', 'Clear channel performance data by weeks 4-6 of launch']],
  ['Tier 3 - Aggressive ($6,000-$10,000/month)', 'Scale up option', ['Meta: $4,000/month (5-7 ad concepts, 4+ audience segments)', 'LinkedIn: $2,500/month (sponsored content + InMail at scale)', 'Google Ads: $2,500/month (broader search coverage + retargeting display)', 'Higher-end production for hero creative', 'Expected output: 100+ demos/month, 15-25 new customers/month - Q1 KPI smashed', 'Faster path to 100-customer Year 1 KPI (month 6-8 instead of month 12)', 'Risks: higher cash burn early, demands operational capacity for inbound']],
];

const organicTopics = [
  'What Pitchr is (the third option)',
  'Pitchr vs the traditional agency model',
  'Where your retainer actually goes',
  'How journalists actually pick stories',
  'AI in PR - what it gets right and wrong',
  'What a good press release looks like in 2026',
  'The case for on-demand PR',
  'Why PR matters more for scale-ups than they think',
  'Brief it. Approve it. Covered. (product-led)',
  'Senior PR. On demand. (credibility-led)',
  'Built for the brief. (audience-led)',
  'Common PR myths debunked',
];

const emailSequences = [
  ['Sequence 1 - Launch announcements to the full 3,000 list', ['Send 1 (May 27 - pre-launch tease): Something we have been building. Brief, brand-voice. Drives email signups for launch alerts.', 'Send 2 (June 1 - launch day): We are live. 20 free-month spots are open. Strong CTA, direct to the offer page.', 'Send 3 (June 8 - final reminder): Only [X] of 20 spots left. Hard urgency. Sent to non-converters from the first two emails.']],
  ['Sequence 2 - Onboarding (new customers)', ['Goal: get the first campaign live within 14 days of signup. Time-to-first-coverage is the single biggest retention driver.', 'Day 0: Welcome + Step 1: brief your first campaign', 'Day 2: What a great brief looks like (with examples)', 'Day 5: Check-in - Your campaign is live. Here is what happens next.', 'Day 10: Need help refining your angle? + Pitchr PR professional intro', 'Day 14: Celebration of first coverage (if landed) + referral invite']],
  ['Sequence 3 - Demo follow-up nurture', ["For anyone who books a demo but doesn't sign up. Three-email sequence over 14 days, focused on objection-handling, offer urgency, and the sustaining offer once the 20 spots fill."]],
  ['Sequence 4 - Monthly Brand Newsletter', ['Brand-voice newsletter, monthly, to the full list. Industry commentary, brand perspective, one piece of PR thinking. Builds long-term brand affinity between purchase moments.']],
];

const websiteUpdates = [
  "Launch offer landing page (3 months for the price of 2, what's included, sign-up flow)",
  'Updated homepage hero to feature the launch offer',
  'How it works section refreshed with the Pitchr PR professional hand-holding angle',
  "Sustaining offer landing page built and ready to switch on (live from September 1, or earlier at team's discretion if 20 spots fill fast)",
  'Demo booking flow tested end-to-end',
  'Pixel tracking confirmed across Meta, LinkedIn, Google Ads, and email',
];

const referralPoints = [
  'The offer: Refer a brand, get a free month. The referred customer gets their first campaign on us.',
  'Active from: mid-July onwards (once a meaningful base of customers is onboarded and starting to see results - roughly 4-6 weeks into launch).',
  'The trigger: the referral prompt fires when a customer first sees coverage land - the peak emotional moment, and the moment they want to share their win.',
  'Each customer gets a unique referral link in their Pitchr dashboard',
  'Tracks signups, conversions, and credits applied',
  'Free months stack - refer 3 customers in a quarter, get 3 free months',
  'In-platform pop-up when coverage lands: Want to share your win? Refer a brand and get a free month.',
  'Follow-up email 2 hours later: You are in [publication]. Want to do that for a friend?',
];

const timelineGroups = [
  {
    group: 'Website',
    colour: 'lime',
    rows: [
      ['Launch offer landing page', 'Build the 3-for-2 offer page with what is included, sign-up flow and demo CTA.', 'Late May', 10, 10],
      ['Homepage hero update', 'Refresh homepage hero to feature the launch offer.', 'Late May', 12, 8],
      ['How it works refresh', 'Add the Pitchr PR professional hand-holding angle.', 'Late May', 12, 8],
      ['Sustaining offer page', 'Build and hold the sustaining offer page, ready to switch on.', 'Late May - June', 14, 18],
      ['Demo flow + tracking', 'Test booking flow and confirm Meta, LinkedIn, Google Ads and email tracking.', 'Late May', 16, 5],
    ],
  },
  {
    group: 'Organic Social',
    colour: 'blue',
    rows: [
      ['12-post launch stockpile', 'Create 12 Reels-led posts live on Instagram + LinkedIn before or at launch.', 'Late May - June 1', 8, 13],
      ['Organic launch goes live', 'Publish launch content so profiles look active and considered from day one.', 'June 1', 20, 4],
      ['Weekly Reel cadence', 'Publish 1 Reel per week on each profile, sourced from blog content.', 'June - August', 22, 58],
    ],
  },
  {
    group: 'Email',
    colour: 'pink',
    rows: [
      ['Pre-launch tease', 'Send Something we have been building.', 'May 27', 17, 3],
      ['Launch announcement', 'Send We are live. 20 free-month spots are open.', 'June 1', 20, 3],
      ['Final reminder', 'Send Only [X] of 20 spots left.', 'June 8', 24, 3],
      ['Onboarding sequence', 'Move new customers from signup to first live campaign within 14 days.', 'June - August', 22, 58],
      ['Demo follow-up nurture', 'Run three-email nurture for demo bookers who do not sign up.', 'June - August', 24, 56],
      ['Monthly newsletter', 'Send monthly brand-voice newsletter to full list.', 'Post-launch', 28, 52],
    ],
  },
  {
    group: 'Paid Media',
    colour: 'orange',
    rows: [
      ['Meta campaign', 'Run creative rotation and retargeting with demo booking CTA.', 'June - August', 20, 60],
      ['LinkedIn campaign', 'Target Marketing Manager, Head of Marketing and Founder roles.', 'June - August', 20, 60],
      ['Google Search', 'Capture high-intent PR search demand.', 'June - August', 20, 60],
      ['Weekly optimisation', 'Review CTR, pause weak ads, refresh creative and scale winners.', 'Weekly from June', 23, 57],
      ['Partner co-marketing', 'Test 3-5 founder-network or marketing-community placements.', 'June - August', 30, 50],
    ],
  },
  {
    group: 'Customer + Referral',
    colour: 'cyan',
    rows: [
      ['Customer onboarding', 'Hand-held onboarding through demo, platform, first campaign brief, pitch and placement.', 'June - August', 20, 60],
      ['Coverage capture', 'Turn landed coverage into social proof, posts and case study material.', 'June - August', 25, 55],
      ['Referral program', 'Launch referral links, coverage-triggered prompt and follow-up email.', 'Mid-July onwards', 50, 30],
    ],
  },
  {
    group: 'Review + Sustain',
    colour: 'purple',
    rows: [
      ['Q1 strategic review', 'Review performance, ROI, onboarding metrics and Q4 growth plan.', 'August 31', 78, 4],
      ['Sustaining offer switch', 'Move to Your first campaign on us when you commit to 2 months.', 'September 1 or earlier', 80, 20],
    ],
  },
];

function validateTimeline(groups) {
  const errors = [];
  groups.forEach((group) => {
    if (!group.group || !Array.isArray(group.rows)) {
      errors.push('Timeline group is missing required fields.');
      return;
    }
    group.rows.forEach((row) => {
      if (row.length !== 5) {
        errors.push(`Timeline row ${row[0] || 'unknown'} should have five fields.`);
        return;
      }
      const label = row[0];
      const start = row[3];
      const width = row[4];
      if (typeof start !== 'number' || start < 0 || start > 100) errors.push(`${group.group} / ${label}: start must be 0-100`);
      if (typeof width !== 'number' || width <= 0 || width > 100) errors.push(`${group.group} / ${label}: width must be 1-100`);
      if (start + width > 102) errors.push(`${group.group} / ${label}: bar extends beyond chart bounds`);
    });
  });
  return errors;
}

function runSelfTests() {
  const errors = [];
  if (tabs.length !== 5) errors.push('Expected exactly five top-level tabs.');
  if (goals.length !== 3) errors.push('Expected three primary goals.');
  if (campaignShape.length !== 2) errors.push('Expected launch and sustain campaign stages.');
  if (timelineGroups.length < 1) errors.push('Expected at least one timeline group.');
  return errors.concat(validateTimeline(timelineGroups));
}

function Eyebrow({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-1 rounded-full border border-[#A6FF00]/40 bg-[#A6FF00]/10 px-2.5 py-1 text-[10px] font-bold tracking-tight text-[#A6FF00]">
      <span className="h-1 w-1 rounded-full bg-[#A6FF00]" />
      {children}
    </div>
  );
}

function Heading({ children }) {
  return <h2 className="max-w-5xl text-3xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white md:text-5xl">{children}</h2>;
}

function Intro({ children }) {
  return <p className="mt-4 max-w-5xl text-sm font-normal leading-6 text-white/58">{children}</p>;
}

function Shell({ eyebrow, title, intro, children }) {
  return (
    <div className="relative min-h-full overflow-y-auto bg-[#050505]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(166,255,0,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent)]" />
      <div className="relative z-10 px-4 py-5 md:px-6 md:py-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{title}</Heading>
        <Intro>{intro}</Intro>
        {children}
      </div>
    </div>
  );
}

function Card({ title, children, highlight = false }) {
  const cardClass = highlight ? 'border-[#A6FF00] bg-[#A6FF00] text-black' : 'border-[#A6FF00]/20 bg-white/[0.035] text-white';
  const bodyClass = highlight ? 'text-black/70' : 'text-white/55';
  return (
    <div className={`rounded-[1.25rem] border p-5 ${cardClass}`}>
      <h3 className="text-base font-bold leading-snug tracking-[-0.025em]">{title}</h3>
      <div className={`mt-3 text-[13px] font-normal leading-5 ${bodyClass}`}>{children}</div>
    </div>
  );
}

function Table({ columns, rows, highlightLast = false }) {
  const gridTemplateColumns = `repeat(${columns.length}, minmax(0, 1fr))`;
  return (
    <div className="mt-5 overflow-x-auto rounded-[1.5rem] border border-[#A6FF00]/20 bg-white/[0.035]">
      <div className="min-w-[760px]">
        <div className="grid gap-3 border-b border-[#A6FF00]/10 p-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#A6FF00]" style={{ gridTemplateColumns }}>
          {columns.map((col) => <div key={col}>{col}</div>)}
        </div>
        {rows.map((row, index) => {
          const rowClass = highlightLast && index === rows.length - 1 ? 'bg-[#A6FF00] text-black' : 'text-white';
          return (
            <div key={`${row[0]}-${index}`} className={`grid gap-3 border-b border-[#A6FF00]/10 p-4 last:border-b-0 ${rowClass}`} style={{ gridTemplateColumns }}>
              {row.map((cell, cellIndex) => <div key={`${cell}-${cellIndex}`} className="text-[13px] font-medium leading-5">{cell}</div>)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BulletList({ items }) {
  return <ul className="space-y-2">{items.map((item, index) => <li key={`${item}-${index}`}>• {item}</li>)}</ul>;
}

function SectionTitle({ children }) {
  return <h3 className="mt-8 text-xl font-bold tracking-[-0.035em] text-white">{children}</h3>;
}

function Overview() {
  return (
    <Shell eyebrow="1. Overview" title="A focused, time-boxed launch campaign." intro="A clear offer, a defined audience, and a measurable target of 20 paying customers by end of August.">
      <SectionTitle>What this is</SectionTitle>
      <p className="mt-3 max-w-5xl text-sm font-normal leading-6 text-white/60">A focused, time-boxed launch campaign to bring Pitchr to market with a clear offer, a defined audience, and a measurable target of 20 paying customers by end of August.</p>
      <SectionTitle>The shape of the campaign</SectionTitle>
      <Table columns={['Stage', 'Window', 'What it does']} rows={campaignShape} />
      <Card title="A note on flexibility"><p>If the 20 launch spots fill significantly faster than 3 months, say by end of July, the sustain stage can be deployed earlier at the team&apos;s discretion. The September 1 date is a planning anchor, not a hard date.</p></Card>
      <SectionTitle>The Offers</SectionTitle>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {offers.map((offer) => (
          <Card key={offer.title} title={offer.title} highlight={offer.highlight}>
            <p className="font-semibold">{offer.timing}</p>
            <p className="mt-3 text-lg font-bold tracking-[-0.03em]">{offer.headline}</p>
            <p className="mt-3">{offer.body}</p>
            <div className="mt-4"><BulletList items={offer.points} /></div>
            <p className="mt-4 font-medium">{offer.note}</p>
          </Card>
        ))}
      </div>
      <SectionTitle>The Offer Math</SectionTitle>
      <Table columns={['Scenario', 'Customers', 'Discount cost', 'Revenue', 'Net']} rows={offerMath} />
      <div className="mt-5 rounded-[1.5rem] border border-[#A6FF00]/30 bg-[#A6FF00] p-6 text-black">
        <div className="text-[10px] font-black uppercase tracking-[0.18em]">Discount ceiling</div>
        <p className="mt-2 text-2xl font-black tracking-[-0.055em]">20 x $1,500 = $30,000 maximum exposure</p>
      </div>
      <SectionTitle>The One-Sentence Brief</SectionTitle>
      <div className="mt-5 rounded-[2rem] border border-[#A6FF00]/30 bg-white/[0.035] p-8 text-white">
        <p className="text-2xl font-bold leading-tight tracking-[-0.045em]">Pitchr is the third option between hiring a PR agency and doing nothing - and our job in the next 90 days is to make that third option visible, credible, and irresistible to enough growing Australian businesses to land 20 paying customers and 1,500 new contacts.</p>
        <p className="mt-5 text-lg font-bold tracking-[-0.03em] text-[#A6FF00]">Everything else is execution.</p>
      </div>
    </Shell>
  );
}

function GoalsKPIs() {
  return (
    <Shell eyebrow="2. Goals & KPIs" title="The marketing function has three jobs in the next 90 days." intro="Everything in this plan ladders to one of these numbers.">
      <SectionTitle>Primary Goals</SectionTitle>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {goals.map(([goal, target, why]) => <Card key={goal} title={goal}><p className="text-2xl font-bold tracking-[-0.04em] text-[#A6FF00]">{target}</p><p className="mt-3">{why}</p></Card>)}
      </div>
      <SectionTitle>Secondary KPIs</SectionTitle>
      <p className="mt-3 max-w-5xl text-sm font-normal leading-6 text-white/60">These are the operating metrics. Tracked weekly, used to optimise across the campaign.</p>
      <div className="mt-5 grid gap-3 md:grid-cols-4">{benchmarks.map((item) => <Card key={item} title={item}><span /></Card>)}</div>
      <SectionTitle>Phase-by-phase demo targets</SectionTitle>
      <Table columns={['Phase', 'Demo bookings', 'New customers', 'New contacts']} rows={kpiRows} highlightLast />
      <SectionTitle>Reporting Cadence</SectionTitle>
      <div className="mt-5 grid gap-3 md:grid-cols-3">{reportingCadence.map((item) => <Card key={item} title={item}><span /></Card>)}</div>
    </Shell>
  );
}

function Messaging() {
  return (
    <Shell eyebrow="3. Key Messaging" title="Every line of copy in every channel should ladder back to something in this section." intro="Pitchr is the modern PR platform built for businesses that need media coverage without the agency overhead.">
      <SectionTitle>Brand Positioning</SectionTitle>
      <p className="mt-3 max-w-5xl text-sm font-normal leading-6 text-white/60">Pitchr is the modern PR platform built for businesses that need media coverage without the agency overhead.</p>
      <p className="mt-3 max-w-5xl text-sm font-normal leading-6 text-white/60">It&apos;s not an agency. It&apos;s not DIY. It&apos;s the third option - and the third option is what most of the audience has been waiting for without knowing it exists.</p>
      <SectionTitle>Value Proposition</SectionTitle>
      <div className="mt-5 rounded-[1.5rem] border border-[#A6FF00]/30 bg-[#A6FF00] p-6 text-black"><div className="text-[10px] font-black uppercase tracking-[0.18em]">Value Proposition</div><div className="mt-2 text-2xl font-bold tracking-[-0.045em]">Get covered. Without the retainer, the WIP meetings, or the BS.</div><p className="mt-3 text-sm font-bold text-black/65">Everything Pitchr says should make this promise feel true.</p></div>
      <SectionTitle>The Five Key Messages</SectionTitle>
      <Table columns={['Pillar', 'What it says', 'When to use']} rows={messagingPillars} />
      <SectionTitle>Tone of Voice</SectionTitle>
      <Card title="Modern. Confident. Dry. Slightly irreverent. Specific over abstract. Built for screens, not boardrooms."><p>It should read like it was written by someone who has actually worked in PR and is allergic to corporate language. Short sentences. Strong verbs. Specific examples instead of vague claims. Skepticism about industry orthodoxy - never nastiness.</p></Card>
      <SectionTitle>Banned from Pitchr copy</SectionTitle>
      <div className="mt-5 flex flex-wrap gap-2">{bannedCopy.map((word) => <span key={word} className="rounded-full border border-[#A6FF00]/20 bg-white/[0.035] px-4 py-2 text-xs font-black text-white/60">{word}</span>)}</div>
      <SectionTitle>The Four Campaign Themes</SectionTitle>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{themes.map(([title, body, lines]) => <Card key={title} title={title}><p>{body}</p><div className="mt-4 space-y-2">{lines.map((line) => <p key={line} className="rounded-2xl bg-black/35 p-3 text-sm font-semibold tracking-[-0.02em] text-white">{line}</p>)}</div></Card>)}</div>
    </Shell>
  );
}

function Channels() {
  return (
    <Shell eyebrow="4. Channels" title="The operating brief." intro="Each channel has a clear role, a clear timing window, and clear deliverables. This detail feeds the Gantt chart.">
      <SectionTitle>Channel Mix at a Glance</SectionTitle>
      <Table columns={['Channel', 'Role', 'Active window', 'Owner']} rows={channelMix} />
      <SectionTitle>Paid Media</SectionTitle>
      <p className="mt-3 max-w-5xl text-sm font-normal leading-6 text-white/60">The job of paid media is to drive booked demos. Everything else is secondary.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">{paidTiers.map(([title, label, points], index) => <Card key={title} title={title} highlight={index === 1}><p className="font-black">{label}</p><div className="mt-4"><BulletList items={points} /></div></Card>)}</div>
      <SectionTitle>Tier 2 - Lean ($3,000-$5,000/month) - Recommended</SectionTitle>
      <Table columns={['Platform', 'Monthly spend', 'Role']} rows={paidBudget} />
      <div className="mt-5 grid gap-4 md:grid-cols-2">{paidNotes.map(([title, points]) => <Card key={title} title={title}><BulletList items={points} /></Card>)}</div>
      <Card title="Future paid channels to consider for Q4 onwards"><p>Programmatic display and podcast sponsorships. Both deliver real reach but have longer learning curves and bigger production requirements - better to validate Meta/LinkedIn/Google first before layering these in.</p></Card>
      <SectionTitle>Organic Social</SectionTitle>
      <Card title="The job of organic social"><p>The job of organic social is to populate the brand presence so that every prospect who lands on Pitchr&apos;s profiles sees momentum, credibility, and personality - and so that paid traffic clicking through to socials doesn&apos;t bounce on empty grids.</p></Card>
      <div className="mt-5 grid gap-4 md:grid-cols-2"><Card title="The Pre-Launch Stockpile"><p>12 posts live on each profile (Instagram + LinkedIn) before or at launch (June 1). Enough volume that the feed reads as active and considered, not new.</p></Card><Card title="Format direction"><p>Reels. Short-form vertical video performs better than static across both platforms in 2026.</p></Card><Card title="Content source"><p>The existing blog content on pitchr.com.au. Each blog post can become 1-2 Reels.</p></Card><Card title="Post-Launch Cadence"><p>1 post per week on each profile (Instagram + LinkedIn), sourced from blog content.</p></Card></div>
      <SectionTitle>Topic coverage for the 12 launch posts</SectionTitle>
      <div className="mt-5 grid gap-3 md:grid-cols-3">{organicTopics.map((topic) => <Card key={topic} title={topic}><span /></Card>)}</div>
      <SectionTitle>Email</SectionTitle>
      <p className="mt-3 max-w-5xl text-sm font-normal leading-6 text-white/60">Email is one of Pitchr&apos;s biggest assets. The existing 3,000-person database is a real launch lever - treat it as a primary acquisition channel, not an afterthought.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{emailSequences.map(([title, points]) => <Card key={title} title={title}><BulletList items={points} /></Card>)}</div>
      <SectionTitle>Website</SectionTitle>
      <Card title="The website&apos;s job during the launch is conversion"><p>Every paid click, email link, and organic referral lands here and should be moved toward the demo booking.</p></Card>
      <div className="mt-5 grid gap-3 md:grid-cols-3">{websiteUpdates.map((item) => <Card key={item} title={item}><span /></Card>)}</div>
      <SectionTitle>Referral Program</SectionTitle>
      <div className="mt-5 grid gap-3 md:grid-cols-2">{referralPoints.map((item) => <Card key={item} title={item}><span /></Card>)}</div>
    </Shell>
  );
}

const barColours = {
  lime: 'border-[#A6FF00] bg-[#A6FF00] text-black',
  blue: 'border-sky-300 bg-sky-300 text-black',
  pink: 'border-pink-300 bg-pink-300 text-black',
  orange: 'border-orange-300 bg-orange-300 text-black',
  cyan: 'border-cyan-300 bg-cyan-300 text-black',
  purple: 'border-violet-300 bg-violet-300 text-black',
};

const monthHeaders = [
  { month: 'May', weeks: ['', '', 'W3', 'W4'], align: 'text-center' },
  { month: 'June', weeks: ['W1', 'W2', 'W3', 'W4'], align: 'text-center' },
  { month: 'July', weeks: ['W1', 'W2', 'W3', 'W4'], align: 'text-center' },
  { month: 'August', weeks: ['W1', 'W2', 'W3', 'W4'], align: 'text-center' },
  { month: 'September', weeks: ['W1', 'W2', 'W3', 'W4'], align: 'text-center' },
];

function TimelineBar({ row, colour }) {
  const [tactic, what, when, start, width] = row;
  const left = `${start}%`;
  const barWidth = `${Math.max(width, 4)}%`;
  return (
    <div className="grid grid-cols-[260px_1fr]">
      <div className="border-r border-t border-white/10 px-4 py-3">
        <div className="text-[12px] font-black leading-4 tracking-tight text-white">{tactic}</div>
        <div className="mt-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#A6FF00]/75">{when}</div>
        <p className="mt-1 text-[10px] font-medium leading-4 text-white/45">{what}</p>
      </div>
      <div className="relative min-h-[78px] border-t border-white/10 bg-[#171717]">
        <div className="absolute inset-y-0 left-[20%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[40%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[60%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[80%] w-px bg-white/10" />
        <div className="absolute top-1/2 h-3 -translate-y-1/2 rounded-full bg-white/10" style={{ left, width: barWidth }} />
        <div className={`absolute top-1/2 flex min-w-[96px] -translate-y-1/2 items-center justify-center rounded-full border px-2 text-center text-[8px] font-black leading-none shadow-lg ${barColours[colour] || barColours.lime}`} style={{ left, width: barWidth, minHeight: '28px' }}>
          <span className="whitespace-normal break-words leading-[10px]">{when}</span>
        </div>
      </div>
    </div>
  );
}

function TimelineGroup({ group }) {
  return (
    <div className="grid min-w-[1180px] grid-cols-[220px_1fr] border-t border-white/10">
      <div className="flex items-center justify-end border-r border-white/10 bg-[#151515] px-4 py-4 text-right">
        <h3 className="text-lg font-black leading-5 tracking-[-0.045em] text-white">{group.group}</h3>
      </div>
      <div>{group.rows.map((row) => <TimelineBar key={`${group.group}-${row[0]}`} row={row} colour={group.colour} />)}</div>
    </div>
  );
}

function Timelines() {
  const validationErrors = useMemo(() => runSelfTests(), []);
  return (
    <Shell eyebrow="5. Timeline" title="Grouped execution Gantt." intro="Workstreams on the left, tactic rows in the middle, month/week grid on the right.">
      {validationErrors.length > 0 && <div className="mt-5 rounded-2xl border border-red-400/40 bg-red-400/10 p-4 text-xs font-bold text-red-200"><p>Timeline data check:</p><BulletList items={validationErrors} /></div>}
      <div className="mt-8 overflow-x-auto rounded-[1.5rem] border border-white/10 bg-[#111111]">
        <div className="grid min-w-[1180px] grid-cols-[220px_260px_1fr] border-b border-white/10">
          <div className="border-r border-white/10 px-4 py-3 text-[12px] font-black uppercase leading-4 tracking-tight text-white">Pitchr Launch</div>
          <div className="border-r border-white/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white/45">Tactic</div>
          <div className="grid grid-cols-5">
            {monthHeaders.map(({ month, weeks, align }) => <div key={month} className={`border-r border-white/10 px-2 py-3 last:border-r-0 ${align}`}><div className="text-sm font-black leading-none text-white">{month}</div><div className="mt-2 grid grid-cols-4 text-[9px] font-black leading-none text-white/45">{weeks.map((week, index) => <span key={`${month}-${index}`}>{week}</span>)}</div></div>)}
          </div>
        </div>
        {timelineGroups.map((group) => <TimelineGroup key={group.group} group={group} />)}
      </div>
    </Shell>
  );
}

const pages = [Overview, GoalsKPIs, Messaging, Channels, Timelines];

export default function App() {
  const [cur, setCur] = useState(0);
  const Page = pages[cur];
  const isFirst = cur === 0;
  const isLast = cur === tabs.length - 1;
  const goTo = (index) => setCur(Math.max(0, Math.min(tabs.length - 1, index)));

  return (
    <main className="min-h-screen bg-[#050505] px-16 py-8 text-white antialiased md:px-24 md:py-10">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'); * { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; } @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <div className="mx-auto w-full max-w-[calc(100vw-192px)] overflow-hidden rounded-[34px] border border-[#A6FF00]/20 bg-[#080808] shadow-2xl shadow-black/60">
        <section className="relative overflow-hidden border-b border-[#A6FF00]/15 px-4 py-6 md:px-6 md:py-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(166,255,0,0.18),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(166,255,0,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
          <div className="relative">
            <div className="absolute right-0 top-0 text-2xl font-extrabold tracking-[-0.045em] text-white">Pitchr<span className="text-[#A6FF00]">.</span></div>
            <div className="mb-4 inline-flex items-center gap-1 rounded-full border border-[#A6FF00]/40 bg-[#A6FF00]/10 px-2.5 py-1 text-[10px] font-semibold text-[#A6FF00]"><span className="h-1 w-1 rounded-full bg-[#A6FF00]" />3-month launch campaign | June 1 - August 31</div>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white md:text-6xl">Pitchr Launch Strategy</h1>
          </div>
        </section>
        <nav className="flex overflow-x-auto border-b border-[#A6FF00]/15 bg-[#050505] px-2.5 md:px-4" aria-label="Guide navigation">
          {tabs.map((tab, index) => <button key={tab} type="button" onClick={() => goTo(index)} className={`whitespace-nowrap border-b-2 px-4 py-3 text-xs font-semibold tracking-tight transition ${cur === index ? 'border-[#A6FF00] text-[#A6FF00]' : 'border-transparent text-white/35 hover:text-white/80'}`}>{tab}</button>)}
        </nav>
        <section className="h-[820px] overflow-y-auto [scrollbar-gutter:stable]"><div key={cur} className="h-full animate-[fadeIn_0.24s_ease]"><Page /></div></section>
        <footer className="flex items-center justify-between border-t border-[#A6FF00]/15 bg-[#050505] px-3 py-4 md:px-5">
          <button type="button" disabled={isFirst} onClick={() => goTo(cur - 1)} className="h-10 rounded-full border border-[#A6FF00]/25 bg-transparent px-5 text-xs font-bold text-white/55 transition hover:bg-[#A6FF00]/10 hover:text-white disabled:opacity-20">Back</button>
          <div className="flex items-center gap-2 text-xs font-bold text-white/35"><span className="h-1.5 w-1.5 rounded-full bg-[#A6FF00]" />{cur + 1} of {tabs.length}</div>
          <button type="button" onClick={() => goTo(cur + 1)} className="h-10 rounded-full bg-[#A6FF00] px-5 text-xs font-black text-black transition hover:bg-[#A6FF00]/85">{isLast ? 'Done' : 'Next'}</button>
        </footer>
      </div>
    </main>
  );
}
