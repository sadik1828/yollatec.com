// Simplified, more professional, but not drastically different Contact component
// Tailwind + lucide-react, cleaner UI, less decorative effects

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building,
  MessageCircle,
  Navigation,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  });

  const services = [
    "Network Infrastructure",
    "Software Development",
    "Cyber Security",
    "Training & Workshops",
    "Data Analytics",
    "Server Management",
    "IT Consultation",
    "Digital Marketing",
    "Surveillance Systems",
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      alert("Thanks! We've received your message.");
      setForm({ name: "", email: "", company: "", message: "", service: "" });
    } finally {
      setLoading(false);
    }
  };

  const sendWhatsAppMessage = () => {
    const url = `https://wa.me/252634745339?text=${encodeURIComponent(
      "Hello Yollatec! I’d like more information about your services."
    )}`;
    window.open(url, "_blank");
  };

  const openLocation = () => {
    window.open(`https://www.google.com/maps?q=9.5612325,44.0593537`, "_blank");
  };

  const getDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=9.5612325,44.0593537`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="contact">
      <div className="container-xl mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're here to help. Reach out and our team will get back to you
            shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Phone size={18} /> Call Us
              </h3>
              <div className="space-y-1">
                <a
                  href="tel:+252634745339"
                  className="block text-gray-700 dark:text-gray-300 font-medium"
                >
                  +252 634745339
                </a>
                <a
                  href="tel:+251991927628"
                  className="block text-gray-700 dark:text-gray-300 font-medium"
                >
                  +251 991927628
                </a>
              </div>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Mail size={18} /> Email
              </h3>
              <div className="space-y-1">
                <a
                  href="mailto:info@yollatec.com"
                  className="block text-gray-700 dark:text-gray-300 font-medium"
                >
                  info@yollatec.com
                </a>
                <a
                  href="mailto:support@yollatec.com"
                  className="block text-gray-700 dark:text-gray-300 font-medium"
                >
                  support@yollatec.com
                </a>
              </div>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin size={18} /> Office Location
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Hargeisa, Somaliland
              </p>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={openLocation}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700  text-sm"
                >
                  View Map
                </button>
                <button
                  onClick={getDirections}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm"
                >
                  Get Directions
                </button>
              </div>
            </div>

            <button
              onClick={sendWhatsAppMessage}
              className="w-full py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700"
            >
              Message on WhatsApp
            </button>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Send size={20} /> Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl  px-4 py-3 bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl  px-4 py-3 bg-white dark:bg-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl  px-4 py-3 bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl  px-4 py-3 bg-white dark:bg-gray-700"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl  px-4 py-3 bg-white dark:bg-gray-700 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4">
                Prefer email? Write to
                <a
                  href="mailto:info@yollatec.com"
                  className="text-blue-600 ml-1"
                >
                  info@yollatec.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
