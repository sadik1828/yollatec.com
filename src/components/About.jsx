import React from "react";
import { ShieldCheck, Users, Rocket, Award, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section className="container-xl py-20">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
          <ShieldCheck size={16} /> About Yollatec.com
        </p>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight">
          Security-led technology.{" "}
          <span className="text-brand-700">Built for outcomes.</span>
        </h2>
        <p className="mt-4 text-gray-600">
          We are a security-first technology partner delivering cybersecurity,
          cloud, software, and network solutions. Our team brings deep hands-on
          expertise and globally recognized certifications to design systems
          that are{" "}
          <span className="font-medium">
            secure, scalable, and reliable
          </span>
          .
        </p>
      </div>

      {/* Content */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Values + Certifications */}
        <div className="space-y-6">
          {/* Value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-lg bg-brand-50 text-brand-700">
                  <Rocket size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">Security-First Delivery</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Secure-by-design practices across every project and stack.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-lg bg-brand-50 text-brand-700">
                  <HeartHandshake size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">Partnership & Enablement</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Workshops, documentation, and training so your team
                    succeeds.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-lg bg-brand-50 text-brand-700">
                  <Award size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">Standards-Aligned</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Guided by ISO/IEC best practices and proven reference
                    architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-lg bg-brand-50 text-brand-700">
                  <Users size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">Measured Outcomes</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Clear KPIs, post-implementation reviews, and continuous
                    improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications badge strip */}
          <div className="rounded-2xl border bg-gradient-to-br from-brand-50/80 to-white p-5">
            <p className="text-sm font-semibold text-brand-700">
              Team Certifications
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs">
              {[
                "CISSP",
                "OSCP",
                "OSWE",
                "BSCP",
                "ISO 27001 Lead Implementer",
              ].map((cert) => (
                <li
                  key={cert}
                  className="rounded-full border bg-white px-3 py-1 text-gray-700 shadow-sm"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Image + Stats */}
        <div>
          <div className="rounded-3xl overflow-hidden shadow-lg ring-1 ring-gray-100">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              alt="Yollatec team collaborating"
              className="h-80 w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-5 text-center border shadow-sm">
              <p className="text-3xl font-extrabold tracking-tight">+5</p>
              <p className="mt-1 text-xs text-gray-500">Years Experience</p>
            </div>
            <div className="rounded-xl bg-white p-5 text-center border shadow-sm">
              <p className="text-3xl font-extrabold tracking-tight">100+</p>
              <p className="mt-1 text-xs text-gray-500">Projects Delivered</p>
            </div>
            <div className="rounded-xl bg-white p-5 text-center border shadow-sm">
              <p className="text-3xl font-extrabold tracking-tight">24/7</p>
              <p className="mt-1 text-xs text-gray-500">
                Support Availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
