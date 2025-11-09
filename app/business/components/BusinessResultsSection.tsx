'use client';

import { motion } from 'framer-motion';

export default function BusinessResultsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Real impact,
            <br />
            <span className="text-success-green-500">real savings</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <p className="text-5xl font-bold text-success-green-500 mb-2">2,500+</p>
            <p className="text-white/60">Active Businesses</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <p className="text-5xl font-bold text-vibrant-purple-500 mb-2">$8.5M+</p>
            <p className="text-white/60">Protected</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <p className="text-5xl font-bold text-blue-500 mb-2">50+</p>
            <p className="text-white/60">Countries Connected</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <p className="text-5xl font-bold text-yellow-500 mb-2">15K+</p>
            <p className="text-white/60">Monthly Transactions</p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <p className="text-white/80 leading-relaxed mb-6">&ldquo;We&apos;re saving $12,000 annually just on fees. That&apos;s a full employee salary.&rdquo;</p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white font-semibold">Procurement Manager</p>
              <p className="text-white/60 text-sm">Import Company, Lagos</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <p className="text-white/80 leading-relaxed mb-6">&ldquo;Our suppliers prefer when we pay with Relyr. We get better terms because we&apos;re reliable.&rdquo;</p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white font-semibold">Business Owner</p>
              <p className="text-white/60 text-sm">E-commerce, Nairobi</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <p className="text-white/80 leading-relaxed mb-6">&ldquo;From 2 days with multiple systems to 5 minutes with one platform. Time is money.&rdquo;</p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white font-semibold">CTO</p>
              <p className="text-white/60 text-sm">Tech Startup, Accra</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
