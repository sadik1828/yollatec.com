import { Cpu, Shield, Network, Server, Users, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/yolla_logo.png";

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900" id="about">
      <div className="container-xl py-16 lg:py-24 space-y-16">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            About Yollatec
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We build technology solutions that help businesses work better. From secure networks 
            to custom software, we focus on making technology work for you—not the other way around.
          </p>
        </div>

        {/* Story & Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Yollatec started with a simple idea: technology should solve real problems. 
                We've worked with businesses across different industries, helping them build 
                systems that are secure, reliable, and actually make sense for their teams.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target size={16} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Problem Solvers</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    We focus on what actually needs fixing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Long-term Partners</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    We stick around to make sure things keep working
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={HeroImage}
                alt="Our team working on technology solutions"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-4 py-3 rounded-lg flex items-center gap-3">
                <Users size={18} className="text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Trusted by businesses
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Do */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-12">
            What We Do Best
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                <Server size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Infrastructure & Servers
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We set up and maintain server environments that keep your business running smoothly. 
                From basic setups to complex systems, we make sure your foundation is solid.
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                <Network size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Network Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Secure, reliable networks that connect your team and protect your data. 
                We design systems that grow with your business and keep things running.
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                <Shield size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Security First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We build security into everything we do. From secure configurations to ongoing 
                monitoring, we help protect your business from modern threats.
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
                <Cpu size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Custom Software
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Applications built specifically for your workflow. We create tools that 
                solve your unique challenges and help your team work more efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Let's build something that works
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Ready to talk about your project? We'll help you find the right solution.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start a conversation
            </a>
            <a
              href="#services"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              See our services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}