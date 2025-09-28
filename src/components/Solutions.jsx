// Solutions.jsx
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
} from "lucide-react";

export default function Solutions() {
  const blocks = [
    {
      title: "Education",
      text: "Secure school management, student privacy and resilient e-learning.",
      icon: GraduationCap,
      points: ["Student data protection", "SIS/LMS integration", "Zero-trust access"],
    },
    {
      title: "Hospitality",
      text: "PMS integrations, payment security and guest data protection.",
      icon: Hotel,
      points: ["PMS / POS APIs", "PCI-aware payments", "Guest Wi-Fi security"],
    },
    {
      title: "Finance",
      text: "Regulatory compliance, secure APIs & fraud prevention.",
      icon: Landmark,
      points: ["KYC / AML controls", "API gateways & HSM", "SIEM & fraud rules"],
    },
    {
      title: "Training & Workshops",
      text: "Professional development through hands-on seminars and workshops.",
      icon: BookOpen,
      points: ["Cybersecurity training", "Technical skill development", "Industry certification prep"],
    },
    {
      title: "Data Analytics",
      text: "Transform data into actionable insights for business growth.",
      icon: BarChart3,
      points: ["Business intelligence", "Data visualization", "Predictive analytics"],
    },
    {
      title: "Networking & Infrastructure",
      text: "Robust network solutions for seamless connectivity and performance.",
      icon: Network,
      points: ["Network design & implementation", "Performance optimization", "Security integration"],
    },
    {
      title: "Server Management",
      text: "Comprehensive server solutions for reliability and efficiency.",
      icon: Cpu,
      points: ["Server deployment", "Performance monitoring", "Maintenance & support"],
    },
    {
      title: "Cyber Security",
      text: "Comprehensive protection against evolving digital threats.",
      icon: ShieldCheck,
      points: ["Threat detection", "Vulnerability assessment", "Incident response"],
    },
  ];

  return (
    <section
      className="
        relative isolate text-white
        bg-gradient-to-br from-brand-700 via-brand-700 to-brand-900
      "
    >
      {/* subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 10%, rgba(255,255,255,.25) 0, transparent 45%), radial-gradient(ellipse at 80% 90%, rgba(255,255,255,.15) 0, transparent 40%)",
        }}
      />

      <div className="container-xl py-16 lg:py-24">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-100">
            <ShieldCheck size={16} /> Solutions
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight">
            Industry solutions, security-first.
          </h2>
          <p className="mt-3 text-brand-100">
            Tailored delivery aligned to local and international standards.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {blocks.map(({ title, text, icon: Icon, points }) => (
            <article
              key={title}
              className="
                group rounded-2xl p-5 h-full
                bg-white/10 backdrop-blur border border-white/15
                shadow-[0_10px_25px_-10px_rgba(0,0,0,.5)]
                transition hover:translate-y-[-2px] hover:bg-white/12
                focus-within:ring-2 focus-within:ring-white/40
              "
            >
              <div className="flex items-start gap-3">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-brand-100">{text}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-brand-50">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="
                  mt-5 inline-flex items-center gap-2 text-sm font-medium
                  text-white/90 hover:text-white
                "
                aria-label={`Discuss ${title} solution`}
              >
                Discuss this solution <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-brand-100">
              Not sure which track fits? We'll map requirements to the best architecture.
            </p>
            <a
              href="#contact"
              className="
                inline-flex items-center justify-center rounded-xl px-4 py-2
                bg-white text-brand-900 font-semibold shadow-sm
                hover:brightness-95
              "
            >
              Book a free consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}