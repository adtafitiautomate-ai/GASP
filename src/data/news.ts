import type { PortableTextBlock } from '@portabletext/types';
import type { NewsArticle } from '../sanity/lib/queries';

/**
 * Local fallback content for the News & Updates section.
 *
 * These articles are the design reference for the page and stay in place until
 * matching `newsArticle` documents are published in Sanity, mirroring the
 * fallback pattern used by the Events gallery.
 */

let keySeed = 0;
const nextKey = () => `fallback-${(keySeed += 1)}`;

type Fragment = string | { text: string; marks?: string[]; href?: string };

type BlockStyle = 'normal' | 'h2' | 'h3' | 'blockquote';

function buildBlock(style: BlockStyle, fragments: Fragment[], listItem?: 'bullet' | 'number'): PortableTextBlock {
  const markDefs: Array<{ _type: string; _key: string; href: string }> = [];

  const children = fragments.map((fragment) => {
    if (typeof fragment === 'string') {
      return { _type: 'span', _key: nextKey(), text: fragment, marks: [] };
    }

    const marks = [...(fragment.marks ?? [])];

    if (fragment.href) {
      const linkKey = nextKey();
      markDefs.push({ _type: 'link', _key: linkKey, href: fragment.href });
      marks.push(linkKey);
    }

    return { _type: 'span', _key: nextKey(), text: fragment.text, marks };
  });

  return {
    _type: 'block',
    _key: nextKey(),
    style,
    markDefs,
    children,
    ...(listItem ? { listItem, level: 1 } : {}),
  } as unknown as PortableTextBlock;
}

const p = (...fragments: Fragment[]) => buildBlock('normal', fragments);
const h2 = (text: string) => buildBlock('h2', [text]);
const h3 = (text: string) => buildBlock('h3', [text]);
const quote = (text: string) => buildBlock('blockquote', [text]);
const bullet = (...fragments: Fragment[]) => buildBlock('normal', fragments, 'bullet');
const numbered = (...fragments: Fragment[]) => buildBlock('normal', fragments, 'number');

export const fallbackNewsArticles: NewsArticle[] = [
  {
    _id: 'local-news-epr-roadmap-2026',
    title: 'GASP publishes the 2026 EPR implementation roadmap for Uganda',
    slug: 'epr-implementation-roadmap-2026',
    category: 'Announcement',
    excerpt:
      'A phased plan that moves producer responsibility from voluntary commitment to measured, financed and independently reported action across five material streams.',
    coverImage: '/images/portfolio feature image.jpg',
    coverAlt: 'GASP team reviewing the circular economy strategy roadmap',
    publishedAt: '2026-07-18',
    readingMinutes: 6,
    featured: true,
    author: { name: 'Gyaviira Morgan Bonna', role: 'Chief Executive Officer' },
    body: [
      p(
        'Extended producer responsibility only works when every actor in the chain can see the same numbers. Today GASP is publishing the 2026 implementation roadmap, a phased plan that turns producer commitments into financed, measurable and independently reported action across five priority material streams.',
      ),
      p(
        'The roadmap was developed with our founding members over four quarterly working sessions and reviewed against the collection realities our partners face in Kampala, Gulu, Mbarara and Mbale. It is deliberately conservative in its first year: we would rather publish targets we can verify than headline figures we cannot.',
      ),
      h2('What the roadmap commits to'),
      p(
        'Three commitments sit at the centre of the plan. Each one has an owner, a budget line and a reporting cadence, and each is designed so that progress can be checked by someone outside GASP.',
      ),
      numbered(
        { text: 'Transparent fee modelling. ', marks: ['strong'] },
        'Every producer fee is tied to a published mass-flow assumption, so members can see exactly what they are paying for and why the rate changes year on year.',
      ),
      numbered(
        { text: 'Financed collection capacity. ', marks: ['strong'] },
        'A fixed share of scheme revenue is ring-fenced for collector and sorter payments rather than administration, protecting the people who do the recovery work.',
      ),
      numbered(
        { text: 'Independent reporting. ', marks: ['strong'] },
        'Annual mass-balance figures are reconciled by a third party before publication, and the underlying methodology is released alongside the results.',
      ),
      h2('Five material streams, sequenced'),
      p(
        'Rather than launching everything at once, the scheme opens with the streams where recovery infrastructure already exists and adds the harder categories as capacity is built.',
      ),
      bullet({ text: 'PET bottles', marks: ['strong'] }, ' — live from Q1 2026, building on existing baling and export routes.'),
      bullet({ text: 'HDPE and rigid plastics', marks: ['strong'] }, ' — live from Q2 2026 with dedicated sorter training.'),
      bullet({ text: 'Flexible films', marks: ['strong'] }, ' — pilot from Q3 2026, contingent on a viable offtake agreement.'),
      bullet({ text: 'Paper and board', marks: ['strong'] }, ' — onboarding through 2026, reported from Q4.'),
      bullet({ text: 'Glass and metals', marks: ['strong'] }, ' — scoping study in 2026, full targets deferred to 2027.'),
      quote(
        'A scheme that cannot show its working is not a scheme, it is a press release. The roadmap is our commitment to showing the working.',
      ),
      h2('How partners can engage'),
      p(
        'Producers, importers and recyclers who want to join the scheme can review the full portfolio document and start a conversation with the secretariat. We are particularly keen to hear from aggregators outside the central region, where collection density is lowest and the fee model needs the most calibration.',
      ),
      p(
        'The complete strategy document is available on our ',
        { text: 'portfolio page', href: '/portfolio' },
        ', and the secretariat can be reached through the ',
        { text: 'contact form', href: '/contact' },
        '.',
      ),
      h3('What comes next'),
      p(
        'Quarterly progress notes will be published in this section from Q1 2026 onward. Each note will carry the same structure: what we committed to, what actually happened, and what the variance means for the following quarter.',
      ),
    ],
  },
  {
    _id: 'local-news-gulu-marathon',
    title: 'Gulu Marathon recovers 4.2 tonnes of packaging in a single weekend',
    slug: 'gulu-marathon-recovery-results',
    category: 'Field Report',
    excerpt:
      'A deposit-style return station at the finish line, staffed by twelve local collectors, turned an event waste problem into a working recovery demonstration.',
    coverImage: '/images/Gulu marathon kick-off.jpg',
    coverAlt: 'Runners and volunteers at the Gulu Marathon kick-off',
    publishedAt: '2026-06-29',
    readingMinutes: 4,
    author: { name: 'GASP Field Team' },
    body: [
      p(
        'Mass-participation events generate a concentrated, highly visible waste stream in a very short window. That makes them an unusually good testbed: if a recovery model cannot work when all the material arrives in one place on one afternoon, it will not work spread across a city.',
      ),
      p(
        'At this year’s Gulu Marathon we ran a return station at the finish line, staffed by twelve collectors drawn from local associations and paid per verified kilogram rather than per shift.',
      ),
      h2('The numbers'),
      bullet('4.2 tonnes of packaging recovered across the event weekend.'),
      bullet('86% of hydration bottles distributed on the course were returned.'),
      bullet('Twelve collectors paid directly, same day, against weighed volumes.'),
      bullet('Contamination in the PET stream measured below 5% at the baler.'),
      p(
        'The return rate is the figure worth dwelling on. Event organisers routinely assume that on-course bottles are unrecoverable. With a staffed station placed where runners already stop, and a visible incentive, most of that material came back.',
      ),
      h2('What did not work'),
      p(
        'Two things underperformed. Mixed-material sachets were effectively unsortable at the station and ended up in residual waste, and our signage was too text-heavy for a crowd moving at pace. Both are fixable, and both are being carried into the design for the next event.',
      ),
      quote('Pay people properly and place the bin where the person already is. Most of recovery is that unglamorous.'),
      p(
        'We are documenting the station design so partner organisations can replicate it. Photographs from the weekend are in the ',
        { text: 'events gallery', href: '/gallery' },
        '.',
      ),
    ],
  },
  {
    _id: 'local-news-founding-members',
    title: 'Five founding members formalise the GASP producer responsibility scheme',
    slug: 'founding-members-formalise-scheme',
    category: 'Partnership',
    excerpt:
      'The scheme moves from working group to constituted body, with governance, a fee framework and a published conflict-of-interest policy.',
    coverImage: '/images/community_outreach.jpg',
    coverAlt: 'GASP partners during a community outreach session',
    publishedAt: '2026-05-22',
    readingMinutes: 3,
    author: { name: 'GASP Secretariat' },
    body: [
      p(
        'GASP has moved from an informal working group to a constituted body. Five founding members have signed the governance framework that sets out how the producer responsibility scheme is funded, decided and held to account.',
      ),
      h2('What formalisation changes'),
      p(
        'The practical difference is decision rights. Until now, direction was set by consensus among whoever attended. The new framework establishes a board with defined seats, a secretariat that executes rather than decides, and a published conflict-of-interest policy that applies to both.',
      ),
      bullet('A board with defined member seats and rotating chairship.'),
      bullet('A secretariat accountable to the board, not to individual members.'),
      bullet('A fee framework tied to published mass-flow assumptions.'),
      bullet('A conflict-of-interest policy covering board and secretariat alike.'),
      p(
        'Membership remains open. The framework was written on the assumption that the founding five are a starting point rather than a closed circle, and the fee model scales with the number of participating producers.',
      ),
      p(
        'Organisations interested in joining can review the partnership routes on our ',
        { text: 'partnerships page', href: '/partnerships' },
        '.',
      ),
    ],
  },
  {
    _id: 'local-news-mass-flow-baseline',
    title: 'First national mass-flow baseline shows where Uganda’s plastics actually go',
    slug: 'national-mass-flow-baseline',
    category: 'Research',
    excerpt:
      'Twelve months of collection data, reconciled against import figures, gives the sector its first defensible picture of material movement — and a large, honest gap.',
    coverImage: '/images/recycling economy.jpg',
    coverAlt: 'Sorted recyclable material at a recovery facility',
    publishedAt: '2026-04-11',
    readingMinutes: 5,
    author: { name: 'GASP Data & Systems' },
    body: [
      p(
        'You cannot set a recovery target without knowing the denominator. For twelve months we have been reconciling collector-reported volumes against import and production figures to build a defensible baseline of how packaging material moves through the Ugandan economy.',
      ),
      h2('The headline finding'),
      p(
        'Formal recovery accounts for a smaller share of placed-on-market volume than most sector estimates assume, and informal recovery accounts for a considerably larger one. Neither figure was a surprise to the collectors we work with. Both were a surprise to several producers.',
      ),
      h2('The gap we are not hiding'),
      p(
        'Roughly a fifth of the material in our model is unaccounted for. It has left the point of sale and has not appeared at any facility we can observe. We could have closed that gap with an assumption and published a tidier number. We have chosen to publish the gap instead.',
      ),
      quote(
        'An honest gap is more useful than a confident estimate. It tells you exactly where to spend the next year of measurement effort.',
      ),
      h3('Where the uncertainty sits'),
      bullet('Cross-border movement of baled material, which is poorly instrumented in both directions.'),
      bullet('Household-level reuse, which never enters a waste stream at all.'),
      bullet('Open burning and dumping, which by definition leaves no receipt.'),
      p(
        'The methodology and the full dataset structure are described on our ',
        { text: 'mass flows page', href: '/mass-flows' },
        '. We would rather be corrected on a published method than trusted on an unpublished one.',
      ),
    ],
  },
  {
    _id: 'local-news-collector-training',
    title: 'Sorter training programme reaches 240 workers across four districts',
    slug: 'sorter-training-programme-milestone',
    category: 'Capacity Building',
    excerpt:
      'Practical grading and safety training, delivered in the yards where people already work, has measurably reduced contamination and rejected loads.',
    coverImage: '/images/TRJ_8792.jpg',
    coverAlt: 'Workers sorting recovered material at a collection yard',
    publishedAt: '2026-03-06',
    readingMinutes: 3,
    author: { name: 'GASP Field Team' },
    body: [
      p(
        'Contamination is the quiet tax on recovery. A load rejected at the baler costs the collector their day, the aggregator their margin, and the scheme its credibility. Most contamination is not carelessness — it is the absence of anyone ever having explained what grade means.',
      ),
      p(
        'Over the last two quarters we have delivered practical grading and safety training to 240 workers across four districts, in the yards where they already work rather than in a hotel conference room.',
      ),
      h2('What the training covers'),
      bullet('Polymer identification by sight and feel, with real samples from local streams.'),
      bullet('Grade thresholds that match what offtakers actually pay for.'),
      bullet('Handling and personal protective equipment, including cut and inhalation risk.'),
      bullet('Weighing and record-keeping, so payment disputes have evidence behind them.'),
      h2('Early results'),
      p(
        'Yards that completed the programme are reporting fewer rejected loads and a measurable drop in PET contamination. The record-keeping module has had an unanticipated second effect: collectors now have documentation to contest underpayment, which several have already used.',
      ),
      p('The next cohort opens in the eastern region, with dates to be published in this section.'),
    ],
  },
  {
    _id: 'local-news-schools-programme',
    title: 'Circular economy curriculum pilot lands in twenty secondary schools',
    slug: 'schools-circular-curriculum-pilot',
    category: 'Education',
    excerpt:
      'A six-week module built with teachers rather than for them, pairing classroom material with a measured recovery project on each school campus.',
    coverImage: '/images/edu.jpg',
    coverAlt: 'Students taking part in a circular economy education session',
    publishedAt: '2026-02-14',
    readingMinutes: 4,
    author: { name: 'GASP Awareness Programme' },
    body: [
      p(
        'Awareness campaigns that stop at the poster stage change very little. For this pilot we worked with teachers from the outset to build a six-week module that fits the existing timetable and ends in something measurable on the school campus itself.',
      ),
      h2('Structure of the module'),
      numbered('Two weeks on material systems: where packaging comes from and where it goes.'),
      numbered('Two weeks on measurement: students audit their own school’s waste stream.'),
      numbered('Two weeks on intervention: each school designs and runs one recovery change.'),
      p(
        'The audit week is the part teachers have responded to most strongly. It converts an abstract topic into a spreadsheet about their own campus, and it produces a number students can move.',
      ),
      quote('The students did not need to be persuaded that waste is a problem. They needed something they could actually change.'),
      h2('Pilot scope'),
      bullet('Twenty secondary schools across three districts.'),
      bullet('Roughly 3,400 students reached in the first cohort.'),
      bullet('Teacher-led delivery, with GASP providing materials and the audit framework.'),
      p(
        'Evaluation runs at the end of the term. If the audit-and-intervention structure holds up, the module will be offered more widely from the next academic year.',
      ),
    ],
  },
  {
    _id: 'local-news-secretariat-office',
    title: 'GASP secretariat opens a permanent office on Kanjokya Street',
    slug: 'secretariat-office-kampala',
    category: 'Announcement',
    excerpt:
      'A fixed address for members, partners and collectors — and somewhere the working groups can meet without booking a room every quarter.',
    coverImage: '/images/mission feature image.jpg',
    coverAlt: 'The GASP team at work',
    publishedAt: '2026-01-20',
    readingMinutes: 2,
    author: { name: 'GASP Secretariat' },
    body: [
      p(
        'The GASP secretariat now operates from a permanent office at Kanjokya House, Plot 90 Kanjokya Street in Kampala. It is a small change with a practical effect: members, partners and collector associations have a fixed place to find us, and the technical working groups no longer have to book a venue every time they meet.',
      ),
      h2('What the office is for'),
      bullet('Working group sessions on fee modelling, mass flows and reporting.'),
      bullet('Onboarding meetings for producers joining the scheme.'),
      bullet('A drop-in point for collector associations raising payment or grading issues.'),
      p(
        'Visits are best arranged in advance so the relevant person is actually in the building. Contact details are on our ',
        { text: 'contact page', href: '/contact' },
        '.',
      ),
    ],
  },
];

export const fallbackNewsCategories = Array.from(
  new Set(fallbackNewsArticles.map((article) => article.category)),
);
