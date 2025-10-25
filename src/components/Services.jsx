// components/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import {
  ShieldCheck,
  Code,
  Server,
  Camera,
  Megaphone,
  Users,
  BookOpen,
  BarChart3,
  Cpu,
  Target,
  Search,
  FileCheck,
  Network,
  Zap,
  Settings,
} from "lucide-react";

const iconMap = {
  "network-design-implementation": Network,
  "rack-installation-cabling": Server,
  "iot-smart-systems": Cpu,
  "solar-power-systems": Zap,
  "electrical-installation": Settings,
  "cybersecurity": ShieldCheck,
  "software-development": Code,
  "network-infrastructure": Server,
  "digital-marketing": Megaphone,
  "surveillance": Camera,
  "training-seminars": BookOpen,
  "data-analytics": BarChart3,
  "server-management": Cpu,
  "penetration-testing": Target,
  "vulnerability-management": Search,
  "security-training": FileCheck,
};

const colorMap = {
  "network-design-implementation": "bg-gradient-to-br from-blue-500 to-blue-600 text-white",
  "rack-installation-cabling": "bg-gradient-to-br from-gray-500 to-gray-600 text-white",
  "iot-smart-systems": "bg-gradient-to-br from-purple-500 to-purple-600 text-white",
  "solar-power-systems": "bg-gradient-to-br from-yellow-500 to-yellow-600 text-white",
  "electrical-installation": "bg-gradient-to-br from-orange-500 to-orange-600 text-white",
  "cybersecurity": "bg-gradient-to-br from-rose-500 to-rose-600 text-white",
  "software-development": "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white",
  "network-infrastructure": "bg-gradient-to-br from-blue-500 to-blue-600 text-white",
  "digital-marketing": "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white",
  "surveillance": "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white",
  "training-seminars": "bg-gradient-to-br from-amber-500 to-amber-600 text-white",
  "data-analytics": "bg-gradient-to-br from-teal-500 to-teal-600 text-white",
  "server-management": "bg-gradient-to-br from-slate-500 to-slate-600 text-white",
  "penetration-testing": "bg-gradient-to-br from-red-500 to-red-600 text-white",
  "vulnerability-management": "bg-gradient-to-br from-purple-500 to-purple-600 text-white",
  "security-training": "bg-gradient-to-br from-green-500 to-green-600 text-white",
};

export default function Services() {
  const items = [
    services.find((s) => s.slug === "network-design-implementation"),
    services.find((s) => s.slug === "iot-smart-systems"),
    services.find((s) => s.slug === "solar-power-systems"),
    services.find((s) => s.slug === "cybersecurity"),
    services.find((s) => s.slug === "software-development"),
    services.find((s) => s.slug === "electrical-installation"),
  ].filter(Boolean);

  return (
    <section className="container-xl py-14">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-brand-700 dark:from-white dark:to-brand-400 bg-clip-text text-transparent mb-4">
          Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          From cybersecurity to custom software development and comprehensive training solutions.
        </p>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Expertise</h2>
        <Link
          to="/services"
          className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md transition-all duration-200"
        >
          View all services
        </Link>
      </div>

      {/* Services Grid */}
      <div className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8 md:p-10">
          {items.map((svc) => {
            const Icon = iconMap[svc.slug] ?? ShieldCheck;
            const colors = colorMap[svc.slug] ?? "bg-gray-800 text-white";
            return (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="group rounded-3xl bg-white dark:bg-gray-800 ring-1 ring-gray-100 dark:ring-gray-700 hover:ring-2 hover:ring-brand-200 dark:hover:ring-brand-600 shadow-sm hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  {/* Colorful icon container */}
                  <div
                    className={`h-14 w-14 shrink-0 rounded-2xl grid place-items-center ${colors} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={24} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {svc.summary}
                    </p>

                    {/* Enhanced link affordance */}
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">
                      <span>Learn more</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-brand-50 to-blue-50 dark:from-brand-900/20 dark:to-blue-900/20 rounded-3xl p-8 border border-brand-100 dark:border-brand-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We specialize in tailoring our services to meet your specific business requirements. 
            Whether you need a unique combination of services or a completely custom solution, we're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-200"
          >
            Get Custom Quote
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}