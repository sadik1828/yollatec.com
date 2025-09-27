import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import { Check, ArrowLeft, Mail } from "lucide-react";

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = services.find((s) => s.slug === slug);

  if (!svc) {
    return (
      <section className="container-xl py-16">
        <p className="text-gray-600">Service not found.</p>
        <Link to="/services" className="text-brand-700 font-medium mt-4 inline-flex items-center">
          <ArrowLeft size={16} className="mr-1" /> Back to Services
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="container-xl py-10">
        <Link to="/services" className="inline-flex items-center text-sm text-brand-700">
          <ArrowLeft size={16} className="mr-1" /> Back to Services
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-6 items-start">
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold">{svc.title}</h1>
            <p className="mt-2 text-gray-600">{svc.summary}</p>
            <img
              src={svc.heroImage}
              alt={svc.title}
              className="mt-6 w-full h-72 object-cover rounded-xl border shadow-sm"
              loading="lazy"
            />

            <h3 className="mt-8 font-semibold">What we deliver</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {svc.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check size={16} className="text-brand-700 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-semibold">Categories</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {svc.categories.map((c) => (
                <span key={c} className="text-xs px-3 py-1 rounded-full border bg-white">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-xl border bg-white shadow-sm p-6">
              <h3 className="text-lg font-semibold">Pricing</h3>
              <p className="text-xs text-gray-500">
                Prices are indicative; final quotes depend on scope and environment.
              </p>

              <div className="mt-4 space-y-4">
                {svc.pricing.map((p) => (
                  <div key={p.tier} className="rounded-lg border p-4">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-semibold">{p.tier}</h4>
                      <span className="text-brand-700 font-semibold">{p.price}</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-gray-700">
                      {p.includes.map((i) => (
                        <li key={i} className="flex gap-2">
                          <Check size={16} className="text-brand-700 shrink-0 mt-0.5" /> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-6 w-full btn-primary inline-flex justify-center"
              >
                <Mail size={16} className="mr-2" /> Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
