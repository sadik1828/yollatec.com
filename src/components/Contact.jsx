// components/Contact.jsx
import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ShieldCheck, 
  Clock, 
  User, 
  Building, 
  MessageCircle,
  Star,
  Navigation,
  ExternalLink
} from "lucide-react";

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

  // WhatsApp API function
  const sendWhatsAppMessage = () => {
    const phoneNumber = "252634745339";
    const message = `Hello Yollatec! I'm interested in your services and would like to get more information.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Location functions
  const openLocation = (location) => {
    let mapsUrl = '';
    if (location === 'hargeisa') {
      mapsUrl = 'https://www.google.com/maps?q=9.5612325,44.0593537&hl=en';
    }
    if (mapsUrl) window.open(mapsUrl, '_blank');
  };

  // Get directions function
  const getDirections = (location) => {
    let destination = '';
    if (location === 'hargeisa') {
      destination = '9.5612325,44.0593537';
    }
    if (destination) {
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
      window.open(directionsUrl, '_blank');
    }
  };

  // Get current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=en`;
          window.open(mapsUrl, '_blank');
        },
        (error) => {
          alert('Unable to retrieve your location. Please ensure location services are enabled.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-brand-400/20 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-blue-400/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-purple-400/20 rounded-full"></div>
      </div>

      <div className="container-xl py-20 lg:py-28 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
              <ShieldCheck size={18} className="text-brand-600 dark:text-brand-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Get in Touch
              </span>
            </div>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-brand-700 to-blue-700 dark:from-white dark:via-brand-400 dark:to-blue-400 bg-clip-text text-transparent mb-6 leading-tight">
            Let's Start
            <span className="block bg-gradient-to-r from-brand-600 to-blue-600 dark:from-brand-400 dark:to-blue-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your digital landscape? Share your vision and let's craft 
            <span className="font-semibold text-brand-600 dark:text-brand-400"> innovative solutions </span>
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Enhanced Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Premium Contact Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Accent Gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-blue-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/25">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Multiple ways to connect</p>
                  </div>
                </div>

                {/* WhatsApp Button - Enhanced */}
                <div className="mb-8">
                  <button
                    onClick={sendWhatsAppMessage}
                    className="w-full group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 overflow-hidden animate-pulse hover:animate-none"
                  >
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    <svg className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.464"/>
                    </svg>
                    <span className="relative z-10">Message on WhatsApp</span>
                    <ExternalLink size={16} className="relative z-10 opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 group border border-transparent hover:border-gray-200 dark:hover:border-gray-600">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                      <Phone size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        Call Us
                        <Star size={14} className="text-yellow-500 fill-current" />
                      </p>
                      <div className="space-y-1">
                        <a href="tel:+252634745339" className="block text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group-hover:translate-x-2 transform duration-300">
                          +252 634745339
                        </a>
                        <a href="tel:+251991927628" className="block text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group-hover:translate-x-2 transform duration-300">
                          +251 991927628
                        </a>
                      </div>
                      <div className="flex items-center gap-2 mt-3 text-sm text-gray-500 dark:text-gray-400">
                        <Clock size={14} />
                        Mon–Fri, 9:00–18:00
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 group border border-transparent hover:border-gray-200 dark:hover:border-gray-600">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</p>
                      <div className="space-y-1">
                        <a href="mailto:info@yollatec.com" className="block text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group-hover:translate-x-2 transform duration-300">
                          info@yollatec.com
                        </a>
                        <a href="mailto:support@yollatec.com" className="block text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group-hover:translate-x-2 transform duration-300">
                          support@yollatec.com
                        </a>
                      </div>
                      <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        We reply within 1 business day
                      </div>
                    </div>
                  </div>
                </div>

                {/* Locations Section */}
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                    <Navigation size={18} />
                    Our Office
                  </h4>

                  {/* Hargeisa Office */}
                  <div className="group relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-4 border border-purple-100 dark:border-purple-800/30 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/25">
                        <MapPin size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Main Office</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Hargeisa, Somaliland</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">9.5612325, 44.0593537</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => openLocation('hargeisa')}
                        className="flex-1 text-center py-2 px-3 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600"
                      >
                        View Map
                      </button>
                      <button
                        onClick={() => getDirections('hargeisa')}
                        className="flex-1 text-center py-2 px-3 rounded-xl bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/25"
                      >
                        Directions
                      </button>
                    </div>
                  </div>

                  {/* Current Location Button */}
                  <button
                    onClick={getCurrentLocation}
                    className="w-full group flex items-center justify-center gap-3 py-3 px-4 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-brand-400 hover:text-brand-600 dark:hover:border-brand-500 dark:hover:text-brand-400 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 hover:bg-brand-50 dark:hover:bg-brand-900/20"
                  >
                    <MapPin size={18} />
                    <span>Find My Location</span>
                    <Navigation size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-500/5 to-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/5 to-cyan-500/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/25">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h3>
                      <p className="text-gray-600 dark:text-gray-300">We'll get back to you within 24 hours</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <User size={16} className="text-brand-500" />
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-gray-200 dark:border-gray-600 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 bg-white/50 dark:bg-gray-700/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                        placeholder="Enter your full name"
                        autoComplete="name"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <Mail size={16} className="text-brand-500" />
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-gray-200 dark:border-gray-600 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 bg-white/50 dark:bg-gray-700/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                        placeholder="you@company.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="company" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <Building size={16} className="text-brand-500" />
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-gray-200 dark:border-gray-600 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 bg-white/50 dark:bg-gray-700/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                        placeholder="Company name"
                        autoComplete="organization"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="service" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <MessageCircle size={16} className="text-brand-500" />
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-gray-200 dark:border-gray-600 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 bg-white/50 dark:bg-gray-700/50 dark:text-white shadow-sm appearance-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <MessageCircle size={16} className="text-brand-500" />
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-gray-200 dark:border-gray-600 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 bg-white/50 dark:bg-gray-700/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm resize-none"
                      placeholder="Tell us about your project, challenges, or how we can help you achieve your goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group relative bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-700 hover:to-blue-700 text-white font-semibold py-5 px-6 rounded-2xl shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-lg flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10" />
                        <span className="relative z-10">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="relative z-10" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                    Prefer direct email? Write to{" "}
                    <a href="mailto:info@yollatec.com" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline transition-colors">
                      info@yollatec.com
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}