// components/Hero.jsx
import React from "react";
import { Mail, Phone, ShieldCheck, Server, Cpu, Cable, Zap, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-brand-400/20 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-blue-400/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-purple-400/20 rounded-full"></div>
      </div>

      <div className="container-xl py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Tagline */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse"></div>
              <ShieldCheck size={16} className="text-gradient-to-r from-emerald-600 to-cyan-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
                Trusted & Comprehensive IT Services
              </span>
            </div>
          </div>

          {/* Main Heading - Single Color */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
              Secure your business. Scale with confidence.
            </span>
          </h1>

          {/* Enhanced Description with Beautiful Typography */}
          <div className="space-y-4">
            <p className="text-xl lg:text-2xl leading-relaxed font-light text-gray-700 dark:text-gray-300">
              At <span className="font-semibold text-gray-900 dark:text-white">Yollatec.com</span>, we deliver
              all-inclusive <span className="font-semibold text-gray-900 dark:text-white">end-to-end IT solutions</span> that help organizations thrive in
              the digital era.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed font-light text-gray-700 dark:text-gray-300">
              From <span className="font-medium text-gray-900 dark:text-white">robust cloud and network infrastructure</span>,
              <span className="font-medium text-gray-900 dark:text-white"> custom software engineering</span>, and
              <span className="font-medium text-gray-900 dark:text-white"> advanced data management</span> to
              <span className="font-medium text-gray-900 dark:text-white"> 24/7 security and operations</span>,
              <span className="font-medium text-gray-900 dark:text-white"> solar systems installation</span>,
              <span className="font-medium text-gray-900 dark:text-white"> server racks and cabling</span>,
              <span className="font-medium text-gray-900 dark:text-white"> Internet of Things (IoT)</span>, and
              <span className="font-medium text-gray-900 dark:text-white"> comprehensive electrical installations</span> —
              we design <span className="font-semibold text-gray-900 dark:text-white">secure</span>,
              <span className="font-semibold text-gray-900 dark:text-white"> scalable</span>, and
              <span className="font-semibold text-gray-900 dark:text-white"> reliable systems</span> tailored to your business ambitions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="group relative bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <Mail size={20} className="relative z-10" />
              <span className="relative z-10">Get a Free Consultation</span>
            </Link>
            <Link to="/services" className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 font-semibold py-4 px-8 rounded-2xl hover:border-brand-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-blue-600 dark:group-hover:from-brand-400 dark:group-hover:to-blue-400 transition-all duration-300">
                Our Services
              </span>
              <Phone size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300" />
            </Link>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">ISO 27001 Ready</p>
                <p className="text-sm bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-400 dark:to-gray-300 bg-clip-text text-transparent">Policies & Audit Support</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                <Server size={20} />
              </div>
              <div>
                <p className="font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">24/7 Monitoring</p>
                <p className="text-sm bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-400 dark:to-gray-300 bg-clip-text text-transparent">SOC as a Service</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                <Cable size={20} />
              </div>
              <div>
                <p className="font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Infrastructure</p>
                <p className="text-sm bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-400 dark:to-gray-300 bg-clip-text text-transparent">Racks & Cabling</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                <Zap size={20} />
              </div>
              <div>
                <p className="font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Energy Solutions</p>
                <p className="text-sm bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-400 dark:to-gray-300 bg-clip-text text-transparent">Solar & Electrical</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Single Image Layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Technology Image Only */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/20 dark:shadow-black/30 group">
            <img
              className="w-full h-96 object-cover img-cover-full group-hover:scale-105 transition-transform duration-500"
              src="https://cdn-ialap.nitrocdn.com/bSxMvRMJjpvESeBpWPWSavCeSWXQHFjk/assets/images/optimized/rev-4f86c40/www.zucisystems.com/wp-content/uploads/2021/07/icon-internet-world-hands-businessman-network-technology-communication-scaled.jpg"
              alt="Global technology network and digital transformation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl px-3 py-2">
                <Cpu size={16} className="text-brand-600 dark:text-brand-400" />
                <span className="text-sm font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Digital Innovation</span>
              </div>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-left p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-2">
                <ShieldCheck size={16} />
              </div>
              <p className="text-xs font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">Security</p>
            </div>
            <div className="text-left p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-2">
                <Server size={16} />
              </div>
              <p className="text-xs font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">Infrastructure</p>
            </div>
            <div className="text-left p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-2">
                <Wifi size={16} />
              </div>
              <p className="text-xs font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">Networking</p>
            </div>
          </div>
        </motion.div>
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