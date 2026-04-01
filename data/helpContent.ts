export interface Article {
  id: string;
  title: string;
  content: string;
  tags?: string[];
}

export interface Section {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  color: string;
  articles: Article[];
}

// The old content bundle is kept to avoid a massive delete diff.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const legacyHelpSections: Section[] = [
  {
    id: "getting-started",
    slug: "getting-started",
    title: "Getting Started",
    tagline: "Everything you need to know about VibeCircles — in plain language.",
    icon: "✦",
    color: "#E8511A",
    articles: [
      {
        id: "what-is-vibecircles",
        title: "What is VibeCircles?",
        tags: ["overview", "intro"],
        content: `VibeCircles is a community-powered marketing and growth platform built for brands, creators, and businesses who want to connect with real people — not just audiences.

We sit at the intersection of community, culture, and commerce. Instead of pushing ads at people, we help you build genuine relationships with the communities that matter most to your brand.

Think of us as your growth partner with deep roots in the cultures and communities your brand wants to speak to. We understand the pulse of digital communities across Africa and beyond — and we translate that understanding into campaigns, activations, and content that actually resonates.

**In short:** VibeCircles helps brands show up in the right spaces, with the right message, at the right time — authentically.`,
      },
      {
        id: "who-we-work-with",
        title: "Who We Work With",
        tags: ["clients", "brands", "SMEs", "creators"],
        content: `VibeCircles works with a diverse range of partners across the brand and creator spectrum:

**Brands & Corporations**
Established companies looking to tap into community-driven growth, connect with younger audiences, or expand into new African markets. We help you move beyond traditional advertising into genuine cultural engagement.

**SMEs & Startups**
Growing businesses that need marketing muscle without the bloated agency price tag. We offer flexible packages that scale with you, with a focus on measurable outcomes.

**Creators & Influencers**
Independent creators who want to work with brands that align with their values and audience. We match creators with opportunities that feel natural — never forced.

**Communities & Collectives**
Online and offline communities looking for brand partners who will add real value, not just noise. We facilitate collaborations that benefit both sides of the table.

**Nonprofits & Social Impact Orgs**
Organizations doing important work who need to amplify their message. We offer special partnership structures for social impact initiatives.

If you're not sure whether VibeCircles is the right fit, reach out — we'll give you a straight answer.`,
      },
      {
        id: "mission-and-values",
        title: "Our Mission & Values",
        tags: ["mission", "values", "culture"],
        content: `**Our Mission**
To build bridges between brands and communities through authentic, culture-first marketing that creates real value for everyone involved.

**What We Believe**

*Community over audience.* Real people in real communities are more valuable than passive followers. We invest in building genuine relationships, not inflating numbers.

*Culture is not a trend.* We approach cultural communities with respect and deep understanding — not as trends to exploit. If it feels exploitative, we won't do it.

*Africa is not a monolith.* We have deep, nuanced knowledge of African markets and communities. We know that Nairobi, Lagos, Johannesburg, and Accra are all different — and we treat them that way.

*Transparency always.* We're honest with our partners about what works, what doesn't, and what to expect. No smoke and mirrors.

*Creators deserve respect.* We ensure creators are paid fairly, credited properly, and given creative freedom within brand guidelines.

**Our Long-Term Vision**
To be the most trusted community-powered growth platform in Africa and the African diaspora — a place where brands and communities grow together.`,
      },
      {
        id: "contact-the-right-team",
        title: "How to Contact the Right Team",
        tags: ["contact", "support", "help"],
        content: `We've structured our team so you always reach someone who can actually help:

**General Enquiries**
Not sure where to start? Email info@vibecircles.co.za and our team will route you to the right person within 24 hours.

**Partnership & Business Development**
Looking to start a brand partnership, discuss a sponsored campaign, or explore a collaboration?
→ partnerships@vibecircles.com

**Creator & Talent Relations**
For creators, influencers, and community builders interested in working with us.
→ creators@vibecircles.com

**Billing & Finance**
Questions about invoices, payments, or contracts.
→ finance@vibecircles.com

**Press & Media**
For journalists, media enquiries, or brand asset requests.
→ press@vibecircles.com

**Technical Support**
Partner dashboard issues, reporting access, or API questions.
→ tech@vibecircles.com

**Response Times**
- Critical issues: within 4 hours (business days)
- Standard enquiries: within 1 business day
- Partnership pitches: within 3 business days

Our business hours are Monday–Friday, 8am–6pm SAST (UTC+2).`,
      },
    ],
  },
  {
    id: "partnerships",
    slug: "partnerships",
    title: "Partnerships & Collaborations",
    tagline: "How we work with brands, startups, and creative partners.",
    icon: "◈",
    color: "#F5A623",
    articles: [
      {
        id: "brand-partnerships",
        title: "Brand Partnerships",
        tags: ["brands", "partnerships", "long-term"],
        content: `A VibeCircles brand partnership is a structured, long-term collaboration designed to deeply embed your brand within a relevant community ecosystem.

**What a Brand Partnership Includes**
- Dedicated community strategy tailored to your brand goals
- Curated creator and community matching
- Ongoing campaign execution and content production
- Monthly performance reporting and strategy reviews
- Access to our proprietary community insights

**Partnership Tiers**
We offer three partnership tiers — Ember, Pulse, and Orbit — each designed for different stages of growth and budget levels. Full tier breakdowns are available in our Partnership Deck, which you can request at partnerships@vibecircles.com.

**Who This Is For**
Brand partnerships work best for companies with a 6–12 month horizon and a genuine desire to build community presence, not just run one-off campaigns.

**Getting Started**
Fill out our Brand Partnership Enquiry form or email partnerships@vibecircles.com with a brief on your brand, goals, and target communities. We'll schedule a discovery call within 3 business days.`,
      },
      {
        id: "sponsored-campaigns",
        title: "Sponsored Campaigns",
        tags: ["campaigns", "sponsored", "short-term"],
        content: `Need to make a splash for a specific launch, moment, or season? Sponsored campaigns are our high-impact, time-bound executions built around your specific objective.

**Campaign Types We Run**
- Product launch amplification
- Seasonal and cultural moment campaigns
- Community challenges and activations
- Creator takeovers and content series
- Social proof and testimonial campaigns

**Timeline**
Most campaigns require a 2–4 week lead time from brief to launch. Complex multi-creator campaigns may require more. We'll always be upfront about what's achievable.

**Pricing**
Campaign pricing is based on scope, creator tier, platform mix, and duration. We provide detailed quotes after an initial briefing call.

**What We Need From You**
- A clear campaign brief (we can help you write one)
- Brand guidelines and assets
- Key performance indicators (KPIs)
- Approved budget range
- Decision-maker contacts for approvals

Reach out to partnerships@vibecircles.com to get a quote.`,
      },
      {
        id: "community-activations",
        title: "Community Activations",
        tags: ["community", "activation", "engagement"],
        content: `Community activations are immersive, participatory experiences that bring your brand into a community in a meaningful way. This is where VibeCircles really earns its name.

**What Makes an Activation Different**
Unlike traditional campaigns, activations invite communities to participate — not just consume. They create stories, memories, and earned media that money can't simply buy.

**Examples of What We've Done**
- Pop-up experiences embedded in township cultural events
- Brand-sponsored community skill-share workshops
- Online community challenges that turned into cultural moments
- Co-created content with community leaders and local heroes

**Our Activation Process**
1. Community mapping and cultural fit assessment
2. Activation concept development
3. Community partner recruitment and briefing
4. Execution and real-time community management
5. Documentation, content capture, and post-activation reporting

**A Note on Authenticity**
We will decline activations that feel extractive or tokenistic. If a community partnership doesn't benefit the community as much as it benefits the brand, we'll tell you that — and help you redesign it so it does.`,
      },
      {
        id: "event-collaborations",
        title: "Event Collaborations",
        tags: ["events", "collaboration", "live"],
        content: `VibeCircles partners with brands and event organizers to create memorable experiences — both online and in physical spaces.

**What We Offer for Events**
- Brand integration strategy for existing events
- Co-production of brand-owned event concepts
- Creator and talent bookings for event appearances
- Live content capture and real-time amplification
- Post-event content and recap production

**Types of Events We've Supported**
- Music and cultural festivals
- Business and startup conferences
- Community workshops and meetups
- Product launch parties
- Virtual summits and community calls

**For Event Organizers**
If you run events and are looking for brand sponsors or community marketing support, we can help on both sides of that equation. We represent brands seeking event opportunities and can help facilitate meaningful sponsorships.

Contact us at partnerships@vibecircles.com with your event brief.`,
      },
      {
        id: "how-to-pitch",
        title: "How to Pitch to VibeCircles",
        tags: ["pitch", "apply", "proposal"],
        content: `We keep our pitch process simple. Here's exactly what to send us and what to expect.

**The Perfect Pitch Email**
Send to partnerships@vibecircles.com with the subject line: "Partnership Pitch — [Your Brand/Project Name]"

Include:
1. **Who you are** — your company, what you do, and why it matters
2. **What you're proposing** — be specific about the type of collaboration
3. **Why VibeCircles** — what made you reach out to us specifically?
4. **Your audience** — who are your current customers or community?
5. **Timeline and budget** — even a rough range helps us respond meaningfully
6. **One link** — your website, a campaign example, or a relevant portfolio piece

**What Happens Next**
- We read every pitch (no bots, no auto-rejections)
- If it's a fit, we'll schedule a 30-minute discovery call within 3 business days
- If it's not a fit right now, we'll tell you why — and sometimes refer you elsewhere

**What Makes a Strong Pitch**
- Clarity over buzzwords
- A specific ask, not a vague "collab"
- Evidence you've thought about community fit, not just brand exposure
- Honesty about budget (we can work with many ranges — we just need to know)

We're approachable. Don't overthink it.`,
      },
    ],
  },
  {
    id: "services",
    slug: "services",
    title: "Services & Solutions",
    tagline: "The full picture of what we do and how we do it.",
    icon: "⬡",
    color: "#1B4332",
    articles: [
      {
        id: "digital-campaigns",
        title: "Digital Campaigns",
        tags: ["digital", "social media", "campaigns"],
        content: `Our digital campaigns are built for platforms where your audience actually spends their time — not just the platforms where media buyers are comfortable buying.

**Platform Expertise**
We operate across Instagram, TikTok, X (Twitter), YouTube, Facebook, WhatsApp, Telegram, and emerging platforms. We know which platforms work best for which African market segments.

**Our Campaign Philosophy**
Every digital campaign starts with a cultural insight, not a creative brief. We ask: what does this community care about right now? How does your brand fit into that conversation without hijacking it?

**What We Produce**
- Short-form video (Reels, TikToks, YouTube Shorts)
- Long-form content and mini-documentaries
- Branded editorial and thought leadership
- Community-driven UGC campaigns
- Targeted paid media amplification (in partnership with your media buy)

**Measurement**
We measure what matters — reach, engagement quality, sentiment, community growth, and conversion where applicable. We don't pad reports with vanity metrics.`,
      },
      {
        id: "community-marketing",
        title: "Community Marketing",
        tags: ["community", "organic", "word-of-mouth"],
        content: `Community marketing is the core of everything we do. It's the difference between a brand that's talked about and a brand that's talked to.

**What Community Marketing Actually Means**
It means identifying communities that are culturally aligned with your brand, building genuine presence in those spaces, and creating value before asking for anything in return.

**Our Community Marketing Services**
- Community audit and mapping (where are your people, really?)
- Community seeding and soft launch strategies
- Ambassador and advocate program design
- Community moderation and management support
- WhatsApp and Telegram group marketing
- Forum and online community engagement

**Why This Works Better in Africa**
African digital communities are extraordinarily active, tight-knit, and influential. Word-of-mouth travels fast, and trust is earned — not bought. Brands that invest in genuine community marketing in African markets see compounding returns that paid media alone can't deliver.

**Getting Started**
We begin every community marketing engagement with a Community Fit Assessment — a 2-week research phase that tells us exactly which communities to target and how.`,
      },
      {
        id: "brand-storytelling",
        title: "Brand Storytelling",
        tags: ["content", "storytelling", "narrative"],
        content: `Every brand has a story. Most of them are told wrong. We fix that.

**What We Mean by Brand Storytelling**
Not just "content creation." We're talking about building a coherent brand narrative that works across formats, platforms, and audiences — one that feels human, not corporate.

**Our Storytelling Services**
- Brand narrative strategy and messaging frameworks
- Founder and team story development
- Customer and community story campaigns
- Documentary-style brand films
- Written content: articles, op-eds, brand essays
- Podcast production and guest placement
- Brand visual identity consultation (in partnership with trusted design studios)

**The Africa Angle**
If your brand has a genuine connection to African culture, business, or community, we help you tell that story in a way that resonates with African audiences without falling into tired tropes. Authentic African storytelling is a competitive advantage — we help you use it.

**Content Ownership**
All content we produce for your brand is fully owned by you upon final payment. No licensing surprises.`,
      },
      {
        id: "creator-programs",
        title: "Influencer & Creator Programs",
        tags: ["creators", "influencers", "UGC"],
        content: `Our creator network spans across Africa and the diaspora — from mega-influencers to micro-creators with intensely loyal niche audiences.

**Why Micro-Creators Often Win**
We're believers in the power of micro and nano creators (1K–50K followers). In African markets especially, these creators have higher trust, better engagement rates, and more authentic community relationships than many larger accounts.

**Our Creator Program Services**
- Creator identification and vetting (cultural fit, audience alignment, values check)
- Brief development and creative direction
- Contract management and fair compensation
- Content review and approval workflows
- Performance tracking and creator reporting
- Long-term creator ambassador programs

**Creator Compensation**
We do not work with creators on "exposure only" deals. Every creator in our network is compensated fairly for their work. This is non-negotiable — and it's why our creators deliver better results.

**For Creators**
If you're a creator interested in joining our network, visit our Creator Portal or email creators@vibecircles.com.`,
      },
      {
        id: "local-market-engagement",
        title: "Local Market Engagement",
        tags: ["Africa", "local", "market entry"],
        content: `Africa isn't a single market. It's 54 countries, hundreds of languages, and thousands of distinct cultural communities. We navigate that complexity for you.

**Markets We Know Best**
We have deep operational knowledge and cultural networks in:
- South Africa (Johannesburg, Cape Town, Durban)
- Nigeria (Lagos, Abuja)
- Kenya (Nairobi, Mombasa)
- Ghana (Accra)
- East Africa broadly (Uganda, Tanzania, Rwanda)
- UK & US African diaspora communities

**What Local Market Engagement Includes**
- In-country cultural consultancy
- Local creator and community partner identification
- Language and cultural adaptation of brand messaging
- Boots-on-the-ground activation support
- Local market reporting and insights

**For International Brands**
If you're an international brand wanting to enter African markets, we strongly recommend starting with our Market Entry Assessment before running any campaigns. Getting cultural nuance wrong is expensive — and we've seen it happen.

Contact partnerships@vibecircles.com to discuss your market entry needs.`,
      },
    ],
  },
  {
    id: "billing",
    slug: "billing",
    title: "Billing, Payments & Contracts",
    tagline: "Clear, fair, and no surprises. Here's how the money side works.",
    icon: "◎",
    color: "#2D4A8A",
    articles: [
      {
        id: "payment-methods",
        title: "Payment Methods Accepted",
        tags: ["payment", "bank transfer", "card"],
        content: `We accept a range of payment methods to make working with us as frictionless as possible.

**Standard Payment Methods**
- Bank transfer (EFT) — South African accounts (ZAR)
- Bank transfer — International SWIFT/IBAN (USD, GBP, EUR)
- Credit/Debit Card — Visa, Mastercard (via secure payment portal)

**African Payment Methods**
- M-Pesa (Kenya)
- Paystack (Nigeria, Ghana, South Africa)
- Flutterwave (pan-African)
- Ozow (South Africa)

**Cryptocurrency**
We currently accept USDC (USD Coin) and USDT (Tether) for international partners on a case-by-case basis. Please indicate your preference during contract discussions.

**Payment on Invoices**
All invoices include payment instructions specific to the agreed method. Payment links are valid for 30 days from invoice date.

For payment method queries, contact finance@vibecircles.com.`,
      },
      {
        id: "invoice-process",
        title: "Invoice Process",
        tags: ["invoice", "billing cycle", "payments"],
        content: `We keep our invoicing simple and predictable.

**Standard Invoice Flow**
1. Scope of work agreed and contract signed
2. Deposit invoice issued (typically 50% of project value)
3. Work begins upon deposit receipt
4. Milestone invoices issued as per project schedule (for larger projects)
5. Final invoice issued upon project completion or delivery
6. Final payment due within the agreed terms

**Retainer Arrangements**
For ongoing partnerships, invoices are issued on the 1st of each month for that month's retainer. Payment is due by the 7th.

**Invoice Contents**
Every invoice includes:
- Itemised breakdown of services
- Project or campaign reference number
- Payment due date
- Banking details or payment link
- VAT/tax information where applicable

**Late Payments**
Invoices unpaid after the due date may attract a 2% monthly late payment fee. We'll always send a friendly reminder before applying any penalty.

**Requesting an Invoice Copy**
Email finance@vibecircles.com with your project name and invoice reference number.`,
      },
      {
        id: "contract-terms",
        title: "Contract Terms Overview",
        tags: ["contract", "terms", "legal"],
        content: `Our contracts are written in plain language. Here's what you'll find in a standard VibeCircles agreement.

**Standard Contract Sections**

*Scope of Work*
A detailed description of exactly what VibeCircles will deliver, including formats, quantities, platforms, and timelines. If it's not in the scope, we won't do it without a change order.

*Payment Terms*
Deposit requirements, milestone payments, and final payment schedule. Typically 50% upfront, 50% on delivery for project work.

*Intellectual Property*
All original content created by VibeCircles for your brand becomes your property upon final payment. We retain the right to reference the work in our portfolio unless you request confidentiality.

*Confidentiality*
We treat all client information as confidential. We don't share campaign strategies, briefs, or results with other clients or publicly without permission.

*Revision Policy*
Standard contracts include two rounds of revisions on creative deliverables. Additional revisions are billed at an agreed hourly or day rate.

*Termination*
Either party may terminate with 30 days written notice. Work completed up to the termination date is billable.

All contracts are reviewed by our legal team and can be adapted for enterprise requirements. We're happy to work with your legal team on mutual NDAs or custom agreements.`,
      },
      {
        id: "refund-cancellation",
        title: "Refund & Cancellation Policy",
        tags: ["refund", "cancellation", "policy"],
        content: `We aim to be fair in all circumstances. Here's our policy:

**Project Cancellations**

*Before Work Begins*
If you cancel after signing but before any work has started, your deposit is refunded minus a 10% administrative fee.

*During a Project*
If you cancel a project midway, you are responsible for payment of all work completed to the cancellation date. Deposits covering completed work are non-refundable. Any remaining deposit balance will be refunded.

*After Delivery*
Once final deliverables have been approved and delivered, the contract is considered complete and no refunds apply.

**Retainer Cancellations**
Retainer agreements require 30 days written notice to cancel. The final invoice covers the full 30-day notice period.

**Disputes**
If you believe you've been charged incorrectly or that deliverables were not met to the agreed standard, contact finance@vibecircles.com within 14 days of invoice receipt. We will review all disputes in good faith.

**Exceptional Circumstances**
We're human. If something genuinely unexpected happens on your end, talk to us. We've worked with clients through major business disruptions and always try to find a fair solution.`,
      },
      {
        id: "currency-international",
        title: "Currency & International Payments",
        tags: ["currency", "international", "forex"],
        content: `VibeCircles operates internationally with a primary base in South Africa. Here's how we handle multi-currency arrangements.

**Default Billing Currency**
- South African clients: ZAR (South African Rand)
- East African clients: USD or local currency depending on agreement
- West African clients: USD or local currency depending on agreement
- International / diaspora clients: USD, GBP, or EUR

**Currency Flexibility**
We're happy to invoice in your preferred currency from the list above. Exchange rates are fixed at the time of contract signing for project work. For retainers, we review rates quarterly.

**International Transfer Fees**
For international bank transfers, the client is responsible for covering any SWIFT or international transfer fees so that VibeCircles receives the full invoiced amount.

**Paystack and Flutterwave**
For African clients preferring card or mobile payment, our Paystack and Flutterwave integrations handle currency conversion automatically.

**Tax & VAT**
VibeCircles is VAT-registered in South Africa. International clients outside South Africa are generally not subject to South African VAT — your invoice will reflect this. We recommend consulting your local tax advisor for your obligations.

For currency-specific queries, email finance@vibecircles.com.`,
      },
    ],
  },
  {
    id: "trust",
    slug: "trust",
    title: "Trust, Safety & Compliance",
    tagline: "We operate with integrity. Here's the proof.",
    icon: "⊕",
    color: "#6B3FA0",
    articles: [
      {
        id: "data-privacy",
        title: "Data Privacy Practices",
        tags: ["privacy", "GDPR", "POPIA", "data"],
        content: `We take data privacy seriously — not because we have to, but because it's the right thing to do.

**Applicable Regulations**
VibeCircles complies with:
- POPIA (Protection of Personal Information Act) — South Africa
- GDPR (General Data Protection Regulation) — for EU-based clients and audiences
- Nigeria Data Protection Regulation (NDPR)
- Any local data regulations in markets where we operate

**What Data We Collect**
When you work with us, we collect only what we need to deliver our services:
- Business contact information
- Campaign performance data
- Audience demographic aggregates (no personal audience data without consent)
- Contractual and financial records

**What We Never Do**
- Sell your data to third parties
- Use your campaign data to inform competitors
- Collect personal audience data without explicit consent frameworks
- Retain data beyond what's necessary for our service relationship

**Your Rights**
You have the right to access, correct, or delete any personal data we hold about you. To make a data request, email privacy@vibecircles.com.

**Data Security**
All sensitive data is stored encrypted, access is restricted to relevant team members, and we conduct annual security reviews.`,
      },
      {
        id: "brand-safety",
        title: "Brand Safety Standards",
        tags: ["brand safety", "content", "standards"],
        content: `Your brand's reputation is as important to us as it is to you.

**Our Brand Safety Commitment**
Before any content goes live under your brand name, it goes through our Brand Safety Review — a multi-step check that covers:

*Content Appropriateness*
We verify all creator and community content aligns with your brand guidelines, audience expectations, and platform standards.

*Creator Vetting*
We maintain a continuous review of creators in our network. Any creator with a history of harmful content, controversial affiliations, or brand-unsafe behaviour is removed from our active roster.

*Platform Compliance*
We ensure all content meets the terms of service of the platforms it's published on. We don't run paid campaigns that violate platform policies — the short-term gain is never worth the long-term risk.

*Crisis Protocol*
If a brand safety issue arises — a creator controversy, a content misstep, a misaligned post — we have a clear crisis response protocol. You'll hear from us within 2 hours of any incident, and we'll have a resolution plan ready.

**Brand Safety Reporting**
All campaign reports include a brand safety section noting any flagged content, resolutions taken, and preventative actions for future campaigns.`,
      },
      {
        id: "content-guidelines",
        title: "Content Guidelines",
        tags: ["content", "guidelines", "policy"],
        content: `All content produced through VibeCircles partnerships must meet our Community Content Standards.

**We Do Not Produce or Promote Content That:**
- Is discriminatory based on race, gender, sexuality, religion, disability, or nationality
- Promotes or glorifies violence, self-harm, or illegal activity
- Contains misinformation or deliberately misleading claims
- Exploits or sexualises individuals — particularly minors
- Appropriates cultural practices in a disrespectful or tokenistic way
- Undermines democratic processes or public health guidance

**Content We Champion**
- Authentic cultural expression
- Diverse and representative storytelling
- Community-empowering narratives
- Honest and transparent branded content (always disclosed as #ad or #sponsored where required by law)

**Creator Content Disclosure**
All paid partnerships involving creators are clearly disclosed in line with ASA (Advertising Standards Authority) requirements and FTC guidelines for US-based audiences.

**Reporting Problematic Content**
If you see VibeCircles-associated content that violates these guidelines, email trust@vibecircles.com. We investigate all reports within 48 hours.`,
      },
      {
        id: "ethical-marketing",
        title: "Ethical Marketing Policy",
        tags: ["ethics", "marketing", "policy"],
        content: `Marketing can be a force for good. It can also be exploitative. We choose the former — every time.

**Our Ethical Commitments**

*Honest Representation*
We don't inflate metrics, fabricate results, or make campaign performance claims we can't substantiate. Every number in our reports is real.

*Fair Creator Compensation*
Creators are paid market rates or above. We do not accept briefs that offer only "exposure." Creators do professional work and deserve professional pay.

*Community Consent*
When working with communities, we get proper consent. We don't "drop in" on communities without relationship-building first. We don't harvest community content without credit and compensation.

*No Predatory Targeting*
We do not run campaigns that exploit vulnerable groups — including campaigns targeting people in financial distress, health crises, or using psychological manipulation techniques.

*Competitor Honesty*
We don't use false or misleading comparisons to competitors in our clients' campaigns. Compete on merit.

**Refusing Work**
We have declined and will continue to decline briefs that conflict with these principles — regardless of the fee. Our team is empowered to escalate any ethical concerns without fear of internal pressure.`,
      },
      {
        id: "community-protection",
        title: "Community Protection Principles",
        tags: ["community", "protection", "safety"],
        content: `Communities are not a resource to be extracted. They are the foundation of everything we do, and we protect them accordingly.

**What Community Protection Means in Practice**

*Value Exchange*
Any brand that enters a community through VibeCircles must provide genuine value — not just exposure or "the honour of association." This is built into every activation brief.

*Cultural Sensitivity Reviews*
All campaign concepts are reviewed for cultural sensitivity by people who are actually part of the relevant communities. Not by outsiders making assumptions.

*Community Feedback Loops*
We build feedback mechanisms into activations so communities can tell us — in real time — if something isn't working or doesn't feel right.

*No Data Extraction Without Consent*
Brands do not get access to community member personal data through our work. Full stop.

*Community Benefit Clauses*
For larger activations, we increasingly include community benefit clauses — commitments that a portion of the campaign value is reinvested into the community (skills development, local hiring, charity tie-ins, etc.).

**Whistleblowing**
If a community member or creator feels they've been treated unfairly in a VibeCircles-facilitated partnership, they can reach us directly at trust@vibecircles.com. We investigate confidentially and seriously.`,
      },
    ],
  },
  {
    id: "media",
    slug: "media",
    title: "Media & Press Kit",
    tagline: "Everything you need to cover VibeCircles accurately and beautifully.",
    icon: "◐",
    color: "#C94A6E",
    articles: [
      {
        id: "company-bio",
        title: "Company Bio",
        tags: ["bio", "overview", "press"],
        content: `**Short Bio (50 words)**
VibeCircles is a community-powered marketing platform connecting brands with culturally-aligned communities across Africa and the African diaspora. We specialise in authentic partnerships, creator programs, and local market engagement that drive real growth — not just impressions.

**Medium Bio (150 words)**
VibeCircles is a community-first marketing and growth platform with deep roots in African digital culture. Founded on the belief that the best marketing happens when brands genuinely belong in a community — not just advertise to it — VibeCircles connects brands, SMEs, and creators with the communities they want to grow with.

Operating across South Africa, Nigeria, Kenya, Ghana, and beyond, VibeCircles offers brand partnerships, sponsored campaigns, community activations, creator programs, and local market engagement services. Our team combines marketing expertise with genuine cultural fluency, helping brands build trust in markets where trust is the ultimate currency.

VibeCircles is headquartered in Johannesburg, South Africa, with team members and community partners across the continent.

**Founded:** 2022
**Headquarters:** Johannesburg, South Africa
**Website:** www.vibecircles.com
**Press Contact:** press@vibecircles.com`,
      },
      {
        id: "logos-brand-assets",
        title: "Logos & Brand Assets",
        tags: ["logo", "assets", "brand kit"],
        content: `All VibeCircles brand assets are available for approved media use.

**Logo Versions Available**
- Primary logo (full colour — light background)
- Primary logo (full colour — dark background)
- Monochrome logo (black)
- Monochrome logo (white)
- Icon/mark only (all versions above)

**File Formats**
- SVG (recommended for web and print)
- PNG (transparent background, high resolution)
- PDF (print-ready)

**Requesting Assets**
To download brand assets, email press@vibecircles.com with:
- Your name and publication/outlet
- Brief description of intended use

We respond within 1 business day with a secure download link.

**Usage Guidelines**
- Do not alter logo colours, proportions, or typography
- Maintain clear space around the logo equal to the height of the "V" in VibeCircles
- Do not use the logo in a way that implies an endorsement not agreed upon
- Our brand colour is #E8511A (VibeCircles Orange)

Full brand guidelines are available to approved partners and media on request.`,
      },
      {
        id: "founder-story",
        title: "Founder Story",
        tags: ["founder", "story", "origin"],
        content: `VibeCircles was born from a simple but persistent frustration: watching brands waste money trying to reach African communities without any real understanding of them.

The founders — marketers and community builders with years of experience across both the brand side and the creator side of the industry — kept seeing the same pattern: global brands parachuting in with campaigns built for Western audiences, local brands that didn't trust their own cultural instincts, and creators who were either underpaid or ignored entirely.

The insight was straightforward: the best brands in Africa don't just sell to communities — they belong to them. They're part of the conversation before they ever ask for the sale.

VibeCircles was built to make that kind of marketing accessible and scalable. Not just for multinational corporations with massive budgets, but for the SMEs, startups, and growing brands that are building Africa's future and need marketing that moves as fast as they do.

The name comes from the idea that culture spreads in circles — vibrations that move outward from authentic community moments. When a brand gets it right, the circle keeps expanding. When it gets it wrong, it's excluded from the circle entirely.

We exist to help brands get it right.

**For interview requests or further founder background**, contact press@vibecircles.com.`,
      },
      {
        id: "press-contact",
        title: "Press Contact Info",
        tags: ["press", "contact", "media"],
        content: `For all media enquiries, please contact our press team directly.

**Primary Press Contact**
Email: press@vibecircles.com
Response time: Within 1 business day (faster for time-sensitive pieces)

**What We Can Help With**
- Interview requests (founders and senior team)
- Expert commentary on African marketing, creator economy, community marketing
- Campaign case studies and brand partner references
- Data, statistics, and market insights
- Fact-checking and background context
- Event coverage and accreditation

**What We Ask**
- Please share your publication and the nature of the piece when reaching out
- For embargo requests, specify the embargo date clearly in your email subject line
- For photography requests, please indicate usage rights required

**Spokespeople**
Our team is available for comment on:
- African digital marketing trends
- Creator economy in Africa
- Community-driven brand building
- Brand partnerships and influencer marketing
- Market entry into African markets

We welcome thoughtful coverage and are happy to facilitate deep-dive reporting.`,
      },
      {
        id: "recent-announcements",
        title: "Recent Announcements",
        tags: ["news", "announcements", "updates"],
        content: `Stay up to date with the latest from VibeCircles.

**How to Access Our Latest News**
- Follow us on LinkedIn: linkedin.com/company/vibecircles
- Follow us on Instagram: @vibecircles
- Follow us on X: @vibecircles

**Press Release Archive**
Historical press releases and announcements are available on request. Email press@vibecircles.com with the time period you're researching.

**For Breaking News**
If you're on deadline and need a comment or confirmation on a specific story, email press@vibecircles.com with "URGENT" in the subject line. We'll respond within 2 hours during business hours.

**Subscribe to Our Press List**
Journalists and media professionals can join our press list to receive announcements, partnership news, and market insights directly. Email press@vibecircles.com with "Press List Subscribe" in the subject line.

We believe in transparency and proactive communication with media. If there's something you think we should be talking about publicly, we're open to that conversation.`,
      },
    ],
  },
  {
    id: "technical-support",
    slug: "technical-support",
    title: "Technical Support",
    tagline: "For partners: campaign tools, dashboards, and integrations.",
    icon: "⟁",
    color: "#0A7070",
    articles: [
      {
        id: "campaign-reporting-access",
        title: "Campaign Reporting Access",
        tags: ["reporting", "access", "dashboard"],
        content: `Every VibeCircles partner gets access to real-time campaign reporting through our Partner Portal.

**Accessing Your Reports**
1. Navigate to partner.vibecircles.com
2. Log in with the credentials emailed to you at campaign kickoff
3. Select your active campaign from the dashboard
4. Use the date range selector to filter results

**What's Included in Every Campaign Report**
- Reach and impressions (platform-by-platform breakdown)
- Engagement metrics (likes, comments, shares, saves)
- Engagement rate benchmarks (vs. industry average)
- Creator performance individual scorecards
- Audience demographics (aggregated, POPIA-compliant)
- Content gallery with download access
- Campaign sentiment summary

**Report Cadence**
- Live campaigns: real-time data refreshed every 4 hours
- Post-campaign: final report delivered within 7 business days of campaign end
- Retainer clients: monthly summary reports delivered by the 5th of the following month

**Report Formats**
Download your reports as PDF, Excel, or CSV. Custom export formats are available for enterprise clients.

For login issues or report access problems, email tech@vibecircles.com.`,
      },
      {
        id: "analytics-dashboards",
        title: "Analytics Dashboards",
        tags: ["analytics", "dashboard", "data"],
        content: `Our analytics dashboards give you a clear view of your campaign performance without needing a data analyst to interpret them.

**Dashboard Overview**
The Partner Dashboard is split into four main views:

*Campaign Overview*
High-level KPI tracking against your agreed targets. Green means you're on track, amber means attention needed, red means we're already on it.

*Content Performance*
Individual post and piece-level analytics. See exactly which content is landing and which isn't, so we can optimise in real time.

*Creator Performance*
If your campaign involves multiple creators, this view shows individual performance metrics, allowing you to identify top performers for future amplification.

*Audience Insights*
Aggregated audience demographic data — age, gender, location, time-of-day activity — helping you understand who's actually engaging with your content.

**Custom Dashboard Views**
Enterprise clients can request custom dashboard configurations tailored to their specific reporting requirements.

**Data Export**
All dashboard data can be exported. Raw data exports are available in CSV format. Formatted reports export as PDF.

Contact tech@vibecircles.com to request a dashboard walkthrough or custom configuration.`,
      },
      {
        id: "integration-support",
        title: "Integration Support",
        tags: ["integration", "CRM", "tools"],
        content: `If you need VibeCircles campaign data to flow into your own systems, we support several integration options.

**Currently Supported Integrations**

*CRM Integrations*
We can export campaign data in formats compatible with Salesforce, HubSpot, and Zoho CRM. Custom field mapping is available on enterprise plans.

*Google Analytics & GA4*
We can set up UTM parameters and goal tracking so your VibeCircles-driven traffic appears correctly attributed in your Google Analytics.

*Meta Business Suite*
For campaigns running on Instagram and Facebook, we coordinate with your Meta Business Suite account for consolidated reporting.

*Slack Notifications*
Enterprise clients can set up Slack notifications for campaign milestones, performance alerts, and creator content approvals.

**Requesting an Integration**
Email tech@vibecircles.com with:
- The tool you want to integrate with
- The data you need transferred
- Your technical contact name and email

We'll scope the integration and provide a timeline within 3 business days.

**Custom Integrations**
For complex or bespoke integration requirements, we work with our technical partners to build custom solutions. These are scoped and costed separately.`,
      },
      {
        id: "api-access",
        title: "API Access (Future-Proofing)",
        tags: ["API", "developers", "technical"],
        content: `The VibeCircles Partner API is currently in private beta, with full public release planned for Q1 next year.

**What the API Will Enable**
- Programmatic access to your campaign performance data
- Real-time webhook notifications for campaign events
- Creator roster management via API
- Automated brief submission for eligible campaign types
- Custom reporting and data pipeline integrations

**Current Beta Programme**
We're onboarding a small number of enterprise partners into our API beta programme right now. Beta participants get:
- Early access to new API endpoints
- Direct line to our technical team for support
- Influence over API feature prioritisation
- Preferred pricing on API-tier partnerships

**Who Should Apply for Beta**
- Partners with dedicated technical or data teams
- Companies with existing API integrations in their marketing stack
- Partners running high-frequency or high-volume campaigns

**How to Apply**
Email tech@vibecircles.com with the subject "API Beta Application" and include:
- Your technical contact's details
- A brief description of your intended use case
- Your current data infrastructure (we're not gatekeeping, just scoping)

**API Documentation**
Draft API documentation is available to approved beta participants. Public docs will be released alongside the full API launch.`,
      },
    ],
  },
  {
    id: "advertising",
    slug: "advertising",
    title: "Advertising",
    tagline: "How brand and sponsored placements work across VibeCircles.",
    icon: "◇",
    color: "#C45C26",
    articles: [
      {
        id: "advertising-overview",
        title: "Advertising on VibeCircles",
        tags: ["ads", "sponsored", "overview"],
        content: `VibeCircles offers advertising and sponsored placements that sit alongside — not on top of — community content. Our approach keeps creative and cultural context intact while giving brands measurable visibility.

**What counts as advertising**
Sponsored posts, paid amplification, branded content labels, and partner placements that are clearly disclosed to audiences. We follow platform rules and local advertising standards.

**How it differs from organic community work**
Organic community campaigns are built with creators and communities over time. Advertising is paid media with defined flight dates, budgets, and delivery guarantees. Both can work together in a single growth plan.

**Getting started**
For advertising briefs, budgets, and available formats, email partnerships@vibecircles.com with your objectives, target regions, and timeline.`,
      },
      {
        id: "ad-formats-and-placement",
        title: "Ad Formats & Placement",
        tags: ["formats", "placement", "inventory"],
        content: `Available formats depend on the channels in your plan (social, creator content, events, and partner surfaces).

**Common formats**
- In-feed and story-style placements on supported social platforms
- Creator-led branded segments within agreed campaign packages
- Newsletter and partner-site modules (where applicable)
- Event and activation sponsorships with on-site or digital visibility

**Placement principles**
We prioritise relevance: your brand appears next to content and communities that fit your brief. We do not force placements that break community trust or platform policies.

**Creative requirements**
You will need approved assets, clear CTAs, and disclosure copy where required. Our team reviews all creative for compliance before go-live.

Ask partnerships@vibecircles.com for a current rate card and format catalogue.`,
      },
      {
        id: "advertising-brand-safety",
        title: "Brand Safety & Disclosure",
        tags: ["brand safety", "disclosure", "compliance"],
        content: `We take brand safety and honest labelling seriously.

**Disclosure**
Sponsored and paid content is labelled according to platform rules and applicable law (e.g. clear #ad or platform-native paid-partnership tags where required).

**Exclusions**
We maintain blocklists for categories and content types that do not align with partner requirements or our values. Share your exclusion list during briefing so we can enforce it in trafficking.

**Reporting**
Campaign reports show delivery, environments, and key engagement metrics. For sensitive categories, we can provide additional placement reporting on request.

Questions? partnerships@vibecircles.com`,
      },
    ],
  },
  {
    id: "marketplace",
    slug: "marketplace",
    title: "Marketplace",
    tagline: "Buying, selling, and partner offers inside the VibeCircles ecosystem.",
    icon: "◫",
    color: "#2563EB",
    articles: [
      {
        id: "marketplace-overview",
        title: "Marketplace Overview",
        tags: ["marketplace", "overview", "ecosystem"],
        content: `The VibeCircles marketplace connects brands, creators, and service partners with packaged offers, add-ons, and campaign extras — in one place.

**What you’ll find**
- Campaign and creator packages with transparent scopes
- Add-on services (production, research, extended reporting)
- Partner perks and bundles negotiated for the VibeCircles community

**Who it’s for**
Brands looking to compare options quickly, and creators or vendors approved to list eligible services.

**How to access**
Availability varies by region and partnership tier. Log in to the Partner Portal when marketplace features are enabled for your account, or email partnerships@vibecircles.com for access and eligibility.`,
      },
      {
        id: "marketplace-orders-and-billing",
        title: "Orders & Billing",
        tags: ["orders", "billing", "invoices"],
        content: `Marketplace orders are tied to your VibeCircles account and contract.

**Checkout & confirmation**
When you purchase a marketplace item, you receive an order confirmation and timeline for fulfilment. Larger scopes may require a short scoping call before work begins.

**Invoicing**
Billing follows your master agreement: some items are invoiced immediately, others are consolidated monthly. Invoices list VAT/tax lines where applicable.

**Changes & cancellations**
Scope changes before kickoff are handled through your account manager or partnerships@vibecircles.com. Cancellation terms depend on the specific offer — check the listing terms or your order summary.

For invoice questions: finance@vibecircles.com`,
      },
      {
        id: "marketplace-for-creators",
        title: "For Creators & Sellers",
        tags: ["creators", "sellers", "listings"],
        content: `Approved creators and partners may list eligible services when the marketplace is open in their region.

**Applying to list**
- Complete onboarding and verification steps requested by our team
- Agree to marketplace terms, pricing rules, and delivery standards
- Keep your profile and availability up to date

**Quality & compliance**
Listings must be accurate, fairly priced, and deliverable on the stated timeline. Misleading offers or repeated delivery issues can result in suspension from the marketplace.

**Support**
creators@vibecircles.com — for creator programmes and listing questions.`,
      },
    ],
  },
  {
    id: "vibecircles-social-media",
    slug: "vibecircles-social-media",
    title: "VibeCircles Social Media",
    tagline: "Official channels, community norms, and how we show up online.",
    icon: "⍟",
    color: "#7C3AED",
    articles: [
      {
        id: "official-social-accounts",
        title: "Official Accounts",
        tags: ["social", "official", "channels"],
        content: `Stay connected with VibeCircles only through our verified official profiles.

**Where to find us**
- LinkedIn: linkedin.com/company/vibecircles
- Instagram: @vibecircles
- X (Twitter): @vibecircles

**Impersonation**
We will never ask for passwords, OTPs, or payment details via unsolicited DMs. If an account looks suspicious, report it on the platform and alert us at info@vibecircles.co.za.

**Press & verification**
Journalists should use press@vibecircles.com. We can confirm official accounts for your stories.`,
      },
      {
        id: "social-community-guidelines",
        title: "Community Guidelines (Social)",
        tags: ["community", "guidelines", "moderation"],
        content: `We want our social spaces to stay respectful, useful, and culturally aware.

**We welcome**
Constructive questions, partnership enquiries directed to the right inbox, and celebration of community and creator wins.

**We don’t tolerate**
Harassment, hate speech, spam, scams, or coordinated attacks. We may hide, delete, or report content that violates platform rules or our values.

**Engaging with us**
Tag us in relevant conversations; we read as much as we can but cannot respond to every mention. For support, email is still the most reliable channel.

**Moderation**
Moderation decisions are final for our owned channels. Repeated violations may result in blocks or reports to the platform.`,
      },
      {
        id: "social-content-and-campaigns",
        title: "Campaigns & UGC",
        tags: ["UGC", "campaigns", "features"],
        content: `From time to time we spotlight partners, creators, and community stories.

**Features & reposts**
Being featured is always at our discretion. We credit creators and partners where we share their work, subject to permissions.

**User-generated content (UGC)**
If we ask to reshare your content, we’ll request permission where required. Don’t send confidential or unreleased brand material without clearance.

**Hashtags & challenges**
When we run public challenges, participation rules will be posted with each campaign. Follow those rules for eligibility and prize terms (where applicable).`,
      },
    ],
  },
  {
    id: "legal",
    slug: "legal",
    title: "Legal",
    tagline: "Terms, privacy, and how we handle personal information (including POPIA).",
    icon: "⚖",
    color: "#475569",
    articles: [
      {
        id: "terms-of-service",
        title: "Terms of Service",
        tags: ["terms", "legal", "agreement"],
        content: `These help-centre articles summarise how our services work. Your relationship with VibeCircles is governed by the **Terms of Service** in your contract or sign-up flow, which may include master services agreements, statements of work, and platform terms.

**What the terms cover**
- Use of VibeCircles services and deliverables
- Payment, confidentiality, and intellectual property where applicable
- Limitations of liability and governing law (as stated in your agreement)

**Updates**
We may update terms for legal or operational reasons. Material changes are communicated according to your agreement (e.g. email or dashboard notice).

**Questions**
For a copy of your active terms or clarification: info@vibecircles.co.za (we’ll route you to legal ops where needed).`,
      },
      {
        id: "privacy-policy",
        title: "Privacy Policy",
        tags: ["privacy", "data", "policy"],
        content: `VibeCircles processes personal information to deliver campaigns, operate accounts, and improve our services — in line with our **Privacy Policy**.

**What you should read**
- What data we collect (e.g. contact details, campaign analytics, account activity)
- How we use and share data (including subprocessors where relevant)
- Retention, security, and your choices

**Partner & campaign data**
Campaign reporting may include aggregated or pseudonymised audience metrics. We minimise collection to what is needed for the scope of work and contractual obligations.

**Contact**
Privacy-specific requests: info@vibecircles.co.za with “Privacy” in the subject line, or use the contact details provided in the full Privacy Policy on our website when published there.`,
      },
      {
        id: "popia-compliance",
        title: "POPIA & Personal Information",
        tags: ["POPIA", "South Africa", "compliance"],
        content: `Where the **Protection of Personal Information Act (POPIA)** applies, VibeCircles acts as responsible party and/or operator as defined in your agreement and the nature of processing.

**Our commitments**
- Process personal information lawfully and for defined purposes
- Implement reasonable technical and organisational measures
- Support data subject requests where we are the correct party to do so (subject to verification and legal limits)

**Campaign context**
For South African audiences, we work with partners to ensure collection notices, consent where required, and retention align with POPIA and platform rules.

**Data subject requests**
To exercise rights under POPIA (e.g. access, correction, objection in applicable cases), email info@vibecircles.co.za with “POPIA request” and enough detail to verify your identity.

We may need to coordinate with brand partners when they hold separate data controllership — we’ll explain next steps in those cases.`,
      },
    ],
  },
];

export const helpSections: Section[] = [
  {
    id: "about-vibecircles",
    slug: "about-vibecircles",
    title: "About VibeCircles",
    tagline:
      "A digital company that connects people, creators, and businesses through a unified social and marketplace ecosystem.",
    icon: "🏢",
    color: "#E8511A",
    articles: [
      {
        id: "what-is-vibecircles",
        title: "What is VibeCircles?",
        content: `VibeCircles is a digital company that connects people, creators, and businesses through a unified social and marketplace ecosystem.`,
      },
      {
        id: "why-vibecircles-was-founded",
        title: "Why VibeCircles was founded",
        content: `VibeCircles was created to bridge the gap between social media engagement and real-world opportunities by giving creators and businesses tools to collaborate, grow, and monetize.`,
      },
      {
        id: "vibecircles-business-model-explained",
        title: "The VibeCircles business model explained",
        content: `The platform combines social networking with a marketplace where brands and creators can collaborate, advertise, and transact.`,
      },
      {
        id: "services-vibecircles-offers",
        title: "Services VibeCircles offers",
        content: `- Social media platform (VibeCircle)\n- Brand & creator marketplace\n- Advertising solutions\n- Business tools and analytics\n- Location-based discovery`,
      },
      {
        id: "how-to-get-started-with-vibecircles",
        title: "How to get started with VibeCircles",
        content: `1. Create an account on VibeCircle\n2. Choose your account type\n3. Build your profile\n4. Start engaging or listing services`,
      },
      {
        id: "how-vibecircle-and-marketplace-work-together",
        title: "How VibeCircle and the marketplace work together",
        content: `The social platform builds your presence, while the marketplace turns that presence into opportunities and revenue.`,
      },
    ],
  },
  {
    id: "vibecircle",
    slug: "vibecircle",
    title: "VibeCircle",
    tagline: "A social media platform focused on real connections, content discovery, and creator growth.",
    icon: "📱",
    color: "#7C3AED",
    articles: [
      {
        id: "what-is-vibecircle",
        title: "What is VibeCircle?",
        content: `VibeCircle is a social media platform focused on real connections, content discovery, and creator growth.`,
      },
      {
        id: "what-kind-of-social-media-platform-is-vibecircle",
        title: "What kind of social media platform is VibeCircle?",
        content: `It is a hybrid platform combining content sharing, discovery, and monetization tools.`,
      },
      {
        id: "why-was-vibecircle-created",
        title: "Why was VibeCircle created?",
        content: `To give users more control, better opportunities, and meaningful engagement beyond traditional social media.`,
      },
      {
        id: "who-can-use-vibecircle",
        title: "Who can use VibeCircle?",
        content: `Anyone — individuals, creators, influencers, and businesses.`,
      },
      {
        id: "vibecircle-mission-and-values",
        title: "VibeCircle's mission and values",
        content: `- Authenticity\n- Opportunity\n- Community\n- Growth`,
      },
      {
        id: "types-of-accounts-on-vibecircle",
        title: "Types of accounts on VibeCircle",
        content: `**1. Basic Account**\n\nDesigned for everyday users and general community participation.\n\n**Qualification:** Open to all users without restrictions.\n\n**Purpose:** Enables standard platform features such as browsing, posting, and interacting with content.\n\n**2. Influencer Account**\n\nIntended for users with an established audience and strong engagement levels.\n\n**Qualification:** Requires a high follower count and consistent audience interaction.\n\n**Purpose:** Provides enhanced visibility and potential access to promotional or monetization features.\n\n**3. Creator Account**\n\nBuilt for individuals actively producing and sharing original content.\n\n**Qualification:** Requires consistent content creation and platform activity.\n\n**Purpose:** Offers tools and insights to support audience growth and content management.\n\n**4. Orbit Account (Exclusive)**\n\nReserved for a select group of high-value or premium users.\n\n**Qualification:** Invitation-only or based on strict internal criteria.\n\n**Purpose:** Grants access to exclusive features, priority support, and elevated platform status.`,
      },
      {
        id: "how-to-create-your-vibecircle-account",
        title: "How to create your VibeCircle account",
        content: `1. Sign up on the platform\n2. Set your profile\n3. Select account type\n4. Start posting and engaging`,
      },
      {
        id: "community-guidelines-on-vibecircle",
        title: "Community guidelines on VibeCircle",
        content: `- Respect others\n- No harmful or illegal content\n- Authentic interactions only`,
      },
    ],
  },
  {
    id: "brand-creator-marketplace",
    slug: "brand-creator-marketplace",
    title: "Brand & Creator Marketplace",
    tagline: "A platform where brands and creators connect for collaborations and promotions.",
    icon: "🤝",
    color: "#F5A623",
    articles: [
      {
        id: "what-is-the-vibecircles-marketplace",
        title: "What is the VibeCircles marketplace?",
        content: `A platform where brands and creators connect for collaborations and promotions.`,
      },
      {
        id: "how-brands-and-creators-find-each-other",
        title: "How brands and creators find each other",
        content: `Through profiles, search filters, and engagement metrics.`,
      },
      {
        id: "what-is-social-gravity",
        title: "What is Social Gravity?",
        content: `A trust metric based on follower count, engagement, and activity.`,
      },
      {
        id: "how-account-type-affects-your-marketplace-profile",
        title: "How account type affects your marketplace profile",
        content: `Higher-tier accounts gain more visibility and trust signals.`,
      },
      {
        id: "how-to-set-up-as-a-creator-on-the-marketplace",
        title: "How to set up as a creator on the marketplace",
        content: `- Complete profile\n- Link social presence\n- Set services and rates`,
      },
      {
        id: "how-to-list-your-brand-on-the-marketplace",
        title: "How to list your brand on the marketplace",
        content: `- Create business account\n- Add brand details\n- Publish campaigns`,
      },
      {
        id: "how-deals-and-collaborations-work",
        title: "How deals and collaborations work",
        content: `Brands create offers, creators apply or get invited, and agreements are made.`,
      },
      {
        id: "payments-and-payouts",
        title: "Payments and payouts",
        content: `Handled securely through the platform with transparent tracking.`,
      },
    ],
  },
  {
    id: "business-services",
    slug: "business-services",
    title: "Business Services",
    tagline: "Advertising, location claims, SME-friendly services, and business accounts.",
    icon: "💼",
    color: "#2563EB",
    articles: [
      {
        id: "advertising",
        title: "Advertising",
        content: `Businesses can promote content, products, and services to targeted audiences.`,
      },
      {
        id: "location-claims",
        title: "Location Claims",
        content: `Businesses can claim their physical or digital presence to improve visibility.`,
      },
      {
        id: "sme-friendly-services",
        title: "SME-Friendly Services",
        content: `Affordable tools designed for small and medium businesses.`,
      },
      {
        id: "business-accounts",
        title: "Business Accounts",
        content: `Provide analytics, advertising tools, and marketplace access.`,
      },
    ],
  },
  {
    id: "faqs",
    slug: "faqs",
    title: "FAQs",
    tagline: "Quick answers about VibeCircles and VibeCircle.",
    icon: "❓",
    color: "#475569",
    articles: [
      {
        id: "what-is-the-difference-between-vibecircles-and-vibecircle",
        title: "What is the difference between VibeCircles and VibeCircle?",
        content: `VibeCircles is the company; VibeCircle is the platform.`,
      },
      {
        id: "is-vibecircle-free-to-use",
        title: "Is VibeCircle free to use?",
        content: `Yes, with optional paid features.`,
      },
      {
        id: "how-is-vibecircle-different",
        title: "How is VibeCircle different?",
        content: `It combines social media with a marketplace.`,
      },
      {
        id: "can-i-use-both-a-personal-and-business-account",
        title: "Can I use both a personal and business account?",
        content: `Yes.`,
      },
      {
        id: "how-do-i-contact-support",
        title: "How do I contact support?",
        content: `Through the official website or in-app support.`,
      },
    ],
  },
];

/** Section IDs for the header nav only. All sections stay listed on the home page and in search. */
export const navSectionIds = [
  "about-vibecircles",
  "vibecircle",
  "brand-creator-marketplace",
  "business-services",
  "faqs",
] as const;

export const navSections: Section[] = navSectionIds.map((id) => {
  const s = helpSections.find((x) => x.id === id);
  if (!s) throw new Error(`navSectionIds references unknown section: ${id}`);
  return s;
});

export function getAllArticles() {
  return helpSections.flatMap((section) =>
    section.articles.map((article) => ({
      ...article,
      sectionId: section.id,
      sectionSlug: section.slug,
      sectionTitle: section.title,
      sectionColor: section.color,
      sectionIcon: section.icon,
    }))
  );
}

export function searchArticles(query: string) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return getAllArticles().filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q) ||
      (a.tags && a.tags.some((t) => t.includes(q)))
  );
}
