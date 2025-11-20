import {
  Mail,
  Phone,
  ShieldCheck,
  Server,
  Cpu,
  Cable,
  Zap,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/hero_image.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 flex items-center">
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
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight text-gray-900 dark:text-white">
            Enabling Secure and Scalable Digital Operations
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-7 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Us
            </Link>

            <Link
              to="/services"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 font-medium py-3 px-7 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 flex items-center gap-2 text-gray-900 dark:text-white"
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
                  ISO 27001 Ready
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Compliance & Governance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Server size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  24/7 Monitoring
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  SOC Services
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
                  Cabling & Racks
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
                  Solar & Electrical
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:block"
        >
          <div className="relative overflow-hidden">
            <img
              src={HeroImage}
              alt="Technology infrastructure illustration"
              className="w-full  object-cover"
              style={{ height: 500 }}
            />
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-3 py-2 rounded-lg flex items-center gap-2">
              <Cpu size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Infrastructure support
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
