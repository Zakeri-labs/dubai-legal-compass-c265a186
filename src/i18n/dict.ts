export type Locale = "en" | "fa";

export const PHONE = "+971551019750";
export const PHONE_DISPLAY = "+971 55 101 9750";
export const WA_NUMBER = "971551019750";
export const INSTAGRAM = "https://www.instagram.com/abooahmad_official";
export const THREADS = "https://www.threads.net/@abooahmad_official";

export const SERVICES = [
  { slug: "family-divorce", icon: "Heart" },
  { slug: "criminal", icon: "Scale" },
  { slug: "travel-ban", icon: "PlaneOff" },
  { slug: "cheque-bounced", icon: "FileWarning" },
  { slug: "accident-injury", icon: "ShieldAlert" },
  { slug: "notary-contracts", icon: "FileSignature" },
  { slug: "commercial-corporate", icon: "Briefcase" },
  { slug: "real-estate", icon: "Building2" },
  { slug: "immigration", icon: "Globe" },
  { slug: "arbitration", icon: "Gavel" },
] as const;

export const CALCULATORS = ["mehrieh", "diyeh", "tax", "penalty"] as const;

type Dict = {
  dir: "ltr" | "rtl";
  langName: string;
  nav: {
    home: string; about: string; services: string; calculators: string;
    questions: string; consultation: string; contact: string; faq: string;
    bookConsult: string; whatsapp: string; menu: string;
  };
  hero: {
    eyebrow: string; title: string; titleAccent: string;
    subtitle: string; cta1: string; cta2: string;
    cred1: string; cred2: string; cred3: string; cred4: string;
  };
  common: {
    learnMore: string; readMore: string; sendOnWhatsapp: string;
    bookAboutThis: string; getStarted: string; required: string;
    submit: string; sending: string; disclaimer: string;
    estimateOnly: string; languages: string; office: string;
    callNow: string; emailUs: string; followUs: string;
  };
  home: {
    servicesHeading: string; servicesSub: string;
    whyHeading: string; whySub: string;
    why: { title: string; body: string }[];
    processHeading: string;
    process: { title: string; body: string }[];
    qHeading: string; qSub: string;
    moreQuestionsCta: string;
    ctaHeading: string; ctaBody: string;
  };
  about: {
    heading: string; lead: string;
    sections: { title: string; body: string }[];
  };
  services: { heading: string; lead: string; whoItHelps: string;
    keyOutcomes: string; process: string; documents: string;
    serviceFaq: string;
    items: Record<string, {
      title: string; short: string; long: string;
      who: string[]; outcomes: string[];
      steps: string[]; docs: string[];
      faqs: { q: string; a: string }[];
    }>;
  };
  calc: {
    heading: string; lead: string; result: string;
    items: Record<string, { title: string; sub: string; description: string;
      fields: { key: string; label: string; placeholder?: string; type?: "number"|"select"; options?: { v: string; l: string }[] }[];
      resultLabel: string;
    }>;
  };
  qa: {
    heading: string; lead: string; search: string; allCategories: string;
    categories: Record<string, string>;
    items: { cat: string; q: string; a: string }[];
  };
  consult: {
    heading: string; lead: string; success: string;
    fields: Record<string, { label: string; placeholder?: string; help?: string }>;
    consult_types: { v: string; l: string }[];
    languages: { v: string; l: string }[];
    urgency: { v: string; l: string }[];
    consent: string; submit: string;
    legalNote: string;
  };
  faq: {
    heading: string; lead: string;
    items: { q: string; a: string }[];
  };
  contact: {
    heading: string; lead: string; channels: string; hours: string; office: string;
  };
  privacy: { heading: string; body: string };
  disclaimer: { heading: string; body: string };
  footer: {
    tagline: string; quickLinks: string; resources: string;
    contact: string; rights: string;
  };
};

export const dict: Record<Locale, Dict> = {
  en: {
    dir: "ltr", langName: "English",
    nav: {
      home: "Home", about: "About", services: "Services", calculators: "Legal Calculators",
      questions: "Legal Questions", consultation: "Consultation", contact: "Contact", faq: "FAQ",
      bookConsult: "Book a Consultation", whatsapp: "WhatsApp", menu: "Menu",
    },
    hero: {
      eyebrow: "Dubai Lawyers · AbooAhmad",
      title: "Calm, decisive legal counsel for life in the UAE.",
      titleAccent: "Counsel you can trust.",
      subtitle:
        "20+ years guiding expats and residents through family, criminal, cheque, accident and corporate matters under Zayed AlShehhi Advocates & Legal Consultants.",
      cta1: "Book a Consultation", cta2: "Message on WhatsApp",
      cred1: "20+ Years Experience", cred2: "Zayed AlShehhi Advocates",
      cred3: "Dubai · UAE", cred4: "EN · AR · FA · UR",
    },
    common: {
      learnMore: "Learn more", readMore: "Read more",
      sendOnWhatsapp: "Send result on WhatsApp",
      bookAboutThis: "Book a consultation about this",
      getStarted: "Get started", required: "Required",
      submit: "Send via WhatsApp", sending: "Opening WhatsApp…",
      disclaimer: "This information is educational and does not constitute legal advice.",
      estimateOnly: "Results are estimates only and do not replace formal legal advice.",
      languages: "Languages", office: "Office",
      callNow: "Call now", emailUs: "Email", followUs: "Follow",
    },
    home: {
      servicesHeading: "Areas of Practice",
      servicesSub: "Focused, practical representation across the matters expats and residents face most.",
      whyHeading: "Why clients choose this office",
      whySub: "A real office, an established firm, and a lawyer who returns your message.",
      why: [
        { title: "A real, visible office", body: "Backed by Zayed AlShehhi Advocates & Legal Consultants — not just a name in DMs." },
        { title: "Reconciliation first", body: "In family matters we try to save what can be saved before any court action." },
        { title: "Multilingual representation", body: "Direct conversation in English, Arabic, Farsi and Urdu — no translator gap." },
        { title: "Transparent, honest counsel", body: "You receive the full legal picture, not the version you want to hear." },
      ],
      processHeading: "How a case begins",
      process: [
        { title: "Initial contact", body: "Reach out via WhatsApp or the booking form. Share the basics in your language." },
        { title: "Free assessment", body: "We review your situation, explain rights and options, and outline likely paths." },
        { title: "Engagement", body: "If you proceed, we agree on scope, fees and documents in writing." },
        { title: "Representation", body: "We handle filings, hearings and negotiations — you stay informed at every step." },
      ],
      qHeading: "Common questions, clearly answered",
      qSub: "Browse short answers to the questions clients ask most often.",
      moreQuestionsCta: "More Legal Questions",
      ctaHeading: "One wrong decision can change your future.",
      ctaBody: "Speak with a lawyer before you act. The first consultation is on us.",
    },
    about: {
      heading: "About Abu Ahmed",
      lead: "Abu Ahmad is an experienced Dubai-based lawyer who has been standing beside his clients in commercial, corporate, criminal, civil, immigration, real estate and arbitration cases in the UAE for over 20 years. He works within the established Dubai law firm Zayed Al Shehhi Advocates & Legal Consultants and focuses on helping residents and expats navigate the legal system without confusion or unnecessary stress.",
      sections: [
        { title: "The practice", body: "Abu Ahmed practices under Zayed AlShehhi Advocates & Legal Consultants, an established Dubai law firm. The work spans family, criminal, civil, commercial, corporate, real estate, immigration and arbitration matters across the UAE." },
        { title: "Philosophy", body: "Reconciliation before litigation in family matters. Honesty over comfort in every conversation. Clients are urged to share the full truth so the defense can be built on solid ground — not surprises." },
        { title: "For expats and residents", body: "Most clients are expats facing cheque cases, accident claims, divorce, travel bans or criminal accusations. The aim is to make UAE law understandable and to remove the fear that comes from facing a system in a language that is not your own." },
        { title: "How we work", body: "A real office in Dubai, an official firm behind the practice, and direct WhatsApp access. You speak with the lawyer — not a chain of intermediaries." },
      ],
    },
    services: {
      heading: "Services & areas of practice",
      lead: "Each matter is handled personally — with the firm's full resources behind it.",
      whoItHelps: "Who this helps",
      keyOutcomes: "Key outcomes",
      process: "Process",
      documents: "Documents you may need",
      serviceFaq: "Frequently asked",
      items: {
        "family-divorce": {
          title: "Family & Divorce",
          short: "Reconciliation-first family law — divorce, custody, alimony and protection.",
          long: "Family matters are handled with patience and discretion. Where a marriage can be saved, we try first. Where it cannot, we protect children, finances and reputation through the UAE family courts.",
          who: ["Spouses considering divorce", "Parents in custody disputes", "Clients seeking alimony or maintenance", "Mixed-nationality families"],
          outcomes: ["Free initial family consultation", "Mediated settlement where possible", "Clear court strategy when needed", "Protection of children's interests"],
          steps: ["Confidential intake", "Reconciliation attempt", "Mediation or filing", "Court representation", "Enforcement"],
          docs: ["Marriage certificate", "Emirates ID and passports", "Children's birth certificates", "Financial records"],
          faqs: [
            { q: "Is the first family consultation really free?", a: "Yes — initial family and divorce consultations are offered at no cost so you can decide your next step without pressure." },
            { q: "Can a divorce be avoided?", a: "Often the first conversation is about whether reconciliation is possible. Only if it is not, we move forward with the legal process." },
          ],
        },
        "criminal": {
          title: "Criminal Defense",
          short: "Defense in criminal accusations, investigations and trials across UAE courts.",
          long: "From police questioning to trial and appeal, criminal cases require speed and full honesty between client and lawyer. We build defenses on the truth — never on what you wish were true.",
          who: ["Anyone questioned by police", "Defendants in misdemeanor or felony cases", "Clients facing public-funds or assault accusations"],
          outcomes: ["Immediate defense strategy", "Representation at every stage", "Bail and travel-restriction motions", "Appeal where grounds exist"],
          steps: ["Urgent intake", "Case file review", "Defense plan", "Hearings & trial", "Appeal if needed"],
          docs: ["Police report (if available)", "Emirates ID and passport", "Any evidence in your possession", "Witness contacts"],
          faqs: [
            { q: "What should I do if I am summoned by the police?", a: "Do not give detailed statements before speaking with a lawyer. Contact this office immediately for guidance." },
          ],
        },
        "travel-ban": {
          title: "Travel Ban Cases",
          short: "Lifting and contesting travel bans imposed for civil, financial or criminal reasons.",
          long: "Travel bans can be issued in connection with debts, cheques, family matters and criminal cases. We identify the source of the ban and pursue the proper legal route to lift it.",
          who: ["Residents discovering a ban at the airport", "Clients with related financial or family cases", "Business owners with disputed debts"],
          outcomes: ["Identification of ban source", "Settlement or court motion to lift", "Coordination with creditors and authorities"],
          steps: ["Status check", "Source identification", "Settlement or motion", "Lifting & confirmation"],
          docs: ["Emirates ID & passport", "Any case or claim numbers", "Related contracts or cheques"],
          faqs: [
            { q: "How do I know if I have a travel ban?", a: "We can run an official check on your behalf and identify the issuing court or authority." },
          ],
        },
        "cheque-bounced": {
          title: "Cheque Bounced & Debt Recovery",
          short: "Recover bounced cheques and unpaid debts through the proper UAE legal channels.",
          long: "A bounced cheque is not lost money — it is a recoverable right when the correct legal path is followed. We handle both sides: recovery for creditors, and defense for those facing claims.",
          who: ["Holders of returned cheques", "Suppliers and contractors with unpaid invoices", "Defendants in cheque cases"],
          outcomes: ["Demand and negotiation", "Civil and criminal claim filing", "Settlement structuring", "Enforcement of judgments"],
          steps: ["Document review", "Formal demand", "Filing", "Judgment", "Enforcement"],
          docs: ["Original cheque(s)", "Bank return memo", "Underlying contracts or invoices"],
          faqs: [
            { q: "Can a bounced cheque still be recovered?", a: "In most cases, yes — provided the correct legal path is taken in time. Speed matters." },
          ],
        },
        "accident-injury": {
          title: "Accident & Injury Claims",
          short: "Protecting your rights and compensation after road accidents and injuries in Dubai.",
          long: "After an accident, one correct legal decision can change the outcome — and the compensation. We guide you through reports, insurance and claims so nothing is left on the table.",
          who: ["Drivers and passengers in road accidents", "Pedestrians injured in incidents", "Families of victims"],
          outcomes: ["Full assessment of entitlements", "Coordination with insurers", "Civil compensation claims", "Diyeh and injury claims"],
          steps: ["Evidence gathering", "Insurance engagement", "Settlement attempt", "Court claim", "Compensation collection"],
          docs: ["Police accident report", "Medical reports", "Insurance details", "Any photos or videos"],
          faqs: [
            { q: "Should I sign anything offered by the insurance immediately?", a: "Not before a lawyer has reviewed it. Early signatures often waive significant rights." },
          ],
        },
        "notary-contracts": {
          title: "Notary & Contracts",
          short: "Drafting, reviewing and notarizing contracts, powers of attorney and declarations.",
          long: "Whether you are signing a power of attorney, a partnership agreement or a personal declaration, the wording matters. We draft and review documents so they protect you in court — not just on paper.",
          who: ["Individuals needing POAs and declarations", "Business partners formalizing agreements", "Anyone signing high-value documents"],
          outcomes: ["Custom-drafted contracts", "Risk review of received drafts", "Notarization coordination", "Bilingual EN/AR documents"],
          steps: ["Briefing", "Drafting / review", "Revision", "Notarization", "Delivery"],
          docs: ["Emirates ID & passport", "Any draft you received", "Underlying transaction details"],
          faqs: [
            { q: "Can you draft documents in both Arabic and English?", a: "Yes — bilingual drafting is standard for most contracts and POAs." },
          ],
        },
        "commercial-corporate": {
          title: "Commercial & Corporate",
          short: "Company formation, shareholder disputes, contracts and commercial litigation.",
          long: "Support for businesses operating in the UAE: from formation and contracts to disputes between partners and commercial litigation across local courts.",
          who: ["SMEs and founders", "Shareholders in dispute", "Suppliers and distributors"],
          outcomes: ["Clear corporate structure", "Strong contracts", "Dispute resolution", "Litigation when needed"],
          steps: ["Diagnosis", "Strategy", "Negotiation", "Filing", "Resolution"],
          docs: ["Trade license", "MOA / shareholder agreements", "Contracts in dispute"],
          faqs: [
            { q: "Do you handle disputes between partners?", a: "Yes, both through negotiation and through the courts when negotiation fails." },
          ],
        },
        "real-estate": {
          title: "Real Estate",
          short: "Property disputes, sale & purchase, leasing and developer claims.",
          long: "Whether you are buying, selling, leasing or in dispute with a developer or landlord, real estate matters in Dubai have their own rules — and their own forums.",
          who: ["Buyers and sellers", "Tenants and landlords", "Investors with developer disputes"],
          outcomes: ["Contract review", "Rental disputes", "Refund and compensation claims", "Court representation"],
          steps: ["Document review", "Demand", "Filing in proper forum", "Resolution"],
          docs: ["Sale or lease contracts", "Payment receipts", "Title documents"],
          faqs: [
            { q: "Where are rental disputes heard?", a: "In Dubai, most rental disputes are heard at the Rental Disputes Centre." },
          ],
        },
        "immigration": {
          title: "Immigration & Residency",
          short: "Residency, visa, and status matters connected to legal cases.",
          long: "Immigration status can be affected by criminal, civil and family cases. We coordinate the legal side so your residency is protected as far as the law allows.",
          who: ["Residents facing status risk", "Families on dependent visas", "Investors and entrepreneurs"],
          outcomes: ["Status protection strategy", "Coordination with authorities", "Representation in related cases"],
          steps: ["Status review", "Risk mapping", "Action plan", "Implementation"],
          docs: ["Passport & Emirates ID", "Visa pages", "Related case papers"],
          faqs: [
            { q: "Will a case automatically affect my visa?", a: "Not always — but the risk depends on the type of case. Early advice matters." },
          ],
        },
        "arbitration": {
          title: "Arbitration",
          short: "Representation in commercial arbitration proceedings in the UAE.",
          long: "When contracts call for arbitration, the rules differ from regular courts. We represent clients before recognized UAE arbitration centers.",
          who: ["Parties to commercial contracts", "Construction and supply disputes", "International business partners"],
          outcomes: ["Arbitration strategy", "Filing and defense", "Award enforcement"],
          steps: ["Clause review", "Filing", "Hearings", "Award", "Enforcement"],
          docs: ["Underlying contract", "Correspondence", "Evidence of breach"],
          faqs: [
            { q: "Can an arbitration award be enforced in court?", a: "Yes — awards can be ratified and enforced through the competent UAE courts." },
          ],
        },
      },
    },
    calc: {
      heading: "Legal Calculators",
      lead: "Quick informational estimates for common legal figures. Always verify with a consultation.",
      result: "Estimated result",
      items: {
        mehrieh: {
          title: "Mehrieh Calculator",
          sub: "Estimate the present value of a deferred mehrieh.",
          description: "Provide the agreed mehrieh amount, the year, and an annual adjustment rate to see an indicative present value.",
          fields: [
            { key: "amount", label: "Mehrieh amount", placeholder: "e.g. 100000", type: "number" },
            { key: "year", label: "Year of agreement", placeholder: "e.g. 2010", type: "number" },
            { key: "rate", label: "Annual adjustment %", placeholder: "e.g. 8", type: "number" },
          ],
          resultLabel: "Estimated present value",
        },
        diyeh: {
          title: "Diyeh Calculator",
          sub: "Indicative diyeh share based on injury severity.",
          description: "Choose the base diyeh and the share applicable to the injury to see an indicative figure.",
          fields: [
            { key: "base", label: "Base diyeh (AED)", placeholder: "e.g. 200000", type: "number" },
            { key: "share", label: "Applicable share %", placeholder: "e.g. 25", type: "number" },
          ],
          resultLabel: "Estimated diyeh",
        },
        tax: {
          title: "Corporate Tax Calculator",
          sub: "Indicative UAE corporate tax on annual profit.",
          description: "Enter your annual profit. The tool applies the standard UAE 9% corporate tax above the AED 375,000 threshold.",
          fields: [
            { key: "profit", label: "Annual profit (AED)", placeholder: "e.g. 500000", type: "number" },
          ],
          resultLabel: "Estimated tax due",
        },
        penalty: {
          title: "Penalty / Late Fee Calculator",
          sub: "Estimate a contractual late penalty.",
          description: "Provide the principal amount, the daily penalty rate, and the number of overdue days.",
          fields: [
            { key: "principal", label: "Principal (AED)", placeholder: "e.g. 50000", type: "number" },
            { key: "rate", label: "Daily penalty %", placeholder: "e.g. 0.1", type: "number" },
            { key: "days", label: "Overdue days", placeholder: "e.g. 30", type: "number" },
          ],
          resultLabel: "Estimated penalty",
        },
      },
    },
    qa: {
      heading: "Legal Questions Bank",
      lead: "Searchable answers to the questions clients ask most often. Educational only — not legal advice.",
      search: "Search questions…",
      allCategories: "All",
      categories: {
        family: "Family", divorce: "Divorce", mehrieh: "Mehrieh",
        contracts: "Contracts", business: "Business", immigration: "Immigration",
        criminal: "Criminal", property: "Property", labor: "Labor", tax: "Tax",
      },
      items: [
        { cat: "family", q: "Is the first family consultation free?", a: "Yes — initial family and divorce consultations are offered at no cost. The aim is to give you clarity about your options before any commitment." },
        { cat: "divorce", q: "Can divorce be avoided through mediation?", a: "Often, yes. Where both spouses are open to dialogue, reconciliation is attempted first. Only when it is not workable do we proceed with the legal process." },
        { cat: "mehrieh", q: "Can mehrieh be claimed years after marriage?", a: "Yes. Deferred mehrieh remains a debt of the husband and can be claimed during marriage or at divorce, subject to specific rules." },
        { cat: "contracts", q: "Should I have my contract reviewed before signing?", a: "Always. A short review can prevent years of dispute. Bilingual drafting is recommended for important documents." },
        { cat: "business", q: "How are partner disputes resolved?", a: "Through negotiation, mediation, or litigation depending on the shareholder agreement and severity of the dispute." },
        { cat: "immigration", q: "Can a legal case affect my UAE residency?", a: "It can, depending on the type and outcome of the case. Early legal advice helps protect status." },
        { cat: "criminal", q: "What if I am summoned by the police?", a: "Do not give detailed statements before consulting a lawyer. Contact this office immediately." },
        { cat: "property", q: "Where are rental disputes filed in Dubai?", a: "Most rental disputes go to the Rental Disputes Centre, which has its own procedures and timelines." },
        { cat: "labor", q: "What if my salary is delayed?", a: "Document the delay and communicate in writing first. Formal complaints are filed with MOHRE before court action." },
        { cat: "tax", q: "Does the 9% corporate tax apply to all profit?", a: "It applies to taxable profit above the AED 375,000 threshold, with specific exemptions and free-zone rules." },
        { cat: "criminal", q: "Can a travel ban be lifted?", a: "Yes, once the underlying cause (debt, case, claim) is addressed through the proper legal route." },
        { cat: "family", q: "Can I file for custody as an expat parent?", a: "Yes. UAE family courts hear custody matters for residents, with specific rules on age, schooling and welfare." },
      ],
    },
    consult: {
      heading: "Book a Consultation",
      lead: "Tell us about your matter. The form opens WhatsApp with your details so we can respond fast in your language.",
      success: "Opening WhatsApp with your message…",
      fields: {
        name: { label: "Full name", placeholder: "Your name" },
        phone: { label: "Phone", placeholder: "+971 …" },
        whatsapp: { label: "WhatsApp number", placeholder: "Same as phone if applicable" },
        email: { label: "Email", placeholder: "you@email.com" },
        language: { label: "Preferred language" },
        type: { label: "Consultation type" },
        topic: { label: "Legal topic" },
        description: { label: "Brief description", placeholder: "Outline your situation in a few lines.", help: "Avoid sharing sensitive details until we are formally engaged." },
        date: { label: "Preferred date" },
        time: { label: "Preferred time" },
        urgency: { label: "Urgency" },
      },
      consult_types: [
        { v: "in_person", l: "In-person at the office" },
        { v: "phone", l: "Phone call" },
        { v: "whatsapp", l: "WhatsApp" },
        { v: "video", l: "Video call" },
      ],
      languages: [
        { v: "en", l: "English" }, { v: "ar", l: "Arabic" },
        { v: "fa", l: "Farsi" }, { v: "ur", l: "Urdu" },
      ],
      urgency: [
        { v: "low", l: "Within a week" },
        { v: "med", l: "Within 48 hours" },
        { v: "high", l: "Today / urgent" },
      ],
      consent: "I understand this form does not create an attorney-client relationship and that an engagement begins only upon written agreement.",
      submit: "Send via WhatsApp",
      legalNote: "Submitting this form does not create an attorney-client relationship. A lawyer will reach out to confirm next steps.",
    },
    faq: {
      heading: "Frequently Asked Questions",
      lead: "Quick answers to questions clients ask before reaching out.",
      items: [
        { q: "Is the first consultation really free?", a: "Initial family and divorce consultations are offered at no cost. Other matters may be assessed briefly to outline next steps and fees." },
        { q: "Which languages can I be served in?", a: "English, Arabic, Farsi and Urdu — directly with the lawyer or supporting staff." },
        { q: "Do you handle cases outside Dubai?", a: "Yes — across the wider UAE through Zayed AlShehhi Advocates." },
        { q: "How quickly do you respond on WhatsApp?", a: "Usually the same day, often within a few hours during working hours." },
        { q: "Do you offer payment plans?", a: "Where appropriate, fees can be structured around the case milestones." },
        { q: "Can I send documents by WhatsApp?", a: "Yes — for an initial review only. Sensitive originals are handled at the office." },
      ],
    },
    contact: {
      heading: "Contact",
      lead: "Reach out by WhatsApp or phone. Office visits are arranged after first contact.",
      channels: "Channels", hours: "Hours", office: "Office",
    },
    privacy: {
      heading: "Privacy Policy",
      body: "We respect your privacy. Information shared via the consultation form, WhatsApp, email or phone is used solely to assess and respond to your inquiry. We do not sell or share personal data with third parties for marketing. Where engagement begins, all client information is treated as confidential under professional duty. Cookies on this site are used only to remember your language preference. You may request deletion of your inquiry data at any time by contacting us.",
    },
    disclaimer: {
      heading: "Legal Disclaimer",
      body: "The content on this website is provided for general information only and does not constitute legal advice. No attorney-client relationship is formed by visiting this site, sending a message, or using the calculators. Calculator results are educational estimates and may not reflect the figure a court or authority would apply. For advice on your specific situation, please book a consultation. Abu Ahmed practices under Zayed AlShehhi Advocates & Legal Consultants, Dubai, UAE.",
    },
    footer: {
      tagline: "Calm, decisive legal counsel in Dubai and across the UAE.",
      quickLinks: "Quick links", resources: "Resources", contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  fa: {
    dir: "rtl", langName: "فارسی",
    nav: {
      home: "خانه", about: "درباره", services: "خدمات", calculators: "محاسبه‌گرهای حقوقی",
      questions: "پرسش‌های حقوقی", consultation: "رزرو مشاوره", contact: "تماس", faq: "سؤالات متداول",
      bookConsult: "رزرو مشاوره", whatsapp: "واتساپ", menu: "منو",
    },
    hero: {
      eyebrow: "وکلای دبی · ابوأحمد",
      title: "مشاوره حقوقی آرام و قاطع برای زندگی در امارات.",
      titleAccent: "مشاوری که می‌توانید به او اعتماد کنید.",
      subtitle:
        "بیش از ۲۰ سال همراهی مقیمان و مهاجران در پرونده‌های خانواده، کیفری، چک، تصادف و شرکتی، تحت دفتر حقوقی زاید الشحی.",
      cta1: "رزرو مشاوره", cta2: "ارسال پیام در واتساپ",
      cred1: "بیش از ۲۰ سال تجربه", cred2: "دفتر زاید الشحی",
      cred3: "دبی · امارات", cred4: "EN · AR · FA · UR",
    },
    common: {
      learnMore: "بیشتر بدانید", readMore: "ادامه مطلب",
      sendOnWhatsapp: "ارسال نتیجه در واتساپ",
      bookAboutThis: "رزرو مشاوره درباره این موضوع",
      getStarted: "شروع کنید", required: "الزامی",
      submit: "ارسال در واتساپ", sending: "در حال باز کردن واتساپ…",
      disclaimer: "این اطلاعات صرفاً آموزشی است و مشاوره حقوقی محسوب نمی‌شود.",
      estimateOnly: "نتایج صرفاً تخمینی است و جایگزین مشاوره رسمی نمی‌شود.",
      languages: "زبان‌ها", office: "دفتر",
      callNow: "تماس", emailUs: "ایمیل", followUs: "دنبال کنید",
    },
    home: {
      servicesHeading: "حوزه‌های تخصصی",
      servicesSub: "نمایندگی متمرکز و کاربردی در پرونده‌هایی که مهاجران و مقیمان بیش از همه با آن مواجه‌اند.",
      whyHeading: "چرا موکلان این دفتر را انتخاب می‌کنند",
      whySub: "یک دفتر واقعی، یک شرکت حقوقی معتبر، و وکیلی که پاسخ پیام شما را می‌دهد.",
      why: [
        { title: "دفتری واقعی و قابل مراجعه", body: "تحت پوشش دفتر حقوقی زاید الشحی — نه فقط نامی در پیام‌های مستقیم." },
        { title: "اولویت با صلح", body: "در پرونده‌های خانواده ابتدا تلاش می‌کنیم آنچه قابل نگه داشتن است حفظ شود." },
        { title: "نمایندگی چندزبانه", body: "گفتگوی مستقیم به انگلیسی، عربی، فارسی و اردو — بدون فاصله مترجم." },
        { title: "مشاوره صادقانه و شفاف", body: "تصویر کامل حقوقی را دریافت می‌کنید، نه روایتی که دوست دارید بشنوید." },
      ],
      processHeading: "آغاز یک پرونده",
      process: [
        { title: "تماس اولیه", body: "از طریق واتساپ یا فرم رزرو ارتباط بگیرید. مسئله را به زبان خودتان شرح دهید." },
        { title: "ارزیابی رایگان", body: "وضعیت شما را بررسی می‌کنیم، حقوق و گزینه‌ها را توضیح می‌دهیم و مسیر محتمل را ترسیم می‌کنیم." },
        { title: "قرارداد", body: "در صورت ادامه، دامنه کار، حق‌الوکاله و مدارک را به‌صورت کتبی توافق می‌کنیم." },
        { title: "نمایندگی", body: "ثبت‌ها، جلسات و مذاکرات با ماست — شما در هر مرحله در جریان هستید." },
      ],
      qHeading: "پرسش‌های پرتکرار، پاسخ‌های روشن",
      qSub: "پاسخ‌های کوتاه به پرسش‌هایی که موکلان بیش از همه می‌پرسند.",
      moreQuestionsCta: "پرسش‌های حقوقی بیشتر",
      ctaHeading: "یک تصمیم اشتباه می‌تواند آینده‌تان را تغییر دهد.",
      ctaBody: "پیش از هر اقدام با وکیل صحبت کنید. اولین مشاوره رایگان است.",
    },
    about: {
      heading: "درباره ابوأحمد",
      lead: "وکیلی مستقر در دبی با بیش از ۲۰ سال تجربه در همراهی موکلان با نظام حقوقی امارات با آرامش، شفافیت و توجه.",
      sections: [
        { title: "دفتر حقوقی", body: "ابوأحمد تحت پوشش دفتر حقوقی زاید الشحی، یکی از دفاتر معتبر دبی، فعالیت می‌کند. حوزه کار شامل خانواده، کیفری، مدنی، تجاری، شرکتی، املاک، مهاجرت و داوری در سراسر امارات است." },
        { title: "فلسفه کار", body: "در پرونده‌های خانواده، صلح بر دعوا مقدم است. صداقت بر راحتی در هر گفتگو ارجح است. از موکلان خواسته می‌شود تمام حقیقت را بگویند تا دفاع بر پایه واقعیت ساخته شود." },
        { title: "برای مهاجران و مقیمان", body: "بیشتر موکلان مهاجرانی هستند که با پرونده چک، تصادف، طلاق، ممنوع‌الخروجی یا اتهامات کیفری روبرو هستند. هدف، فهم‌پذیر کردن قانون امارات و کاهش ترس از مواجهه با نظامی به زبانی غیر از زبان مادری است." },
        { title: "نحوه کار", body: "دفتر واقعی در دبی، شرکتی رسمی پشت کار، و دسترسی مستقیم در واتساپ. شما با خود وکیل صحبت می‌کنید، نه با زنجیره‌ای از واسطه‌ها." },
      ],
    },
    services: {
      heading: "خدمات و حوزه‌های تخصصی",
      lead: "هر پرونده شخصاً پیگیری می‌شود — با پشتوانه کامل دفتر حقوقی.",
      whoItHelps: "این خدمت برای کیست",
      keyOutcomes: "نتایج کلیدی",
      process: "روند کار",
      documents: "مدارک مورد نیاز",
      serviceFaq: "پرسش‌های پرتکرار",
      items: {
        "family-divorce": {
          title: "خانواده و طلاق",
          short: "حقوق خانواده با اولویت آشتی — طلاق، حضانت، نفقه و حمایت.",
          long: "پرونده‌های خانواده با صبر و رازداری پیگیری می‌شود. هر جا ازدواج قابل نجات باشد، ابتدا تلاش می‌شود. در غیر این صورت، فرزندان، مال و آبرو در دادگاه‌های خانواده امارات حفظ می‌شود.",
          who: ["زوجین در آستانه طلاق", "والدین درگیر حضانت", "موکلان متقاضی نفقه", "خانواده‌های با ملیت مختلط"],
          outcomes: ["مشاوره خانواده اول رایگان", "توافق میانجی‌گری در صورت امکان", "استراتژی روشن دادگاهی در صورت نیاز", "حفاظت از منافع فرزندان"],
          steps: ["پذیرش محرمانه", "تلاش برای آشتی", "میانجی‌گری یا ثبت دعوا", "نمایندگی در دادگاه", "اجرای حکم"],
          docs: ["سند ازدواج", "اقامت و گذرنامه", "شناسنامه فرزندان", "مدارک مالی"],
          faqs: [
            { q: "آیا اولین مشاوره خانواده واقعاً رایگان است؟", a: "بله — مشاوره اولیه خانواده و طلاق بدون هزینه ارائه می‌شود تا بدون فشار درباره مرحله بعد تصمیم بگیرید." },
            { q: "آیا می‌توان از طلاق جلوگیری کرد؟", a: "اغلب اولین گفتگو درباره امکان آشتی است. تنها در صورت عدم امکان، روند قانونی آغاز می‌شود." },
          ],
        },
        "criminal": {
          title: "دفاع کیفری",
          short: "دفاع در اتهامات، تحقیقات و محاکمات کیفری در دادگاه‌های امارات.",
          long: "از بازجویی پلیس تا محاکمه و تجدیدنظر، پرونده‌های کیفری به سرعت و صداقت کامل میان موکل و وکیل نیاز دارد.",
          who: ["هر کسی که توسط پلیس احضار شده", "متهمان جنحه و جنایت", "موکلان با اتهامات مالی یا ضرب و جرح"],
          outcomes: ["استراتژی فوری دفاع", "نمایندگی در همه مراحل", "درخواست وثیقه و رفع منع خروج", "تجدیدنظر در صورت وجود زمینه"],
          steps: ["پذیرش فوری", "بررسی پرونده", "طرح دفاع", "جلسات و محاکمه", "تجدیدنظر در صورت نیاز"],
          docs: ["گزارش پلیس (در صورت موجود بودن)", "اقامت و گذرنامه", "هر مدرکی که در اختیار دارید", "مشخصات شهود"],
          faqs: [
            { q: "اگر پلیس مرا احضار کرد چه کنم؟", a: "پیش از مشورت با وکیل، اظهارات تفصیلی ندهید. فوراً با این دفتر تماس بگیرید." },
          ],
        },
        "travel-ban": {
          title: "پرونده‌های ممنوع‌الخروجی",
          short: "رفع و اعتراض به منع خروج به دلایل مدنی، مالی یا کیفری.",
          long: "ممنوع‌الخروجی ممکن است در ارتباط با بدهی، چک، خانواده و پرونده‌های کیفری صادر شود. منبع آن را شناسایی و مسیر قانونی رفع را پیگیری می‌کنیم.",
          who: ["مقیمانی که در فرودگاه متوجه منع شده‌اند", "موکلان با پرونده مالی یا خانوادگی مرتبط", "صاحبان کسب‌وکار با بدهی مورد اختلاف"],
          outcomes: ["شناسایی منبع منع", "تسویه یا درخواست رفع", "هماهنگی با طلبکاران و مراجع"],
          steps: ["بررسی وضعیت", "شناسایی منبع", "تسویه یا درخواست", "رفع و تایید"],
          docs: ["اقامت و گذرنامه", "شماره‌های پرونده یا ادعا", "قراردادها یا چک‌های مرتبط"],
          faqs: [
            { q: "چگونه بفهمم ممنوع‌الخروج هستم؟", a: "می‌توانیم استعلام رسمی از طرف شما بگیریم و مرجع صادرکننده را شناسایی کنیم." },
          ],
        },
        "cheque-bounced": {
          title: "چک برگشتی و وصول مطالبات",
          short: "وصول چک‌های برگشتی و مطالبات معوق از مسیر صحیح قانونی امارات.",
          long: "چک برگشتی پول از دست رفته نیست — حقی قابل وصول است اگر مسیر قانونی درست طی شود.",
          who: ["دارندگان چک برگشتی", "تأمین‌کنندگان و پیمانکاران با فاکتور پرداخت‌نشده", "متهمان پرونده چک"],
          outcomes: ["مطالبه و مذاکره", "ثبت دعوای حقوقی و کیفری", "تنظیم تسویه", "اجرای حکم"],
          steps: ["بررسی مدارک", "اظهارنامه رسمی", "ثبت دعوا", "صدور حکم", "اجرا"],
          docs: ["اصل چک‌ها", "گواهی برگشت بانک", "قراردادها یا فاکتورهای زیربنایی"],
          faqs: [
            { q: "آیا چک برگشتی هنوز قابل وصول است؟", a: "در بیشتر موارد بله — به‌شرط طی مسیر قانونی صحیح در زمان مناسب. سرعت اهمیت دارد." },
          ],
        },
        "accident-injury": {
          title: "تصادف و خسارت جانی",
          short: "حفاظت از حقوق و خسارت شما پس از تصادف و آسیب در دبی.",
          long: "پس از تصادف، یک تصمیم درست حقوقی می‌تواند نتیجه و میزان خسارت را تغییر دهد.",
          who: ["رانندگان و سرنشینان", "عابران آسیب‌دیده", "خانواده‌های قربانیان"],
          outcomes: ["ارزیابی کامل حقوق", "هماهنگی با بیمه", "ادعای خسارت مدنی", "ادعای دیه و آسیب"],
          steps: ["جمع‌آوری شواهد", "تعامل با بیمه", "تلاش برای تسویه", "ادعای دادگاهی", "وصول خسارت"],
          docs: ["گزارش پلیس", "گزارش‌های پزشکی", "اطلاعات بیمه", "عکس و ویدیو"],
          faqs: [
            { q: "آیا بلافاصله سندی را که بیمه می‌دهد امضا کنم؟", a: "نه پیش از بررسی توسط وکیل. امضاهای زودهنگام اغلب حقوق مهمی را ساقط می‌کند." },
          ],
        },
        "notary-contracts": {
          title: "ثبت اسناد و قراردادها",
          short: "تنظیم، بررسی و ثبت رسمی قراردادها، وکالت‌نامه و اقرارنامه.",
          long: "متن سند مهم است. اسناد را طوری تنظیم و بررسی می‌کنیم که در دادگاه نیز از شما حمایت کند.",
          who: ["افراد نیازمند وکالت‌نامه و اقرارنامه", "شرکای تجاری", "هر امضاکننده سند ارزشمند"],
          outcomes: ["قرارداد سفارشی", "بررسی ریسک پیش‌نویس‌های دریافتی", "هماهنگی ثبت رسمی", "اسناد دوزبانه EN/AR"],
          steps: ["گزارش‌گیری", "تنظیم/بررسی", "اصلاح", "ثبت رسمی", "تحویل"],
          docs: ["اقامت و گذرنامه", "هر پیش‌نویس دریافتی", "جزئیات معامله"],
          faqs: [
            { q: "آیا اسناد به فارسی هم تنظیم می‌شود؟", a: "تنظیم دوزبانه عربی-انگلیسی استاندارد است. ترجمه فارسی بنا به نیاز انجام می‌شود." },
          ],
        },
        "commercial-corporate": {
          title: "تجاری و شرکتی",
          short: "تأسیس شرکت، اختلاف سهامداران، قراردادها و دعاوی تجاری.",
          long: "پشتیبانی کسب‌وکارهای فعال در امارات: از تأسیس و قرارداد تا اختلاف میان شرکا و دعاوی تجاری.",
          who: ["کسب‌وکارهای کوچک و بنیان‌گذاران", "سهامداران درگیر اختلاف", "تأمین‌کنندگان و توزیع‌کنندگان"],
          outcomes: ["ساختار شرکتی روشن", "قراردادهای محکم", "حل اختلاف", "دادخواهی در صورت نیاز"],
          steps: ["تشخیص", "استراتژی", "مذاکره", "ثبت دعوا", "حل و فصل"],
          docs: ["مجوز تجاری", "اساسنامه/توافق‌نامه سهامداران", "قراردادهای مورد اختلاف"],
          faqs: [
            { q: "اختلاف میان شرکا را پیگیری می‌کنید؟", a: "بله، چه از طریق مذاکره و چه از طریق دادگاه در صورت شکست مذاکره." },
          ],
        },
        "real-estate": {
          title: "املاک",
          short: "اختلاف ملکی، خرید و فروش، اجاره و دعاوی توسعه‌دهنده.",
          long: "موضوعات املاک در دبی قواعد و مراجع خاص خود را دارد.",
          who: ["خریداران و فروشندگان", "مستأجران و موجران", "سرمایه‌گذاران با اختلاف توسعه‌دهنده"],
          outcomes: ["بررسی قرارداد", "اختلافات اجاره", "ادعای استرداد و خسارت", "نمایندگی دادگاهی"],
          steps: ["بررسی مدارک", "اظهارنامه", "ثبت در مرجع صحیح", "حل و فصل"],
          docs: ["قرارداد فروش یا اجاره", "رسید پرداخت", "اسناد مالکیت"],
          faqs: [
            { q: "اختلاف اجاره در دبی کجا بررسی می‌شود؟", a: "در مرکز حل اختلافات اجاره دبی." },
          ],
        },
        "immigration": {
          title: "مهاجرت و اقامت",
          short: "موضوعات اقامت، ویزا و وضعیت مرتبط با پرونده‌های حقوقی.",
          long: "وضعیت مهاجرتی می‌تواند تحت تأثیر پرونده‌های کیفری، مدنی و خانواده قرار گیرد.",
          who: ["مقیمان در معرض ریسک وضعیت", "خانواده‌های ویزای تبعی", "سرمایه‌گذاران و کارآفرینان"],
          outcomes: ["استراتژی حفاظت از وضعیت", "هماهنگی با مراجع", "نمایندگی در پرونده‌های مرتبط"],
          steps: ["بررسی وضعیت", "نقشه ریسک", "برنامه اقدام", "اجرا"],
          docs: ["گذرنامه و اقامت", "صفحات ویزا", "اوراق پرونده مرتبط"],
          faqs: [
            { q: "آیا یک پرونده خودکار روی ویزا اثر می‌گذارد؟", a: "همیشه نه — اما ریسک به نوع پرونده بستگی دارد. مشاوره زودهنگام مهم است." },
          ],
        },
        "arbitration": {
          title: "داوری",
          short: "نمایندگی در داوری تجاری در امارات.",
          long: "وقتی قرارداد ارجاع به داوری دارد، قواعد متفاوت از دادگاه‌های عادی است.",
          who: ["طرفین قراردادهای تجاری", "اختلافات ساخت و تأمین", "شرکای بین‌المللی"],
          outcomes: ["استراتژی داوری", "ثبت و دفاع", "اجرای رأی"],
          steps: ["بررسی شرط داوری", "ثبت", "جلسات", "صدور رأی", "اجرا"],
          docs: ["قرارداد زیربنایی", "مکاتبات", "شواهد تخلف"],
          faqs: [
            { q: "آیا رأی داوری در دادگاه قابل اجراست؟", a: "بله — رأی‌ها قابل تنفیذ و اجرا در دادگاه‌های ذی‌صلاح امارات هستند." },
          ],
        },
      },
    },
    calc: {
      heading: "محاسبه‌گرهای حقوقی",
      lead: "تخمین‌های اطلاعاتی سریع برای ارقام رایج حقوقی. همیشه با مشاوره تأیید کنید.",
      result: "نتیجه تخمینی",
      items: {
        mehrieh: {
          title: "محاسبه‌گر مهریه",
          sub: "تخمین ارزش روز مهریه عندالمطالبه.",
          description: "مبلغ مهریه، سال توافق و نرخ تعدیل سالانه را وارد کنید تا ارزش تقریبی روز محاسبه شود.",
          fields: [
            { key: "amount", label: "مبلغ مهریه", placeholder: "مثلاً ۱۰۰۰۰۰", type: "number" },
            { key: "year", label: "سال توافق", placeholder: "مثلاً ۲۰۱۰", type: "number" },
            { key: "rate", label: "نرخ تعدیل سالانه ٪", placeholder: "مثلاً ۸", type: "number" },
          ],
          resultLabel: "ارزش تقریبی روز",
        },
        diyeh: {
          title: "محاسبه‌گر دیه",
          sub: "سهم تقریبی دیه بر اساس شدت آسیب.",
          description: "دیه پایه و درصد سهم متناسب با آسیب را انتخاب کنید.",
          fields: [
            { key: "base", label: "دیه پایه (درهم)", placeholder: "مثلاً ۲۰۰۰۰۰", type: "number" },
            { key: "share", label: "درصد سهم ٪", placeholder: "مثلاً ۲۵", type: "number" },
          ],
          resultLabel: "دیه تقریبی",
        },
        tax: {
          title: "محاسبه‌گر مالیات شرکتی",
          sub: "مالیات شرکتی تقریبی امارات بر سود سالانه.",
          description: "سود سالانه را وارد کنید. نرخ ۹٪ امارات بالاتر از آستانه ۳۷۵٬۰۰۰ درهم اعمال می‌شود.",
          fields: [
            { key: "profit", label: "سود سالانه (درهم)", placeholder: "مثلاً ۵۰۰۰۰۰", type: "number" },
          ],
          resultLabel: "مالیات تقریبی",
        },
        penalty: {
          title: "محاسبه‌گر جریمه/تأخیر",
          sub: "تخمین جریمه تأخیر قراردادی.",
          description: "اصل مبلغ، نرخ روزانه جریمه و تعداد روزهای تأخیر را وارد کنید.",
          fields: [
            { key: "principal", label: "اصل مبلغ (درهم)", placeholder: "مثلاً ۵۰۰۰۰", type: "number" },
            { key: "rate", label: "نرخ روزانه ٪", placeholder: "مثلاً ۰٫۱", type: "number" },
            { key: "days", label: "روزهای تأخیر", placeholder: "مثلاً ۳۰", type: "number" },
          ],
          resultLabel: "جریمه تقریبی",
        },
      },
    },
    qa: {
      heading: "بانک پرسش‌های حقوقی",
      lead: "پاسخ‌های قابل جستجو به پرتکرارترین پرسش‌ها. صرفاً آموزشی — مشاوره حقوقی نیست.",
      search: "جستجوی پرسش‌ها…",
      allCategories: "همه",
      categories: {
        family: "خانواده", divorce: "طلاق", mehrieh: "مهریه",
        contracts: "قراردادها", business: "کسب‌وکار", immigration: "مهاجرت",
        criminal: "کیفری", property: "املاک", labor: "کار", tax: "مالیات",
      },
      items: [
        { cat: "family", q: "آیا اولین مشاوره خانواده رایگان است؟", a: "بله — مشاوره اولیه خانواده و طلاق بدون هزینه ارائه می‌شود." },
        { cat: "divorce", q: "آیا با میانجی‌گری می‌توان از طلاق جلوگیری کرد؟", a: "اغلب بله. در صورت آمادگی هر دو طرف، ابتدا تلاش به آشتی می‌شود." },
        { cat: "mehrieh", q: "آیا مهریه پس از سال‌ها قابل مطالبه است؟", a: "بله. مهریه عندالمطالبه دین شوهر باقی می‌ماند و قابل مطالبه است." },
        { cat: "contracts", q: "آیا قرارداد را پیش از امضا بررسی کنم؟", a: "همیشه. یک بررسی کوتاه از سال‌ها اختلاف جلوگیری می‌کند." },
        { cat: "business", q: "اختلاف شرکا چگونه حل می‌شود؟", a: "از طریق مذاکره، میانجی‌گری یا دعوا، بسته به توافق سهامداران و شدت اختلاف." },
        { cat: "immigration", q: "آیا یک پرونده روی اقامت اثر می‌گذارد؟", a: "ممکن است، بسته به نوع و نتیجه پرونده. مشاوره زودهنگام به حفظ وضعیت کمک می‌کند." },
        { cat: "criminal", q: "اگر پلیس احضار کرد چه کنم؟", a: "پیش از مشورت با وکیل اظهارات تفصیلی ندهید. فوراً با این دفتر تماس بگیرید." },
        { cat: "property", q: "اختلاف اجاره در دبی کجا ثبت می‌شود؟", a: "در مرکز حل اختلافات اجاره دبی." },
        { cat: "labor", q: "اگر حقوقم به تأخیر افتاد چه کنم؟", a: "تأخیر را مستندسازی کنید و کتباً پیگیر شوید. شکایت رسمی در MOHRE ثبت می‌شود." },
        { cat: "tax", q: "آیا ۹٪ مالیات شرکتی روی همه سود اعمال می‌شود؟", a: "بر سود مشمول بالاتر از ۳۷۵٬۰۰۰ درهم اعمال می‌شود، با معافیت‌ها و قواعد منطقه آزاد." },
        { cat: "criminal", q: "آیا منع خروج قابل رفع است؟", a: "بله، با رفع علت زیربنایی از مسیر قانونی صحیح." },
        { cat: "family", q: "آیا به‌عنوان مهاجر می‌توانم تقاضای حضانت کنم؟", a: "بله. دادگاه‌های خانواده امارات موضوعات حضانت مقیمان را با قواعد خاص بررسی می‌کنند." },
      ],
    },
    consult: {
      heading: "رزرو مشاوره",
      lead: "موضوع خود را شرح دهید. فرم با اطلاعات شما واتساپ را باز می‌کند تا سریع به زبان شما پاسخ دهیم.",
      success: "در حال باز کردن واتساپ با پیام شما…",
      fields: {
        name: { label: "نام و نام خانوادگی", placeholder: "نام شما" },
        phone: { label: "تلفن", placeholder: "+۹۷۱ …" },
        whatsapp: { label: "شماره واتساپ", placeholder: "در صورت یکسان بودن با تلفن" },
        email: { label: "ایمیل", placeholder: "you@email.com" },
        language: { label: "زبان مرجح" },
        type: { label: "نوع مشاوره" },
        topic: { label: "موضوع حقوقی" },
        description: { label: "توضیح مختصر", placeholder: "موضوع را در چند خط شرح دهید.", help: "تا پیش از قرارداد رسمی، جزئیات حساس را به اشتراک نگذارید." },
        date: { label: "تاریخ مرجح" },
        time: { label: "ساعت مرجح" },
        urgency: { label: "فوریت" },
      },
      consult_types: [
        { v: "in_person", l: "حضوری در دفتر" },
        { v: "phone", l: "تماس تلفنی" },
        { v: "whatsapp", l: "واتساپ" },
        { v: "video", l: "تماس تصویری" },
      ],
      languages: [
        { v: "en", l: "انگلیسی" }, { v: "ar", l: "عربی" },
        { v: "fa", l: "فارسی" }, { v: "ur", l: "اردو" },
      ],
      urgency: [
        { v: "low", l: "ظرف یک هفته" },
        { v: "med", l: "ظرف ۴۸ ساعت" },
        { v: "high", l: "امروز / فوری" },
      ],
      consent: "می‌دانم این فرم رابطه وکیل-موکل ایجاد نمی‌کند و قرارداد فقط با توافق کتبی آغاز می‌شود.",
      submit: "ارسال در واتساپ",
      legalNote: "ارسال این فرم رابطه وکیل-موکل ایجاد نمی‌کند. وکیل برای تأیید مرحله بعد با شما تماس می‌گیرد.",
    },
    faq: {
      heading: "سؤالات متداول",
      lead: "پاسخ‌های سریع به پرسش‌هایی که موکلان پیش از تماس می‌پرسند.",
      items: [
        { q: "آیا اولین مشاوره واقعاً رایگان است؟", a: "مشاوره اولیه خانواده و طلاق رایگان است. سایر موارد به‌اختصار ارزیابی می‌شود." },
        { q: "خدمات به چه زبان‌هایی ارائه می‌شود؟", a: "انگلیسی، عربی، فارسی و اردو — مستقیم با وکیل یا کادر پشتیبان." },
        { q: "آیا پرونده‌های خارج از دبی را می‌پذیرید؟", a: "بله — در سراسر امارات از طریق دفتر زاید الشحی." },
        { q: "چقدر سریع در واتساپ پاسخ می‌دهید؟", a: "معمولاً همان روز، اغلب ظرف چند ساعت در ساعات کاری." },
        { q: "آیا امکان پرداخت اقساطی وجود دارد؟", a: "در صورت تناسب، حق‌الوکاله بر اساس مراحل پرونده تنظیم می‌شود." },
        { q: "آیا می‌توانم مدارک را در واتساپ بفرستم؟", a: "بله — برای بررسی اولیه. اصل اسناد حساس در دفتر تحویل می‌شود." },
      ],
    },
    contact: {
      heading: "تماس",
      lead: "از طریق واتساپ یا تلفن تماس بگیرید. ملاقات حضوری پس از تماس اول هماهنگ می‌شود.",
      channels: "کانال‌ها", hours: "ساعات کاری", office: "دفتر",
    },
    privacy: {
      heading: "سیاست حریم خصوصی",
      body: "ما به حریم خصوصی شما احترام می‌گذاریم. اطلاعاتی که از طریق فرم مشاوره، واتساپ، ایمیل یا تلفن به اشتراک می‌گذارید صرفاً برای ارزیابی و پاسخ به درخواست شما استفاده می‌شود. داده‌های شخصی برای بازاریابی به اشخاص ثالث داده نمی‌شود. در صورت آغاز قرارداد، تمام اطلاعات موکل تحت وظیفه حرفه‌ای محرمانه تلقی می‌شود. کوکی‌های این سایت فقط برای یادآوری زبان مورد استفاده شماست. می‌توانید درخواست حذف اطلاعات خود را هر زمان مطرح کنید.",
    },
    disclaimer: {
      heading: "سلب مسئولیت حقوقی",
      body: "محتوای این وب‌سایت فقط برای اطلاعات عمومی است و مشاوره حقوقی محسوب نمی‌شود. هیچ رابطه وکیل-موکلی با بازدید از سایت، ارسال پیام یا استفاده از محاسبه‌گرها ایجاد نمی‌شود. نتایج محاسبه‌گرها تخمین‌های آموزشی هستند و ممکن است با رقم اعمال‌شده توسط دادگاه یا مرجع متفاوت باشد. برای مشاوره وضعیت خاص خود لطفاً مشاوره رزرو کنید. ابوأحمد تحت پوشش دفتر حقوقی زاید الشحی، دبی، امارات فعالیت می‌کند.",
    },
    footer: {
      tagline: "مشاوره حقوقی آرام و قاطع در دبی و سراسر امارات.",
      quickLinks: "لینک‌های سریع", resources: "منابع", contact: "تماس",
      rights: "تمام حقوق محفوظ است.",
    },
  },
};
