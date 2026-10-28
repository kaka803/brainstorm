export const coreServices = [
  {
    slug: "custom-software",
    number: "01",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    category: "Core Engineering",
    buttonText: "Explore Software Development",
    tagline: "Custom web applications, SaaS products, CRM systems, business dashboards, API development, and system integrations.",
    icon: "fa-solid fa-code",
    badge: "Full-Stack Lab",
    shortDesc: "Custom web applications, SaaS products, CRM systems, business dashboards, API development, and system integrations.",
    bullets: [
      "Custom web applications & portals",
      "SaaS products & multi-tenant platforms",
      "CRM systems & automated dialers",
      "Real-time executive business dashboards",
      "REST & GraphQL API development",
      "Enterprise system & database integrations"
    ],
    deliverables: [
      "Custom React, Next.js & Tailwind responsive frontends",
      "High-concurrency Node.js, Python FastAPI & Go backends",
      "PostgreSQL, Redis & MongoDB scalable database modeling",
      "Custom CRM dialers, lead routing engines & analytics portals",
      "Enterprise REST / GraphQL API development & third-party sync",
      "CI/CD automation, cloud deployment (AWS/DigitalOcean/GCP), and 99.9% SLA"
    ],
    techStack: ["Next.js", "React", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Tailwind CSS"],
    engagementModels: [
      {
        name: "Dedicated Engineering Squad",
        bestFor: "Long-term product development & maintenance",
        features: ["1-5 Full-Time Developers", "Direct Slack & Daily Standups", "Sprint-based Agile delivery", "Full IP & Git ownership"]
      },
      {
        name: "Fixed-Scope Delivery",
        bestFor: "MVPs, specific portals & CRM modules",
        features: ["Defined milestone scope", "Transparent upfront pricing", "Guaranteed delivery timeline", "30-day post-launch warranty"]
      }
    ],
    stats: [
      { value: "150+", label: "Systems Deployed" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "2-4 Wks", label: "Average MVP Sprint" }
    ],
    faqs: [
      {
        q: "Who owns the intellectual property (IP) and source code?",
        a: "You retain 100% full ownership of all source code, git repositories, databases, and digital assets from day one."
      },
      {
        q: "How do you coordinate with our international time zone?",
        a: "Our developers and project managers align directly with US (EST/PST) and UK (GMT) working hours for seamless daily communications."
      }
    ]
  },
  {
    slug: "ai-automation",
    number: "02",
    title: "AI & Business Automation",
    shortTitle: "AI Automation",
    category: "Intelligent Workflows",
    buttonText: "Explore AI Solutions",
    tagline: "AI agents, workflow automation, CRM integrations, intelligent chatbots, and automated reporting.",
    icon: "fa-solid fa-robot",
    badge: "Smart Automation",
    shortDesc: "AI agents, workflow automation, CRM integrations, intelligent chatbots, and automated reporting.",
    bullets: [
      "Autonomous conversational AI agents",
      "Multi-step business workflow automation",
      "Bidirectional CRM integrations & webhooks",
      "Intelligent multi-channel chatbots",
      "Automated executive KPI reporting",
      "LLM tuning for enterprise compliance"
    ],
    deliverables: [
      "Sub-second latency conversational AI voice agents for instant lead qualification",
      "Automated follow-up sequences across SMS, email, and WhatsApp",
      "Real-time speech sentiment analysis and automated disposition tagging",
      "Bidirectional CRM webhooks for HubSpot, Salesforce, Zoho & custom portals",
      "Intelligent inbound call routing and automated after-hours scheduling",
      "Custom LLM prompts tuned for enterprise compliance and brand safety"
    ],
    techStack: ["OpenAI / Anthropic LLMs", "Deepgram / ElevenLabs", "Twilio Voice API", "Make / Zapier / n8n", "Node.js Webhooks"],
    engagementModels: [
      {
        name: "Turnkey AI Voice Agent Setup",
        bestFor: "Instant response for inbound & web lead qualification",
        features: ["Custom conversational design", "CRM synchronization", "Voice cloning / neutral tones", "Ongoing prompt tuning"]
      },
      {
        name: "End-to-End CRM Automation",
        bestFor: "Eliminating manual data entry across large sales squads",
        features: ["Automated disposition triggers", "Multi-channel pipeline sync", "Slack / Teams notification bots", "Monthly maintenance & logs"]
      }
    ],
    stats: [
      { value: "3.5x", label: "Faster Lead Response" },
      { value: "100%", label: "Data Capture Accuracy" },
      { value: "24/7", label: "Instant Lead Coverage" }
    ],
    faqs: [
      {
        q: "Can the AI agent transfer qualified leads to live human agents?",
        a: "Yes! Our voice AI workflows can warm-transfer interested prospects directly to your dedicated call center squad in real time."
      },
      {
        q: "Does AI voice work with our existing CRM?",
        a: "Yes, we integrate with HubSpot, Salesforce, GoHighLevel, Zoho, or any custom API via secure webhooks."
      }
    ]
  },
  {
    slug: "outbound-call-centre",
    number: "03",
    title: "Outbound Contact Center",
    shortTitle: "Outbound Contact Center",
    category: "Dedicated BPO",
    buttonText: "Explore Contact Center",
    tagline: "B2B lead generation, telesales, appointment setting, campaign management, and quality monitoring.",
    icon: "fa-solid fa-headset",
    badge: "Dedicated BPO Hub",
    shortDesc: "B2B lead generation, telesales, appointment setting, campaign management, and quality monitoring.",
    bullets: [
      "Targeted B2B lead generation & prospecting",
      "High-conversion outbound telesales squads",
      "Executive appointment setting",
      "Full-cycle campaign management & scripting",
      "100% audio call quality monitoring & QA",
      "Multi-carrier predictive dialer infrastructure"
    ],
    deliverables: [
      "Dedicated outbound calling squads customized to your exact vertical",
      "Native & accent-neutral voice talent trained on American & British markets",
      "Multi-carrier predictive dialers with high connect rates & zero lag",
      "Real-time audio recording, whisper coaching & live supervision",
      "Daily KPI dashboards: calls made, connect rate, conversions & QA scores",
      "Compliance with TCPA, GDPR, and international calling regulations"
    ],
    techStack: ["Vicidial / Asterisk", "Twilio / Telnyx", "Salesforce / HubSpot Sync", "Speech QA Analytics", "Sound-Isolated Bays"],
    engagementModels: [
      {
        name: "Dedicated Caller Squad (3-10 Seats)",
        bestFor: "Growing sales pipelines & B2B outreach",
        features: ["Dedicated shift callers", "Assigned team lead & QA auditor", "Custom script optimization", "Weekly conversion reviews"]
      },
      {
        name: "Enterprise BPO Floor (15-50+ Seats)",
        bestFor: "High-volume consumer & business campaigns",
        features: ["Dedicated floor manager", "Dual-redundant VoIP trunks", "Custom CRM webhook pipes", "24/7 continuous operations"]
      }
    ],
    stats: [
      { value: "50M+", label: "Calls Handled" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "60%+", label: "Offshore Cost Savings" }
    ],
    faqs: [
      {
        q: "Can we listen to live calls and review recordings?",
        a: "Yes! You have 24/7 access to your client dashboard where all call recordings, agent logs, and conversion metrics are updated in real time."
      },
      {
        q: "How quickly can we launch a dedicated squad?",
        a: "A new dedicated squad can be recruited, trained on your script, and making live calls within 7 business days."
      }
    ]
  }
];

export const marketingAndOperationsServices = [
  {
    slug: "gmb-seo",
    number: "04",
    title: "Google Business Profile & Local SEO",
    shortTitle: "GMB Local SEO",
    category: "Marketing & Growth",
    buttonText: "Explore Local SEO",
    tagline: "Dominating local search, Google Maps 3-Pack, geo-citations, and inbound lead acquisition.",
    icon: "fa-solid fa-store",
    badge: "Local Marketing",
    shortDesc: "Complete Google Business Profile optimization, Map Pack rankings, citation building, and reputation management to drive inbound calls.",
    bullets: [
      "Google Maps 3-Pack rank acceleration",
      "Geo-targeted local business citation building",
      "NAP consistency cleanup across 50+ directories",
      "Review acquisition & reputation management",
      "Local landing page schema markup",
      "Inbound phone call & direction request analytics"
    ],
    deliverables: [
      "Complete Google Business Profile (GBP) audit & structural optimization",
      "High-authority geo-tagged citation creation & NAP consistency cleanup",
      "Local Map Pack 3-pack rank tracking and localized keyword mapping",
      "Review acceleration workflows and reputation management protocols",
      "Localized landing page SEO and Google Maps schema markup",
      "Monthly local organic traffic, phone call & direction request reports"
    ],
    techStack: ["Google Business Profile API", "BrightLocal / Whitespark", "Semrush / Ahrefs", "Schema Markup Generator", "Geo-Targeted Audits"],
    engagementModels: [
      {
        name: "Single-Location Growth",
        bestFor: "Local service companies & clinics",
        features: ["GBP optimization", "50+ curated citations", "Monthly rank reporting", "Review response strategy"]
      },
      {
        name: "Multi-Location Enterprise Pack",
        bestFor: "Franchises and multi-city operations",
        features: ["Bulk GBP management", "Location-specific landing pages", "Competitor gap analysis", "Dedicated account strategist"]
      }
    ],
    stats: [
      { value: "Top 3", label: "Map Pack Target" },
      { value: "+140%", label: "Inbound Call Increase" },
      { value: "100%", label: "White-Hat Optimization" }
    ],
    faqs: [
      {
        q: "How long before we see improvements in Google Map rankings?",
        a: "Most clients see measurable rank climbing in the local 3-pack within 30 to 60 days following citation cleanup and profile optimization."
      },
      {
        q: "Do you comply with Google Guidelines?",
        a: "Absolutely. We follow strict 100% white-hat guidelines to ensure your profile remains secure and protected."
      }
    ]
  },
  {
    slug: "scripting-qa",
    number: "05",
    title: "Scripting, Training & Quality QA",
    shortTitle: "Scripting & QA",
    category: "Operational Rigor",
    buttonText: "Explore Scripting & QA",
    tagline: "Conversion-optimized sales scripts, dialect calibration, and 100% audited audio calls.",
    icon: "fa-solid fa-file-signature",
    badge: "Operations & Quality",
    shortDesc: "Tailored telemarketing scripts, objection matrices, accent coaching, and comprehensive QA performance audits.",
    bullets: [
      "Psychology-driven objection handling scripts",
      "Accent-neutral phonetics and active listening training",
      "100% call audio scorecard evaluation",
      "Weekly rebuttal calibration sprints",
      "TCPA compliance & disclosure adherence audits",
      "Agent leaderboard metrics and performance coaching"
    ],
    deliverables: [
      "Psychology-driven objection handling & multi-branch telemarketing scripting",
      "Accent-neutral phonetics and active-listening agent coaching",
      "100% audio call scorecards with rubric-based QA grading",
      "Weekly rebuttal calibration sprints based on live objection feedback",
      "Compliance verification & anti-misrepresentation protocols",
      "Agent leaderboard tracking and performance incentive systems"
    ],
    techStack: ["Audacity Speech Tools", "Scorecard QA Portals", "LMS Training Modules", "Live Whisper Coaching", "Automated Compliance Flags"],
    engagementModels: [
      {
        name: "Script Audit & Revamp",
        bestFor: "Existing campaigns with low connect-to-pitch rates",
        features: ["Full script restructuring", "Objection matrix cheat sheets", "A/B test variations", "1-week turnaround"]
      },
      {
        name: "Full-Cycle Training & Ongoing QA",
        bestFor: "Dedicated squads requiring high compliance & consistency",
        features: ["Daily scorecard grading", "Weekly 1-on-1 coaching", "Monthly compliance audit", "Direct client QA portal"]
      }
    ],
    stats: [
      { value: "100%", label: "Audited Calls" },
      { value: "+35%", label: "Pitch Conversion Lift" },
      { value: "Zero", label: "Script Ambiguity" }
    ],
    faqs: [
      {
        q: "Do you write scripts from scratch or adapt existing ones?",
        a: "Both! We can take your existing sales collateral and adapt it into a conversational, high-converting phone script, or build one from scratch."
      },
      {
        q: "What metrics are scored during QA audits?",
        a: "We score greeting clarity, value proposition delivery, objection handling, compliance disclosures, rapport, and closing urgency."
      }
    ]
  },
  {
    slug: "turnkey-hybrid",
    number: "06",
    title: "Turnkey Hybrid BPO & Tech Packages",
    shortTitle: "Turnkey Hybrid",
    category: "Full Integration",
    buttonText: "Explore Hybrid Solutions",
    tagline: "The complete synergy: dedicated offshore calling squads powered by custom software.",
    icon: "fa-solid fa-layer-group",
    badge: "All-in-One Operations",
    shortDesc: "Combine custom software development with dedicated outbound telemarketing teams managed directly from our Lahore hub.",
    bullets: [
      "Custom web CRM portal tailored to your funnel",
      "Dedicated 5-20+ seat outbound caller squad",
      "VoIP carrier infrastructure setup & local caller IDs",
      "Automated lead ingestion pipelines & dialer sync",
      "Single transparent itemized monthly invoice",
      "Assigned floor supervisor & dedicated account manager"
    ],
    deliverables: [
      "End-to-end bespoke CRM portal customized for your exact sales funnel",
      "Dedicated 5 to 20+ seat outbound caller squad managed by expert team leads",
      "Automated lead ingestion pipelines from your ads directly to agent screens",
      "VoIP carrier infrastructure setup with redundancy and local caller IDs",
      "Single transparent monthly invoice covering software, infrastructure & staff",
      "Dedicated account manager based in Lahore with direct daily executive liaison"
    ],
    techStack: ["Next.js Portal", "Vicidial Infrastructure", "AWS Cloud Backend", "Twilio SIP", "PostgreSQL"],
    engagementModels: [
      {
        name: "Growth Hybrid Package",
        bestFor: "Growing enterprises wanting all-in-one offshore operations",
        features: ["Custom Web CRM Portal", "5 Dedicated Outbound Callers", "Full VoIP & Scripting Setup", "Weekly Executive Sync"]
      },
      {
        name: "Enterprise Dominance Package",
        bestFor: "Established brands scaling rapidly",
        features: ["Custom Mobile/Web App", "15+ Dedicated Outbound Callers", "AI Voice Qualification", "Dedicated Floor & NDA Room"]
      }
    ],
    stats: [
      { value: "1 Single", label: "Turnkey Partner" },
      { value: "7 Days", label: "Squad Onboarding" },
      { value: "70%", label: "Operational Overhead Saved" }
    ],
    faqs: [
      {
        q: "Why choose a hybrid package instead of hiring software and BPO separately?",
        a: "When your software engineers and call center callers sit in the same building, technical bugs are resolved in minutes and CRM changes happen instantly."
      },
      {
        q: "Is there a long-term contract lock-in?",
        a: "We offer flexible month-to-month agreements following an initial 30-day pilot proof-of-concept phase."
      }
    ]
  }
];

// Combine all services for routing and static generation
export const servicesData = [...coreServices, ...marketingAndOperationsServices];
