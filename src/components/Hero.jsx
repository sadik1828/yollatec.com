import {
  Mail,
  Phone,
  ShieldCheck,
  Server,
  Cable,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 flex items-center" id="home">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-xl py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300/50 dark:border-gray-700/50">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Trusted Technology Partner
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Technology Solutions That Work
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We build secure, reliable systems that help your business grow. From networks to software, we make technology work for you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2 justify-center"
            >
              <Mail size={18} />
              Start a Project
            </Link>

            <Link
              to="/solutions"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 font-medium py-3 px-8 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 flex items-center gap-2 justify-center text-gray-900 dark:text-white"
            >
              Our Services
              <Phone size={18} />
            </Link>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Security First
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Protected systems
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Server size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Always On
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  24/7 monitoring
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white">
                <Cable size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Infrastructure
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Networks & cabling
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white">
                <Zap size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Energy Solutions
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Solar & power
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SVG Illustration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg">
            <svg 
              viewBox="0 0 400 400" 
              className="w-full h-auto"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle cx="200" cy="200" r="180" fill="url(#gradient)" opacity="0.1"/>
              
              {/* Main Server/Cloud Structure */}
              <rect x="120" y="140" width="160" height="80" rx="8" className="fill-blue-200 dark:fill-blue-900/30 stroke-blue-400 dark:stroke-blue-600" strokeWidth="2"/>
              
              {/* Server Racks */}
              <rect x="130" y="150" width="20" height="60" rx="2" className="fill-blue-300 dark:fill-blue-800/40"/>
              <rect x="160" y="150" width="20" height="60" rx="2" className="fill-blue-300 dark:fill-blue-800/40"/>
              <rect x="190" y="150" width="20" height="60" rx="2" className="fill-blue-300 dark:fill-blue-800/40"/>
              <rect x="220" y="150" width="20" height="60" rx="2" className="fill-blue-300 dark:fill-blue-800/40"/>
              <rect x="250" y="150" width="20" height="60" rx="2" className="fill-blue-300 dark:fill-blue-800/40"/>
              
              {/* Network Connections */}
              <path d="M100 200 L120 200" className="stroke-green-400 dark:stroke-green-600" strokeWidth="2" strokeDasharray="4 2"/>
              <path d="M280 200 L300 200" className="stroke-green-400 dark:stroke-green-600" strokeWidth="2" strokeDasharray="4 2"/>
              
              {/* Security Shield */}
              <path d="M320 120 Q320 80 280 80 Q240 80 240 120 L240 160 Q240 200 280 200 Q320 200 320 160 Z" 
                    className="fill-emerald-200 dark:fill-emerald-900/30 stroke-emerald-400 dark:stroke-emerald-600" 
                    strokeWidth="2"/>
              <path d="M280 100 L280 140 L300 120 Z" className="fill-emerald-400 dark:fill-emerald-600"/>
              
              {/* Cloud/Network Nodes */}
              <circle cx="80" cy="120" r="15" className="fill-purple-200 dark:fill-purple-900/30 stroke-purple-400 dark:stroke-purple-600" strokeWidth="2"/>
              <circle cx="60" cy="180" r="12" className="fill-purple-200 dark:fill-purple-900/30 stroke-purple-400 dark:stroke-purple-600" strokeWidth="2"/>
              <circle cx="100" cy="260" r="10" className="fill-purple-200 dark:fill-purple-900/30 stroke-purple-400 dark:stroke-purple-600" strokeWidth="2"/>
              
              {/* Connection Lines */}
              <path d="M120 140 L120 100 L80 120" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="1" opacity="0.6"/>
              <path d="M200 140 L200 100 L280 100" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="1" opacity="0.6"/>
              <path d="M280 200 L320 200 L320 160" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="1" opacity="0.6"/>
              
              {/* Energy/Solar Symbol */}
              <circle cx="340" cy="280" r="20" className="fill-amber-200 dark:fill-amber-900/30 stroke-amber-400 dark:stroke-amber-600" strokeWidth="2"/>
              <path d="M340 260 L340 300 M325 275 L355 285 M325 285 L355 275" className="stroke-amber-400 dark:stroke-amber-600" strokeWidth="2"/>
              
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}