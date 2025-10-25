// components/Solutions.jsx
import React from "react";
import {
  GraduationCap,
  Hotel,
  Landmark,
  Network,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  BarChart3,
  Cpu,
  Cloud,
  Database,
  Smartphone,
  Users,
  Code,
  Server,
  Lock,
  Globe,
  Shield,
  Zap,
  Monitor,
  MessageCircle,
} from "lucide-react";

export default function Solutions() {
  const blocks = [
    {
      title: "Education",
      text: "Secure school management, student privacy and resilient e-learning platforms.",
      icon: GraduationCap,
      points: ["Student data protection", "SIS/LMS integration", "Zero-trust access", "Digital classroom security"],
    },
    {
      title: "Hospitality",
      text: "PMS integrations, payment security and comprehensive guest data protection.",
      icon: Hotel,
      points: ["PMS / POS APIs", "PCI-aware payments", "Guest Wi-Fi security", "Reservation system protection"],
    },
    {
      title: "Finance",
      text: "Regulatory compliance, secure APIs & advanced fraud prevention systems.",
      icon: Landmark,
      points: ["KYC / AML controls", "API gateways & HSM", "SIEM & fraud rules", "Transaction monitoring"],
    },
    {
      title: "Training & Workshops",
      text: "Professional development through hands-on seminars and certification workshops.",
      icon: BookOpen,
      points: ["Cybersecurity training", "Technical skill development", "Industry certification prep", "Custom curriculum design"],
    },
    {
      title: "Data Analytics",
      text: "Transform raw data into actionable insights for strategic business growth.",
      icon: BarChart3,
      points: ["Business intelligence", "Data visualization", "Predictive analytics", "Real-time dashboards"],
    },
    {
      title: "Networking & Infrastructure",
      text: "Robust network solutions for seamless connectivity and optimal performance.",
      icon: Network,
      points: ["Network design & implementation", "Performance optimization", "Security integration", "SD-WAN solutions"],
    },
    {
      title: "Server Management",
      text: "Comprehensive server solutions for maximum reliability and operational efficiency.",
      icon: Cpu,
      points: ["Server deployment", "Performance monitoring", "Maintenance & support", "Disaster recovery"],
    },
    {
      title: "Cyber Security",
      text: "Comprehensive protection against evolving digital threats and vulnerabilities.",
      icon: ShieldCheck,
      points: ["Threat detection", "Vulnerability assessment", "Incident response", "Security audits"],
    },
    {
      title: "Cloud Solutions",
      text: "Scalable cloud infrastructure and migration services for modern businesses.",
      icon: Cloud,
      points: ["Cloud migration", "Multi-cloud strategy", "Cost optimization", "Cloud security"],
    },
    {
      title: "Database Management",
      text: "Optimized database solutions for performance, security and scalability.",
      icon: Database,
      points: ["Database design", "Performance tuning", "Backup strategies", "Data migration"],
    },
    {
      title: "Mobile Development",
      text: "Secure and responsive mobile applications for iOS and Android platforms.",
      icon: Smartphone,
      points: ["Cross-platform apps", "Mobile security", "API integration", "App store deployment"],
    },
    {
      title: "IT Consulting",
      text: "Strategic technology guidance to align IT with business objectives.",
      icon: Users,
      points: ["Technology assessment", "Digital transformation", "IT strategy", "Vendor selection"],
    },
    {
      title: "Software Development",
      text: "Custom software solutions tailored to your specific business needs.",
      icon: Code,
      points: ["Custom applications", "Web development", "API development", "Agile methodology"],
    },
    {
      title: "DevOps & Automation",
      text: "Streamlined development workflows and automated infrastructure management.",
      icon: Zap,
      points: ["CI/CD pipelines", "Infrastructure as Code", "Containerization", "Monitoring & logging"],
    },
    {
      title: "Compliance & Governance",
      text: "Ensure regulatory compliance and establish robust IT governance frameworks.",
      icon: Shield,
      points: ["GDPR compliance", "ISO 27001", "Risk assessment", "Policy development"],
    },
    {
      title: "Web Security",
      text: "Protect your web applications from modern threats and vulnerabilities.",
      icon: Globe,
      points: ["Web application firewalls", "DDoS protection", "SSL/TLS implementation", "Security headers"],
    },
  ];

  return (
    <section
      className="
        relative isolate text-white
        bg-gradient-to-br from-brand-700 via-brand-700 to-brand-900
        dark:from-gray-800 dark:via-brand-800 dark:to-gray-900
        overflow-hidden
      "
    >
      {/* Background pattern with enhanced design */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 10%, rgba(255,255,255,.25) 0, transparent 45%),
            radial-gradient(ellipse at 80% 90%, rgba(255,255,255,.15) 0, transparent 40%),
            linear-gradient(45deg, transparent 30%, rgba(255,255,255,.05) 50%, transparent 70%)
          `,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container-xl py-16 lg:py-24">
        {/* Header */}
        <div className="max-w-4xl text-center mx-auto">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-100 dark:text-brand-200 bg-white/10 px-4 py-2 rounded-full">
            <ShieldCheck size={16} /> Comprehensive Solutions
          </p>
          <h2 className="mt-4 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-brand-200 bg-clip-text text-transparent">
            Industry Solutions, Security-First Approach
          </h2>
          <p className="mt-4 text-lg text-brand-100 dark:text-brand-200 max-w-2xl mx-auto">
            Tailored delivery aligned to local and international standards, ensuring your business 
            stays protected and competitive in today's digital landscape.
          </p>
        </div>

        {/* Enhanced Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {blocks.map(({ title, text, icon: Icon, points }) => (
            <article
              key={title}
              className="
                group relative rounded-2xl p-6 h-full
                bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl border border-white/15 dark:border-gray-700/50
                shadow-[0_10px_25px_-10px_rgba(0,0,0,.5)]
                transition-all duration-300 hover:translate-y-[-4px] hover:bg-white/15 dark:hover:bg-gray-700/60
                hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,.6)]
                focus-within:ring-2 focus-within:ring-white/40
                overflow-hidden
              "
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white group-hover:bg-white/20 transition-colors duration-300">
                    <Icon size={22} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-white/95">{title}</h3>
                    <p className="mt-2 text-sm text-brand-100 dark:text-brand-200 leading-relaxed">{text}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-brand-50 dark:text-brand-100">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-3 transition-transform duration-200 group-hover:translate-x-1">
                      <span className="h-2 w-2 rounded-full bg-white/60 flex-shrink-0" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="
                    mt-6 inline-flex items-center gap-2 text-sm font-semibold
                    text-white/90 hover:text-white transition-all duration-200
                    group-hover:gap-3
                  "
                  aria-label={`Discuss ${title} solution`}
                >
                  Discuss this solution 
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced CTA strip */}
        <div className="mt-12 rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl relative overflow-hidden">
          {/* CTA background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 to-purple-600/10 opacity-50" />
          
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">Ready to Transform Your Business?</h3>
              <p className="mt-2 text-brand-100 dark:text-brand-200">
                Not sure which solution fits your needs? Our experts will map your requirements to the perfect architecture.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center rounded-xl px-6 py-3
                  bg-white text-brand-900 font-semibold shadow-sm
                  hover:brightness-95 transition-all duration-200 hover:shadow-lg
                  min-w-[160px]
                "
              >
                Book Free Consultation
              </a>
              <a
                href="#solutions"
                className="
                  inline-flex items-center justify-center rounded-xl px-6 py-3
                  border border-white/30 text-white font-semibold
                  hover:bg-white/10 transition-all duration-200
                  min-w-[140px]
                "
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}