import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      // TODO: connect to your API / form endpoint
      await new Promise((r) => setTimeout(r, 800));
      alert("Thanks! We received your message and will reply within one business day.");
      setForm({ name: "", email: "", company: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-white">
      {/* background tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/40 to-white" />

      <div className="container-xl py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Copy + block cards */}
        <div>
          <p className="text-sm font-semibold text-brand-700 flex items-center gap-2">
            <ShieldCheck size={16} /> Contact Yollatec
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight">
            Let’s talk about your project
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Book a free consultation to see how we can secure and modernize your business.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5">
            {/* Phone card */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Phone size={20} />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Call us</p>
                  <div className="mt-1 grid gap-1 text-gray-900">
                    <a href="tel:+252634745339" className="text-lg font-semibold hover:underline">
                      +252 634745339
                    </a>
                    <a href="tel:+251991927628" className="text-lg font-semibold hover:underline">
                      +251 991927628
                    </a>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
                    <Clock size={14} /> Mon–Fri, 9:00–18:00
                  </div>
                </div>
              </div>
            </div>

            {/* Email card */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Mail size={20} />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Email</p>
                  <div className="mt-1 grid gap-1">
                    <a href="mailto:info@yollatec.com" className="text-lg font-semibold hover:underline">
                      info@yollatec.com
                    </a>
                    <a href="mailto:support@yollatec.com" className="text-lg font-semibold hover:underline">
                      support@yollatec.com
                    </a>
                  </div>
                  <p className="mt-3 inline-block rounded-xl bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
                    We reply within 1 business day
                  </p>
                </div>
              </div>
            </div>

            {/* Locations card */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <MapPin size={20} />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Locations</p>
                  <p className="mt-2 text-lg font-semibold">Hargeisa, Somaliland</p>
                  <p className="text-lg font-semibold">Addis Ababa, Ethiopia</p>
                  <p className="mt-3 inline-block rounded-xl bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
                    Visit by appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Security note */}
            <div className="rounded-2xl bg-gradient-to-r from-brand-50/70 to-white p-4 ring-1 ring-brand-100 text-sm text-gray-700">
              We take security seriously — messages are encrypted in transit and handled by a trained team.
            </div>
          </div>
        </div>

        {/* RIGHT: Form as blocks */}
        <div className="space-y-6">
          {/* Block 1: Your details */}
          <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Your details</h3>
              <span className="text-xs text-gray-500">Step 1 of 2</span>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl border px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl border px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Company (optional)
                </label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="rounded-xl border px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                  placeholder="Company name"
                  autoComplete="organization"
                />
              </div>
            </div>
          </div>

          {/* Block 2: Project details + submit */}
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Project details</h3>
              <span className="text-xs text-gray-500">Step 2 of 2</span>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
                className="rounded-xl border px-3 py-3 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                placeholder="Briefly describe your project or challenges…"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-5 btn-primary inline-flex items-center rounded-2xl px-5 py-3"
            >
              <Send size={16} className="mr-2" />
              {loading ? "Sending…" : "Send Message"}
            </button>

            <div className="mt-4 text-xs text-gray-500">
              Prefer email? Write to{" "}
              <a href="mailto:info@yollatec.com" className="text-brand-700 underline">
                info@yollatec.com
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
