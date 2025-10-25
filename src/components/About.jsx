// components/About.jsx
import React from "react";
import { 
  ShieldCheck, 
  Users, 
  Rocket, 
  Award, 
  HeartHandshake, 
  Globe,
  Target,
  Zap,
  Cpu,
  Code,
  Cloud,
  Network,
  BarChart3,
  Clock,
  CheckCircle,
  Star,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Security-First Delivery",
      description: "Secure-by-design practices across every project and technology stack.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: HeartHandshake,
      title: "Partnership & Enablement",
      description: "Workshops, documentation, and training to ensure your team's long-term success.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Standards-Aligned",
      description: "Guided by ISO/IEC best practices and proven reference architectures.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Measured Outcomes",
      description: "Clear KPIs, post-implementation reviews, and continuous improvement cycles.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Agile methodologies for faster time-to-market without compromising quality.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International experience with local implementation expertise.",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const expertise = [
    { icon: Cpu, name: "Infrastructure", count: "50+", description: "Systems Deployed" },
    { icon: Code, name: "Software", count: "30+", description: "Applications Built" },
    { icon: Cloud, name: "Cloud", count: "25+", description: "Cloud Migrations" },
    { icon: Network, name: "Networking", count: "40+", description: "Networks Secured" },
    { icon: BarChart3, name: "Data Analytics", count: "15+", description: "BI Solutions" },
    { icon: ShieldCheck, name: "Security", count: "100%", description: "Compliance Rate" }
  ];

  const milestones = [
    { year: "2019", event: "Company Founded", description: "Started with cybersecurity focus" },
    { year: "2020", event: "Cloud Division", description: "Expanded to cloud services" },
    { year: "2021", event: "Software Development", description: "Added custom software solutions" },
    { year: "2022", event: "Infrastructure Services", description: "Launched physical infrastructure" },
    { year: "2023", event: "International Expansion", description: "Extended services globally" },
    { year: "2024", event: "Full-Stack Provider", description: "Became end-to-end IT partner" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-green-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-xl py-20 lg:py-28 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
              <ShieldCheck size={18} className="text-brand-600 dark:text-brand-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                About Yollatec.com
              </span>
            </div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-brand-700 to-blue-700 dark:from-white dark:via-brand-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            Security-led technology.{" "}
            <span className="block bg-gradient-to-r from-brand-600 to-blue-600 dark:from-brand-400 dark:to-blue-400 bg-clip-text text-transparent">
              Built for outcomes.
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We are a <span className="font-semibold text-brand-600 dark:text-brand-400">security-first technology partner</span> delivering comprehensive cybersecurity, cloud, software, and infrastructure solutions. Our certified team brings global expertise to design systems that are <span className="font-semibold text-gray-900 dark:text-white">secure, scalable, and reliable</span>.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Enhanced Values & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-500/25 flex-shrink-0">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    To empower businesses with cutting-edge technology solutions that drive growth, 
                    enhance security, and create sustainable competitive advantages in the digital landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-200 dark:hover:border-brand-800 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <value.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Enhanced Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Enhanced Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/20 dark:shadow-black/30 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                alt="Yollatec team collaborating on technology solutions"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl px-4 py-3">
                  <Users size={20} className="text-brand-600 dark:text-brand-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">Expert Team Collaboration</span>
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "+5", label: "Years Experience", icon: Clock },
                { number: "100+", label: "Projects Delivered", icon: CheckCircle },
                { number: "24/7", label: "Support", icon: ShieldCheck }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={20} />
                  </div>
                  <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{stat.number}</p>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Expertise Areas */}
            <div className="bg-gradient-to-br from-white to-green-50/50 dark:from-gray-800 dark:to-green-900/20 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-green-600 dark:text-green-400" />
                Our Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((area, index) => (
                  <div key={area.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-gray-700/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white">
                      <area.icon size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{area.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{area.count} {area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From cybersecurity specialists to full-stack technology partners, our evolution reflects our commitment to innovation and client success.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-500 to-blue-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5"
                    >
                      <div className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Year Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-brand-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-brand-500/25 border-4 border-white dark:border-gray-900 z-10">
                    {milestone.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-brand-50 to-blue-50 dark:from-brand-900/20 dark:to-blue-900/20 rounded-3xl p-8 border border-brand-100 dark:border-brand-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the growing list of organizations that trust Yollatec for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Start Your Project
              </button>
              <button className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-8 rounded-2xl hover:border-brand-400 hover:text-brand-600 dark:hover:border-brand-500 dark:hover:text-brand-400 transition-all duration-300 transform hover:-translate-y-1">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}