import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock, User, Building, MessageCircle } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    message: "",
    service: ""
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
    "Surveillance Systems"
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      alert("Thanks! We received your message and will reply within one business day.");
      setForm({ name: "", email: "", company: "", message: "", service: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0, 87, 255, 0.2) 2%, transparent 0%),
                          radial-gradient(circle at 75px 75px, rgba(255, 0, 128, 0.2) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container-xl py-20 lg:py-28">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-4">
            <ShieldCheck size={16} />
            Get in Touch
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-brand-700 bg-clip-text text-transparent mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your business? Reach out and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                  <Phone size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                  <div className="space-y-1">
                    <a href="tel:+252634745339" className="block text-lg font-bold text-gray-700 hover:text-brand-600 transition-colors group-hover:translate-x-1 transform duration-200">
                      +252 634745339
                    </a>
                    <a href="tel:+251991927628" className="block text-lg font-bold text-gray-700 hover:text-brand-600 transition-colors group-hover:translate-x-1 transform duration-200">
                      +251 991927628
                    </a>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                    <Clock size={14} />
                    Mon–Fri, 9:00–18:00
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/25">
                  <Mail size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Email Us</p>
                  <div className="space-y-1">
                    <a href="mailto:info@yollatec.com" className="block text-lg font-bold text-gray-700 hover:text-brand-600 transition-colors group-hover:translate-x-1 transform duration-200">
                      info@yollatec.com
                    </a>
                    <a href="mailto:support@yollatec.com" className="block text-lg font-bold text-gray-700 hover:text-brand-600 transition-colors group-hover:translate-x-1 transform duration-200">
                      support@yollatec.com
                    </a>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    We reply within 1 business day
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/25">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Our Locations</p>
                  <div className="space-y-2">
                    <p className="text-lg font-bold text-gray-700 group-hover:translate-x-1 transform duration-200">
                      Hargeisa, Somaliland
                    </p>
                    <p className="text-lg font-bold text-gray-700 group-hover:translate-x-1 transform duration-200">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    Visit by appointment
                  </div>
                </div>
              </div>
            </div>

            {/* Security Note */}
            <div className="bg-gradient-to-r from-brand-50 to-blue-50 rounded-3xl p-6 border border-brand-100">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="font-semibold">Your privacy is our priority.</strong> All messages are encrypted in transit and handled exclusively by our certified security team.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <User size={16} />
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 bg-gray-50/50"
                      placeholder="Enter your full name"
                      autoComplete="name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 bg-gray-50/50"
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <Building size={16} />
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 bg-gray-50/50"
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <MessageCircle size={16} />
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 bg-gray-50/50"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <MessageCircle size={16} />
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 bg-gray-50/50 resize-none"
                    placeholder="Tell us about your project, challenges, or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-lg disabled:hover:shadow-brand-500/25 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                <div className="text-center text-sm text-gray-500">
                  Prefer direct email? Write to{" "}
                  <a href="mailto:info@yollatec.com" className="text-brand-600 font-semibold hover:underline">
                    info@yollatec.com
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}