import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import {
  ShieldCheck,
  Cloud,
  Code,
  Server,
  Camera,
  Megaphone,
  Users,
} from "lucide-react";

const iconMap = {
  "network-infrastructure": Server,
  "software-development": Code,
  cybersecurity: ShieldCheck,
  "it-management": Server,
  consultation: Users,
  "digital-marketing": Megaphone,
  surveillance: Camera,
  "cloud-management": Cloud,
};

// brand color blocks per service (adjust to taste)
const colorMap = {
  "network-infrastructure":
    "bg-gradient-to-br from-blue-500 to-blue-600 text-white",
  "software-development":
    "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white",
  cybersecurity: "bg-gradient-to-br from-rose-500 to-rose-600 text-white",
  "it-management": "bg-gradient-to-br from-violet-500 to-violet-600 text-white",
  consultation: "bg-gradient-to-br from-orange-500 to-orange-600 text-white",
  "digital-marketing":
    "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white",
  surveillance: "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white",
  "cloud-management": "bg-gradient-to-br from-sky-500 to-sky-600 text-white",
};

export default function Services() {
  // choose 6 to match the 2x3 vibe (reorder if you like)
  const items = [
    services.find((s) => s.slug === "network-infrastructure"),
    services.find((s) => s.slug === "software-development"),
    services.find((s) => s.slug === "cybersecurity"),
    services.find((s) => s.slug === "consultation"), // acts like IT Management / IT Consultancy
    services.find((s) => s.slug === "surveillance"),
    services.find((s) => s.slug === "digital-marketing"),
  ].filter(Boolean);

  return (
    <section className="container-xl py-14">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Services</h2>
        <Link
          to="/services"
          className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
        >
          View all
        </Link>
      </div>

      {/* Big rounded panel */}
      <div className="rounded-[28px] border shadow-sm bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 md:p-8">
          {items.map((svc) => {
            const Icon = iconMap[svc.slug] ?? ShieldCheck;
            const colors = colorMap[svc.slug] ?? "bg-gray-800 text-white";
            return (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="group rounded-2xl bg-white/60 ring-1 ring-gray-100 hover:ring-gray-200 shadow-[0_1px_0_#eef] hover:shadow-md p-5 transition"
              >
                <div className="flex items-start gap-4">
                  {/* colorful icon pill */}
                  <div
                    className={`h-12 w-12 shrink-0 rounded-2xl grid place-items-center ${colors} shadow-sm`}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      {svc.summary}
                    </p>

                    {/* subtle link affordance */}
                    <span className="mt-3 inline-block text-sm font-medium text-brand-700 group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
