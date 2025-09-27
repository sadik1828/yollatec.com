import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white">
      <div className="container-xl py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: Copy + Contact cards */}
        <div>
          <p className="text-sm font-semibold text-brand-700">Contact Yollatec</p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight">
            Let’s talk about your project
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Book a free consultation to see how we can secure and modernize your business.
          </p>

          <div className="mt-8 space-y-5">
            {/* Phones */}
            <div className="flex items-start gap-4">
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Phone size={20} />
              </span>
              <div>
                <a
                  href="tel:+252634745339"
                  className="block text-lg font-semibold hover:underline"
                >
                  +252 634745339
                </a>
                <a
                  href="tel:+251991927628"
                  className="block text-lg font-semibold hover:underline"
                >
                  +251 991927628
                </a>
                <p className="mt-1 text-sm text-gray-500">Mon–Fri, 9:00–18:00</p>
              </div>
            </div>

            {/* Emails */}
            <div className="flex items-start gap-4">
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Mail size={20} />
              </span>
              <div>
                <a
                  href="mailto:info@yollatec.com"
                  className="block text-lg font-semibold hover:underline"
                >
                  info@yollatec.com
                </a>
                <a
                  href="mailto:support@yollatec.com"
                  className="block text-lg font-semibold hover:underline"
                >
                  support@yollatec.com
                </a>
                <p className="mt-1 text-sm text-gray-500">We reply within 1 business day</p>
              </div>
            </div>

            {/* Locations */}
            <div className="flex items-start gap-4">
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-lg font-semibold">Hargeisa, Somaliland</p>
                <p className="text-lg font-semibold">Addis Ababa, Ethiopia</p>
                <p className="mt-1 text-sm text-gray-500">Visit by appointment</p>
              </div>
            </div>
          </div>

          {/* Small reassurance line */}
          <div className="mt-8 rounded-xl border bg-gradient-to-r from-brand-50/70 to-white p-4 text-sm text-gray-600">
            We take security seriously — messages are encrypted in transit and handled by a trained team.
          </div>
        </div>

        {/* RIGHT: Form panel */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border bg-gray-50 p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold">Send us a message</h3>
          <p className="mt-1 text-sm text-gray-600">
            Tell us a little about your goals. We’ll get back to you within one business day.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Full name</label>
              <input
                required
                className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                placeholder="Jane Doe"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                required
                className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                placeholder="you@company.com"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Company (optional)</label>
              <input
                className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                placeholder="Company name"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">How can we help?</label>
              <textarea
                rows="5"
                className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                placeholder="Briefly describe your project or challenges…"
              />
            </div>
          </div>

          <button className="mt-5 btn-primary inline-flex items-center">
            <Send size={16} className="mr-2" />
            Send Message
          </button>

          {/* Quick alternatives */}
          <div className="mt-4 text-xs text-gray-500">
            Prefer email? Write to{" "}
            <a href="mailto:info@yollatec.com" className="text-brand-700 underline">
              info@yollatec.com
            </a>
            .
          </div>
        </form>
      </div>
    </section>
  );
}
