// data/services.js
export const services = [
  {
    slug: "network-design-implementation",
    title: "Network Design & Implementation",
    summary: "Complete network infrastructure design, implementation, and management for optimal performance and security.",
    bullets: [
      "Site surveys and network requirement assessment",
      "LAN/WAN architecture and structured cabling (Cat6/Cat6A/Fiber)",
      "VLAN segmentation, routing, and switching design",
      "Secure configuration of routers, firewalls, and access points",
      "Network monitoring and centralized management systems"
    ],
    categories: ["Network Infrastructure", "Security", "Implementation"],
    pricing: [
      {
        tier: "Small Office",
        price: "USD 2,500+",
        includes: [
          "Site survey & assessment",
          "Basic network design",
          "Router & switch configuration",
          "Wi-Fi setup"
        ],
      },
      {
        tier: "Enterprise",
        price: "USD 8,000+",
        includes: [
          "Comprehensive network architecture",
          "VLAN segmentation",
          "Advanced security configuration",
          "Centralized monitoring"
        ],
      },
      {
        tier: "Custom Solution",
        price: "Custom Quote",
        includes: [
          "Multi-site deployment",
          "High-availability setup",
          "24/7 monitoring & support",
          "Documentation & training"
        ],
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "rack-installation-cabling",
    title: "Rack Installation and Cabling",
    summary: "Professional rack assembly, cable management, and fiber optic solutions for data centers and server rooms.",
    bullets: [
      "Rack assembly and mounting",
      "Patch panel and PDU installation",
      "Cable labeling and color-coding",
      "Fiber splicing and termination",
      "Neat cable management and airflow optimization"
    ],
    categories: ["Data Center", "Infrastructure", "Professional Services"],
    pricing: [
      {
        tier: "Standard Rack",
        price: "USD 1,200+",
        includes: [
          "Rack assembly & mounting",
          "Basic cable management",
          "Patch panel installation",
          "Cable labeling"
        ],
      },
      {
        tier: "Advanced Setup",
        price: "USD 3,500+",
        includes: [
          "Fiber optic termination",
          "Advanced cable management",
          "PDU installation",
          "Documentation"
        ],
      },
      {
        tier: "Enterprise Data Center",
        price: "Custom Quote",
        includes: [
          "Multi-rack deployment",
          "Fiber backbone installation",
          "Airflow optimization",
          "Compliance certification"
        ],
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1590658165737-15a047b8b5e4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "iot-smart-systems",
    title: "IoT & Smart Systems Integration",
    summary: "Smart automation solutions for offices, buildings, and industrial environments with seamless integration.",
    bullets: [
      "Smart office and building automation (lighting, HVAC, sensors)",
      "Smart door access control and biometric systems",
      "Smart surveillance and motion detection",
      "Environmental and energy monitoring via IoT sensors",
      "Integration with dashboards, mobile apps, or cloud platforms",
      "IoT protocols: MQTT, Zigbee, LoRaWAN, and Modbus"
    ],
    categories: ["IoT", "Automation", "Smart Systems", "Integration"],
    pricing: [
      {
        tier: "Basic Automation",
        price: "USD 3,000+",
        includes: [
          "Smart lighting control",
          "Basic sensor deployment",
          "Mobile app integration",
          "System configuration"
        ],
      },
      {
        tier: "Advanced Integration",
        price: "USD 7,500+",
        includes: [
          "Full building automation",
          "Biometric access control",
          "Energy monitoring",
          "Custom dashboard"
        ],
      },
      {
        tier: "Enterprise IoT",
        price: "Custom Quote",
        includes: [
          "Multi-protocol integration",
          "Custom mobile applications",
          "24/7 monitoring",
          "API development"
        ],
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "solar-power-systems",
    title: "Solar Power System Installation",
    summary: "Complete solar energy solutions including design, installation, and maintenance for reliable power.",
    bullets: [
      "Design and installation of on-grid, off-grid, and hybrid solar systems",
      "Solar panel mounting, inverter configuration, and battery setup",
      "Energy audit and load analysis",
      "Solar-powered network and IoT systems integration",
      "Preventive maintenance and performance optimization",
      "Smart monitoring for solar efficiency and fault alerts"
    ],
    categories: ["Solar Energy", "Renewable", "Power Systems", "IoT Integration"],
    pricing: [
      {
        tier: "Residential",
        price: "USD 4,000+",
        includes: [
          "Energy audit & load analysis",
          "Basic solar system installation",
          "Inverter configuration",
          "Basic monitoring"
        ],
      },
      {
        tier: "Commercial",
        price: "USD 12,000+",
        includes: [
          "Commercial solar design",
          "Hybrid system installation",
          "Battery backup setup",
          "Smart monitoring system"
        ],
      },
      {
        tier: "Industrial",
        price: "Custom Quote",
        includes: [
          "Large-scale solar deployment",
          "Grid integration",
          "IoT monitoring & alerts",
          "Maintenance contract"
        ],
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "electrical-installation",
    title: "Electrical Installation & Wiring Services",
    summary: "Professional electrical services for industrial, commercial, and residential applications.",
    bullets: [
      "Electrical design, planning, and implementation",
      "Internal and external wiring (industrial, commercial, residential)",
      "Circuit breaker panels and distribution boards setup",
      "Earthing and surge protection systems",
      "UPS and backup power system integration",
      "Safety inspections and compliance with IEC standards"
    ],
    categories: ["Electrical", "Wiring", "Safety", "Power Systems"],
    pricing: [
      {
        tier: "Residential",
        price: "USD 800+",
        includes: [
          "Electrical planning & design",
          "Basic wiring installation",
          "Circuit breaker setup",
          "Safety inspection"
        ],
      },
      {
        tier: "Commercial",
        price: "USD 2,500+",
        includes: [
          "Commercial electrical design",
          "Distribution board setup",
          "Surge protection",
          "UPS integration"
        ],
      },
      {
        tier: "Industrial",
        price: "Custom Quote",
        includes: [
          "Industrial electrical systems",
          "High-capacity power distribution",
          "Backup power solutions",
          "Compliance certification"
        ],
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    summary: "Offensive + defensive services aligned to best practices and ISO frameworks.",
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
    heroImage: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "software-development",
    title: "Software Development",
    summary: "Web & mobile apps, ERPs, secure SDLC and API integrations built for scale.",
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
    heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
  }
];