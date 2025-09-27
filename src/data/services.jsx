export const services = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    summary:
      "Offensive + defensive services aligned to best practices and ISO frameworks.",
    bullets: [
      "Penetration testing",
      "SOC as a Service",
      "Security awareness",
      "Vulnerability management",
      "Endpoint security",
      "Threat intelligence",
    ],
    categories: [
      "Offensive Security",
      "Defensive Operations",
      "Governance, Risk & Compliance",
      "Awareness & Training",
    ],
    pricing: [
      {
        tier: "Essential",
        price: "USD 1,500+",
        includes: [
          "External vuln scan",
          "Basic web app test",
          "Security awareness (up to 25 staff)",
        ],
      },
      {
        tier: "Professional",
        price: "USD 3,900+",
        includes: [
          "Full pen test (1 app / 1 subnet)",
          "Managed patch advisory",
          "Email security hardening",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        includes: [
          "24/7 SOC monitoring",
          "Blue/Red team exercises",
          "ISO 27001 readiness & audits",
        ],
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "cloud-management",
    title: "Cloud Management",
    summary:
      "Migration, Zero Trust, IAM, backup & disaster recovery across AWS/Azure/GCP.",
    bullets: ["Cloud migration", "Zero Trust / IAM", "Backup & DR", "FinOps"],
    categories: ["Architecture", "Security & IAM", "Operations", "Cost Control"],
    pricing: [
      {
        tier: "Starter",
        price: "USD 1,200+",
        includes: ["Cloud readiness review", "Backup baseline", "IAM hygiene"],
      },
      {
        tier: "Growth",
        price: "USD 2,800+",
        includes: ["Landing zone", "CIS hardening", "Monitoring & alerts"],
      },
      {
        tier: "Managed",
        price: "Custom",
        includes: ["24/7 ops", "SLA support", "BC/DR runbooks"],
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "software-development",
    title: "Software Development",
    summary:
      "Web & mobile apps, ERPs, secure SDLC and API integrations built for scale.",
    bullets: ["Product discovery", "UX/UI", "APIs & integrations", "DevOps CI/CD"],
    categories: ["Web & Mobile", "ERP/Backoffice", "Integrations", "DevOps"],
    pricing: [
      {
        tier: "MVP",
        price: "USD 4,900+",
        includes: ["Discovery sprint", "UI kit", "MVP build (4–6 weeks)"],
      },
      {
        tier: "Scale",
        price: "USD 9,900+",
        includes: ["Microservices/API", "CI/CD", "Observability"],
      },
      {
        tier: "Dedicated Team",
        price: "Monthly",
        includes: ["Engineers + PM", "SLA & roadmap", "Quarterly reviews"],
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "network-infrastructure",
    title: "Network & Infrastructure",
    summary:
      "Design, firewalls, VPNs, servers, PBX/VoIP — secure, high-availability architecture.",
    bullets: ["Firewalls & VPN", "Switching/Wi-Fi", "PBX/VoIP", "Server hardening"],
    categories: ["Security", "Connectivity", "Collaboration", "Datacenter"],
    pricing: [
      {
        tier: "Branch",
        price: "USD 1,300+",
        includes: ["Firewall + VPN", "Wi-Fi survey", "Hardening baseline"],
      },
      {
        tier: "HQ",
        price: "USD 5,500+",
        includes: ["HA firewalls", "LAN/WAN design", "Monitoring setup"],
      },
      {
        tier: "Managed",
        price: "Custom",
        includes: ["24/7 NOC", "Change mgmt", "Capacity & tuning"],
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1587202372775-98927b9800b7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "surveillance",
    title: "Surveillance",
    summary: "CCTV, access control, biometrics, and smart building systems.",
    bullets: ["IP CCTV", "Access control", "Biometrics", "VMS analytics"],
    categories: ["Cameras", "Access", "Analytics", "IoT/Smart"],
    pricing: [
      {
        tier: "Site Kit",
        price: "USD 2,400+",
        includes: ["8–12 IP cameras", "NVR", "Remote viewing"],
      },
      {
        tier: "Campus",
        price: "USD 7,900+",
        includes: ["30+ cameras", "Central VMS", "Role-based access"],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        includes: ["Redundant storage", "ANPR/AI", "SLA & support"],
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary:
      "SEO, SMM, content, paid campaigns and reputation management that convert.",
    bullets: ["SEO/SEM", "Social ads", "Content", "Analytics"],
    categories: ["Search", "Social", "Content", "Measurement"],
    pricing: [
      {
        tier: "Launch",
        price: "USD 900+",
        includes: ["SEO basics", "1 campaign", "Reporting"],
      },
      {
        tier: "Growth",
        price: "USD 1,900+",
        includes: ["Multi-channel ads", "Content pack", "A/B testing"],
      },
      {
        tier: "Performance",
        price: "Custom",
        includes: ["Always-on", "CRO", "Attribution model"],
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "consultation",
    title: "Consultation",
    summary: "Strategy, compliance and digital transformation engagements.",
    bullets: ["IT strategy", "Policy & SOPs", "ISO readiness", "Vendor selection"],
    categories: ["Strategy", "Compliance", "Architecture", "Coaching"],
    pricing: [
      {
        tier: "Workshop",
        price: "USD 650",
        includes: ["Half-day session", "Action plan", "Roadmap draft"],
      },
      {
        tier: "Engagement",
        price: "USD 3,500+",
        includes: ["Current-state review", "Target architecture", "3-month plan"],
      },
      {
        tier: "Advisory",
        price: "Monthly",
        includes: ["Fractional CTO/CISO", "Quarterly reviews", "On-call"],
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
  },
];
