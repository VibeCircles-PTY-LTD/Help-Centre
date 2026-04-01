export type LegalPageId = "privacy" | "terms" | "cookies" | "popia";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export const legalDocuments: Record<LegalPageId, LegalDocument> = {
  privacy: {
    title: "Privacy Policy",
    description:
      "How VibeCircles collects, uses, stores, and protects personal information when you use our platforms and services.",
    lastUpdated: "31 March 2026",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "VibeCircles (“we”, “us”, “our”) operates digital products and services that connect brands, creators, and communities. This policy applies to our websites, apps, and related services, including this Help Center.",
        ],
      },
      {
        heading: "Information we may collect",
        paragraphs: [
          "We may collect information you provide directly (for example name, email, account details, support messages, and billing information where applicable), technical data (such as device type, browser, approximate location from IP, and log data), and usage data (such as pages viewed, features used, and interaction with campaigns or marketplace flows).",
          "If you integrate third-party accounts or tools, we may receive limited information according to your settings and those providers’ policies.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use personal information to provide and improve our services, authenticate users, personalize content, operate the marketplace and business tools, communicate with you (including support and service notices), analyze product usage, maintain security, comply with law, and enforce our terms.",
        ],
      },
      {
        heading: "Sharing",
        paragraphs: [
          "We may share information with service providers who assist us (hosting, analytics, email delivery, payments), when required by law or to protect rights and safety, and in connection with a merger or asset transfer subject to appropriate safeguards.",
          "We do not sell your personal information as a commercial data broker. Where we use analytics or advertising partners, we aim to do so in line with this policy and applicable law, including POPIA where it applies.",
        ],
      },
      {
        heading: "Retention and security",
        paragraphs: [
          "We retain information for as long as needed for the purposes above, including legal, tax, and dispute resolution needs, then delete or anonymize it where reasonable.",
          "We apply technical and organizational measures appropriate to the risk; no method of transmission or storage is completely secure.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Depending on where you live, you may have rights to access, correct, delete, object to certain processing, or port data. South African users have rights under POPIA—see our POPIA page for a concise summary and contact details.",
        ],
      },
      {
        heading: "International transfers",
        paragraphs: [
          "We may process data in South Africa and other countries. Where we transfer personal information across borders, we use mechanisms we believe meet applicable legal requirements.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "Our services are not directed at children under 16. If you believe we have collected a child’s data, contact us and we will take appropriate steps.",
        ],
      },
      {
        heading: "Updates and contact",
        paragraphs: [
          "We may update this policy from time to time; the “Last updated” date reflects the latest version. Continued use after changes constitutes acceptance unless law requires otherwise.",
          "Questions or requests: privacy@vibecircles.co.za (or the contact channel shown on vibecircles.co.za).",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    description:
      "Terms that govern your access to and use of VibeCircles websites, apps, and related services.",
    lastUpdated: "31 March 2026",
    sections: [
      {
        heading: "Agreement",
        paragraphs: [
          "By accessing or using VibeCircles services, you agree to these Terms and our Privacy Policy and Cookie information (where linked). If you do not agree, do not use the services.",
        ],
      },
      {
        heading: "Eligibility and accounts",
        paragraphs: [
          "You must be able to form a binding contract under applicable law. You are responsible for account credentials and for all activity under your account. Notify us promptly of unauthorized use.",
        ],
      },
      {
        heading: "Use of the services",
        paragraphs: [
          "You agree to use the services only for lawful purposes and in line with any posted guidelines. You must not misuse the services (including hacking, scraping in breach of our rules, distributing malware, or infringing other parties’ rights).",
          "Features such as marketplace listings, campaigns, and creator collaborations may have additional rules or contracts—those terms apply in addition to these Terms where stated.",
        ],
      },
      {
        heading: "Content and intellectual property",
        paragraphs: [
          "VibeCircles and its licensors own the services, branding, and underlying technology. You retain rights to content you submit; you grant us the license reasonably needed to operate, display, and improve the services as described in product-specific terms or policies.",
        ],
      },
      {
        heading: "Third parties",
        paragraphs: [
          "The services may link to or integrate third-party sites and tools. We are not responsible for third-party content or practices; your use is at your own risk and subject to their terms.",
        ],
      },
      {
        heading: "Disclaimers",
        paragraphs: [
          "To the fullest extent permitted by law, the services are provided “as is” and “as available” without warranties of any kind, express or implied. We do not guarantee uninterrupted or error-free operation.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the extent permitted by applicable law (including the Consumer Protection Act, 68 of 2008, where it applies), VibeCircles and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill, arising from your use of the services.",
          "Our aggregate liability for claims relating to the services is limited to the greater of amounts you paid us for the service giving rise to the claim in the six months before the claim or ZAR 1,000, except where law prohibits such caps.",
        ],
      },
      {
        heading: "Indemnity",
        paragraphs: [
          "You agree to indemnify and hold harmless VibeCircles against claims arising from your content, your breach of these Terms, or your misuse of the services, to the extent permitted by law.",
        ],
      },
      {
        heading: "Termination",
        paragraphs: [
          "We may suspend or terminate access if you violate these Terms or for operational, legal, or security reasons. You may stop using the services at any time. Provisions that by nature should survive will survive termination.",
        ],
      },
      {
        heading: "Governing law and disputes",
        paragraphs: [
          "These Terms are governed by the laws of the Republic of South Africa, unless mandatory consumer rules in your country say otherwise. Courts in South Africa have non-exclusive jurisdiction unless law requires otherwise.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "For legal or contractual notices: use the contact information published on vibecircles.co.za or legal@vibecircles.co.za if that address is active for your contract.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description:
      "How VibeCircles uses cookies and similar technologies on our sites and what choices you have.",
    lastUpdated: "31 March 2026",
    sections: [
      {
        heading: "What are cookies?",
        paragraphs: [
          "Cookies are small text files stored on your device when you visit a site. Similar technologies include pixels, local storage, and session identifiers. They help sites function, remember preferences, measure performance, and—where allowed—support relevant experiences.",
        ],
      },
      {
        heading: "How we use cookies",
        paragraphs: [
          "We use cookies and similar technologies for: essential operation (e.g. session security, load balancing, remember cookie choices); functionality (e.g. language or UI preferences); analytics (understanding aggregate usage and errors); and, where applicable, marketing measurement aligned with our Privacy Policy and your choices.",
        ],
      },
      {
        heading: "Types of cookies",
        paragraphs: [
          "Strictly necessary: required for basic site operation and security. You cannot disable these through our banner if they are truly necessary for the service you requested.",
          "Functional: remember settings to improve your experience.",
          "Analytics: help us improve performance and content. These may be first-party or vendor-provided with privacy settings we rely on.",
          "Marketing (if used): support campaign measurement; we aim to use them only where consistent with law and your consent where required.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "Browser settings: most browsers let you block or delete cookies. Blocking all cookies may break parts of our sites.",
          "Cookie banner / preference center: where we provide one, you can adjust non-essential categories.",
          "Industry tools: you may use recognized opt-out tools for interest-based ads where available in your region.",
        ],
      },
      {
        heading: "Third parties",
        paragraphs: [
          "Some cookies are set by partners (e.g. analytics or embedded media). Their use is governed by their policies as well as ours. We seek to limit data collection to what we need for stated purposes.",
        ],
      },
      {
        heading: "Updates",
        paragraphs: [
          "We may update this Cookie Policy when our practices or partners change. Check the “Last updated” date periodically.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Questions about cookies or this policy: privacy@vibecircles.co.za.",
        ],
      },
    ],
  },
  popia: {
    title: "POPIA & your information",
    description:
      "A plain-language overview of how the Protection of Personal Information Act (South Africa) relates to VibeCircles processing of personal information.",
    lastUpdated: "31 March 2026",
    sections: [
      {
        heading: "Responsible party",
        paragraphs: [
          "For personal information processed in connection with VibeCircles services, VibeCircles acts as the responsible party (or determines purpose and means jointly with others where applicable). We describe our identity and contact routes on vibecircles.co.za and in our Privacy Policy.",
        ],
      },
      {
        heading: "Lawful processing",
        paragraphs: [
          "We process personal information on grounds permitted by POPIA, such as consent, contract performance, legal obligation, vital interests, legitimate interests balanced against your rights, and as otherwise allowed by law.",
        ],
      },
      {
        heading: "Information quality and openness",
        paragraphs: [
          "We aim to keep personal information complete, accurate, and not excessive for the purpose. We provide this Help Center notice, our Privacy Policy, and related documents to explain processing in a reasonable manner.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "We implement appropriate technical and organizational measures to secure personal information against loss, damage, or unauthorized access, consistent with industry practice and POPIA’s security obligations.",
        ],
      },
      {
        heading: "Your POPIA rights",
        paragraphs: [
          "You may request access to personal information we hold about you, ask for correction or deletion where conditions are met, object to processing in prescribed circumstances, and lodge a complaint with the Information Regulator (South Africa).",
          "To exercise rights, contact privacy@vibecircles.co.za with enough detail for us to verify and respond. We will respond within timelines POPIA requires unless an extension applies.",
        ],
      },
      {
        heading: "Cross-border flows",
        paragraphs: [
          "If we transfer personal information to recipients in other countries, we take steps we believe meet POPIA’s requirements for lawful transfer, including appropriate safeguards where needed.",
        ],
      },
      {
        heading: "Direct marketing",
        paragraphs: [
          "Where we send direct marketing by electronic means, we will do so in line with POPIA and related rules, including opt-out mechanisms and consent where required.",
        ],
      },
      {
        heading: "Regulator",
        paragraphs: [
          "The Information Regulator (South Africa) oversees POPIA compliance. Contact details are available at www.inforegulator.org.za. This page is a summary and does not replace the Act or legal advice.",
        ],
      },
    ],
  },
};
