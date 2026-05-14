import React, { useState } from 'react';

const tabs = ['Overview', 'Goals KPIs', 'Messaging', 'Channels', 'Timelines'];

const goals = [
  ['Customers', '20 active paying customers by end of August', 'Primary commercial KPI'],
  ['Database', '1,500+ new contacts added to email list', 'Compounds beyond Q1 — fuels the next campaign at near-zero cost'],
  ['Audience', '5,000+ followers on the Pitchr LinkedIn brand page by end of August', 'Owned reach that compounds beyond Q1. Reduces dependency on paid for every future campaign.'],
];

const kpiRows = [
  ['Launch month (June)', '30–40', '12–15', '+600'],
  ['Sustain (July)', '30–40', '6–8', '+500'],
  ['Scale (August)', '35–50', '6–10', '+400'],
  ['Total Q1', '95–130', '24+', '+1,500'],
];

const benchmarks = [
  'Demo booked → paid: target 25–30% (B2B SaaS standard)',
  'Cost per demo (paid blended): target <$150',
  'Customer acquisition cost (CAC): target <$500 blended',
  'Time-to-first-coverage (product success metric): target <21 days from signup',
];

const messagingPillars = [
  ['1. Accessibility', 'PR doesn\'t have to mean a $10K retainer. From $1,500/month.', 'Pricing campaigns, paid social hooks, comparison content'],
  ['2. Real Expertise + Real Platform', 'Senior PR humans, AI-powered workflow. Not a bot. Not an agency.', 'Trust-building, brand POV, demos'],
  ['3. Customer Control', 'You stay in the driver\'s seat. Brief it. Approve it. Watch it land.', 'Product demos, onboarding, feature stories'],
  ['4. Built by Insiders', 'Built by people with 10 years of agency PR experience — the people who saw what was broken and decided to fix it.', 'Brand POV content, demo positioning, credibility sections'],
  ['5. Results, Not Process', 'From brief to coverage in weeks, not quarters. Real placements, not retainer reports.', 'Case studies, social proof, results-led content'],
];

const themes = [
  ['Theme 1: Brief it. Approve it. Covered.', 'Mechanic-led. How Pitchr actually works. Speaks to results and user control.', ['Real coverage. No fluff.', 'Monday: brief it. Still Monday: pitch out.', 'The whole agency process. Without the whole agency process.']],
  ['Theme 2: Senior PR. On demand.', 'Credibility theme. Anchored in 10 years of agency experience.', ['The PR humans inside Pitchr have spent a decade getting clients into the media.', '10,000+ hours of PR work, so you don\'t have to.', 'Senior thinking. Without the senior account management.']],
  ['Theme 3: Built for the brief.', 'Customer theme. Stories about who Pitchr is for.', ['Built for the operator who just needs to hit send.', 'For business owners who\'d rather run their business than run a WIP meeting.', 'One product launch. One week. No in-house headaches. Pitchr.']],
  ['Theme 4: Coverage that earns its place.', 'Results theme. Real coverage, real outcomes.', ['Real publications. Real journalists. Real reads.', 'Three customers. Twelve placements. One quarter.', 'We don\'t promise coverage. We deliver it.']],
];

const channelCards = [
  ['8.1 LinkedIn — Paid', 'Audience mode: Higher-attention, B2B-fluent, scrolling between work Lead with: Insight or POV, not product Format:Strong visual + one-line hook + 2-line body + CTA', ['Marketing managers, this one\'s for you.', 'If you\'ve ever paid $10K a month for PR and wondered where it went — this one\'s for you.', 'Spent the last year asking "is the press release out yet?" Same.', 'AI is finally doing something useful for PR — but not in the way most of the noise suggests.']],
  ['8.2 LinkedIn — Organic (Pitchr Brand Page)', 'Audience mode: Following for product, customer wins, industry takes Format: Polished but not corporate Frequency: 5 posts/week', ['This week, one of our customers landed in the AFR.', 'Where does a $10K PR retainer actually go?']],
  ['8.3 Meta (Facebook + Instagram)', 'Audience mode: Broader, mixed-intent, more emotional Format: Image/video + short hook Best-performing concepts:Side-by-side comparisons, customer stories, coverage screenshots, bold brand statements', ['Same outcome. Different invoice.', 'PR was broken.', 'We rebuilt it.']],
  ['8.4 Cold Outreach (LinkedIn DM)', 'Sample DM:', ['Hi [name],', 'Saw your post about [specific thing]. We\'re building something exactly for businesses like yours — Pitchr, on-demand PR for companies that don\'t want the $10K agency retainer. Senior PR humans, transparent pricing, no WIPs.', 'Currently offering a free first month for the first 20 customers if it\'s worth a quick chat?', '— Joseph']],
];

const timelineRows = [
  {
    tactic: 'Launch Week',
    what: 'LAUNCH DAY. All paid channels go live. Brand launch emails send to the full 3,000-person database. Organic social blitz across LinkedIn brand page + Instagram. The 20 launch offer spots open for sign-up. Customer onboarding kicks off as spots fill.',
    when: 'June 1–7',
    start: 0,
    width: 8,
  },
  {
    tactic: 'Spot conversion',
    what: 'Spot conversion continues. First customer briefs start running. Brand-voice content amplifies launch momentum across channels.',
    when: 'June 8–14',
    start: 8,
    width: 8,
  },
  {
    tactic: 'First customer coverage',
    what: 'First customer coverage starts landing — every placement becomes a content moment. Case study format ready to capture wins.',
    when: 'June 15–21',
    start: 16,
    width: 8,
  },
  {
    tactic: 'Launch offer wraps',
    what: 'Launch offer wraps. Prep Phase 2 transition. First retention conversations with month-1 customers.',
    when: 'June 22–30',
    start: 24,
    width: 9,
  },
  {
    tactic: 'Sustaining offer',
    what: 'Offer publicly shifts to "First campaign on us with a 2-month commit" (runs all of July)',
    when: 'July 1–31',
    start: 33,
    width: 34,
  },
  {
    tactic: 'Referral program',
    what: 'Referral program goes live (detailed in Section 11)',
    when: 'July 1–31',
    start: 33,
    width: 34,
  },
  {
    tactic: 'Customer coverage',
    what: 'Customer coverage drives social proof — every placement becomes a content moment',
    when: 'July 1–31',
    start: 33,
    width: 34,
  },
  {
    tactic: 'Paid creative optimisation',
    what: 'Paid creative optimised based on Phase 1 data — kill underperformers, double down on winners',
    when: 'July 1–31',
    start: 33,
    width: 34,
  },
  {
    tactic: 'Organic content carousels',
    what: 'First wave of organic content carousels deployed across Pitchr brand channels',
    when: 'July 1–31',
    start: 33,
    width: 34,
  },
  {
    tactic: 'Scale paid spend',
    what: 'Scale paid spend in proven channels',
    when: 'August 1–31',
    start: 67,
    width: 33,
  },
  {
    tactic: 'Creative refresh',
    what: 'Refresh creative against new audiences',
    when: 'August 1–31',
    start: 67,
    width: 33,
  },
  {
    tactic: 'Referral contribution',
    what: 'Referral program contributes meaningfully (target: 15% of new demos by month-end)',
    when: 'August 1–31',
    start: 67,
    width: 33,
  },
  {
    tactic: 'Q4 planning',
    what: '20-customer KPI hit; planning begins for Q4 push toward the 100-customer Year 1 target',
    when: 'August 1–31',
    start: 67,
    width: 33,
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

function Shell({ eyebrow, title, intro, children }) {
  return (
    <div className="relative min-h-full overflow-y-auto bg-[#050505]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(166,255,0,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent)]" />
      <div className="relative z-10 p-8 md:p-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{title}</Heading>
        <Intro>{intro}</Intro>
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

function Overview() {
  return (
    <Shell
      eyebrow="Pitchr Launch Strategy"
      title="Pitchr is the third option between hiring a PR agency and doing nothing."
      intro="Pitchr Launch Strategy | 3-month launch campaign | June 1 – August 31"
    >
      <div className="mt-8 rounded-[2rem] border border-[#A6FF00]/30 bg-[#A6FF00] p-8 text-black">
        <p className="text-3xl font-black leading-[0.98] tracking-[-0.06em] md:text-5xl">
          Pitchr is the third option between hiring a PR agency and doing nothing — and our job in the next 90 days is to make that third option visible, credible, and irresistible to enough growing Australian businesses to land 20 paying customers and 1,500 new contacts.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card title="Campaign window"><p>June 1 – August 31, 2026</p></Card>
        <Card title="Three phases"><p>Launch Month. Sustain. Scale.</p></Card>
        <Card title="Everything else"><p>Everything else is execution.</p></Card>
      </div>
    </Shell>
  );
}

function GoalsKPIs() {
  return (
    <Shell
      eyebrow="Launch Goals + KPIs"
      title="The marketing function has three jobs in the next 90 days."
      intro="Everything that gets prioritised in this plan ladders to one of these three numbers."
    >
      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {goals.map(([goal, target, why]) => (
          <Card key={goal} title={goal}>
            <p className="text-3xl font-black tracking-[-0.06em] text-[#A6FF00]">{target}</p>
            <p className="mt-3">{why}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#A6FF00]/20 bg-white/[0.035]">
        <div className="grid gap-3 border-b border-[#A6FF00]/10 p-5 text-[10px] font-black uppercase tracking-[0.16em] text-[#A6FF00] md:grid-cols-4">
          <div>Phase</div><div>Demo bookings</div><div>New customers</div><div>New contacts</div>
        </div>
        {kpiRows.map((row, index) => (
          <div key={row[0]} className={`grid gap-3 border-b border-[#A6FF00]/10 p-5 last:border-b-0 md:grid-cols-4 ${index === kpiRows.length - 1 ? 'bg-[#A6FF00] text-black' : 'text-white'}`}>
            {row.map((cell) => <div key={cell} className="text-sm font-black">{cell}</div>)}
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {benchmarks.map((item) => <Card key={item} title={item}><span /></Card>)}
      </div>
    </Shell>
  );
}

function Messaging() {
  return (
    <Shell
      eyebrow="Campaign Messaging"
      title="Every line of copy in every channel should ladder back to something in this section."
      intro="Pitchr is the modern PR platform built for businesses that need media coverage without the agency overhead."
    >
      <div className="mt-8 rounded-[1.5rem] border border-[#A6FF00]/30 bg-[#A6FF00] p-6 text-black">
        <div className="text-[10px] font-black uppercase tracking-[0.18em]">Value Proposition</div>
        <div className="mt-2 text-3xl font-black tracking-[-0.065em]">Get covered. Without the retainer, the WIP meetings, or the BS.</div>
      </div>
      <p className="mt-5 text-sm font-medium leading-7 text-white/60">It&apos;s not an agency. It&apos;s not DIY. It&apos;s the third option — and the third option is what most of the audience has been waiting for without knowing it exists.</p>
      <div className="mt-5 grid gap-3 md:grid-cols-5">
        {messagingPillars.map(([pillar, says, use]) => (
          <Card key={pillar} title={pillar}>
            <strong>What it says</strong><p>{says}</p>
            <strong className="mt-3 block">When to use</strong><p>{use}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {themes.map(([title, body, lines]) => (
          <Card key={title} title={title}>
            <p>{body}</p>
            <div className="mt-4 space-y-2">{lines.map((line) => <p key={line} className="rounded-2xl bg-black/35 p-3 text-sm font-black tracking-[-0.03em] text-white">{line}</p>)}</div>
          </Card>
        ))}
      </div>
    </Shell>
  );
}

function Channels() {
  return (
    <Shell
      eyebrow="Channel-Specific Messaging"
      title="The core message stays consistent."
      intro="The expression of it adapts to the channel."
    >
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {channelCards.map(([title, body, examples]) => (
          <Card key={title} title={title}>
            <p>{body}</p>
            <div className="mt-4 space-y-2">{examples.map((example) => <p key={example} className="rounded-2xl bg-black/35 p-3 text-sm font-black tracking-[-0.03em] text-white">{example}</p>)}</div>
          </Card>
        ))}
      </div>
    </Shell>
  );
}

function GanttRow({ tactic, what, when, start, width, index }) {
  return (
    <div className="grid min-w-[980px] grid-cols-[220px_1.3fr_1fr] gap-4 border-b border-[#A6FF00]/10 p-4 last:border-b-0">
      <div>
        <div className="text-sm font-black tracking-[-0.03em] text-white">{tactic}</div>
        <div className="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#A6FF00]">{when}</div>
      </div>
      <p className="text-xs font-medium leading-5 text-white/55">{what}</p>
      <div className="relative h-12 rounded-2xl bg-black/35">
        <div className="absolute inset-y-0 left-1/3 w-px bg-[#A6FF00]/10" />
        <div className="absolute inset-y-0 left-2/3 w-px bg-[#A6FF00]/10" />
        <div
          className={`absolute top-2 h-8 rounded-full border px-3 py-2 text-[10px] font-black ${index < 4 ? 'border-[#A6FF00] bg-[#A6FF00] text-black' : 'border-[#A6FF00]/30 bg-[#A6FF00]/10 text-[#A6FF00]'}`}
          style={{ left: `${start}%`, width: `max(${width}%, 44px)` }}
        >
          <span className="block truncate">{when}</span>
        </div>
      </div>
    </div>
  );
}

function Timelines() {
  return (
    <Shell
      eyebrow="Launch Timeline"
      title="Tactic | What | When"
      intro="Campaign window: June 1 – August 31, 2026. Three phases. Each one has a job."
    >
      <div className="mt-8 overflow-x-auto rounded-[1.5rem] border border-[#A6FF00]/20 bg-white/[0.035]">
        <div className="grid min-w-[980px] grid-cols-[220px_1.3fr_1fr] gap-4 border-b border-[#A6FF00]/15 bg-[#A6FF00] p-4 text-[10px] font-black uppercase tracking-[0.18em] text-black">
          <div>Tactic</div>
          <div>What</div>
          <div>When</div>
        </div>
        <div className="grid min-w-[980px] grid-cols-[220px_1.3fr_1fr] gap-4 border-b border-[#A6FF00]/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/35">
          <div />
          <div />
          <div className="grid grid-cols-3"><span>June</span><span>July</span><span>August</span></div>
        </div>
        {timelineRows.map((row, index) => <GanttRow key={`${row.tactic}-${row.when}`} {...row} index={index} />)}
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
          {tabs.map((tab, index) => (
            <button key={tab} type="button" onClick={() => goTo(index)} className={`whitespace-nowrap border-b-2 px-4 py-4 text-xs font-bold tracking-tight transition ${cur === index ? 'border-[#A6FF00] text-[#A6FF00]' : 'border-transparent text-white/35 hover:text-white/80'}`}>{tab}</button>
          ))}
        </nav>
        <section className="h-[820px] overflow-y-auto [scrollbar-gutter:stable]">
          <div key={cur} className="h-full animate-[fadeIn_0.24s_ease]"><Page /></div>
        </section>
        <footer className="flex items-center justify-between border-t border-[#A6FF00]/15 bg-[#050505] px-6 py-4 md:px-10">
          <button type="button" disabled={isFirst} onClick={() => goTo(cur - 1)} className="h-10 rounded-full border border-[#A6FF00]/25 bg-transparent px-5 text-xs font-bold text-white/55 transition hover:bg-[#A6FF00]/10 hover:text-white disabled:opacity-20">Back</button>
          <div className="flex items-center gap-2 text-xs font-bold text-white/35"><span className="h-1.5 w-1.5 rounded-full bg-[#A6FF00]" />{cur + 1} of {tabs.length}</div>
          <button type="button" onClick={() => goTo(cur + 1)} className="h-10 rounded-full bg-[#A6FF00] px-5 text-xs font-black text-black transition hover:bg-[#A6FF00]/85">{isLast ? 'Done' : 'Next'}</button>
        </footer>
      </div>
    </main>
  );
}
