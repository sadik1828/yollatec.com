import React from "react";
import { Mail, Phone, ShieldCheck, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white">
      {/* subtle background flare */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="container-xl py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
            <ShieldCheck size={16} /> Trusted Cybersecurity & IT
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Secure your business.{" "}
            <span className="text-brand-700">Scale with confidence.</span>
          </h1>
          <p className="mt-5 text-gray-600 max-w-2xl">
            At <span className="font-semibold">Yollatec.com</span>, we deliver
            end-to-end technology solutions that help organizations thrive in
            the digital era. From advanced cybersecurity and 24/7 SOC operations
            to cloud transformation, custom software engineering, and resilient
            network infrastructure, we design secure, scalable, and reliable
            systems tailored to your business ambitions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              <Mail size={16} /> Get a Free Consultation
            </Link>
            <Link to="/services" className="btn-outline">
              <Phone size={16} /> Our Services
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-md bg-brand-50 text-brand-700">
                <ShieldCheck size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold">ISO 27001 Ready</p>
                <p className="text-xs text-gray-500">Policies & Audit Support</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-md bg-brand-50 text-brand-700">
                <Server size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold">24/7 Monitoring</p>
                <p className="text-xs text-gray-500">SOC as a Service</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology-themed image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-first md:order-last"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-3">
            <img
              className="w-full h-80 object-cover rounded-xl"
              src="https://cdn-ialap.nitrocdn.com/bSxMvRMJjpvESeBpWPWSavCeSWXQHFjk/assets/images/optimized/rev-4f86c40/www.zucisystems.com/wp-content/uploads/2021/07/icon-internet-world-hands-businessman-network-technology-communication-scaled.jpg"
              alt="Technology concept"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
