'use client';

import { motion } from 'framer-motion';

export default function ProblemSection() {
  const problems = [
    {
      emoji: '📉',
      title: 'Naira Keeps Losing Value',
      description: 'Your hard-earned savings lose 20%+ value yearly to inflation. What cost ₦1,000 last year now costs ₦1,200.',
      stat: '20%+ yearly loss',
      userSegment: 'All Businesses'
    },
    {
      emoji: '💸',
      title: 'Expensive International Payments',
      description: 'Banks charge 3-5% for supplier payments. On a $10,000 order, you lose $300-500 in fees alone.',
      stat: 'Up to 5% in fees',
      userSegment: 'Importers'
    },
    {
      emoji: '🐌',
      title: 'Slow Payment Processing',
      description: 'Wait 3-7 days for international transfers. Miss deals and pay late fees while your money sits in limbo.',
      stat: '3-7 day delays',
      userSegment: 'E-commerce'
    },
    {
      emoji: '🔒',
      title: 'Dollar Access Problems',
      description: 'Limited dollar availability from banks. Forced to use black market at terrible rates when you need USD.',
      stat: '₦100+ difference',
      userSegment: 'Freelancers'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255, 255, 255, 0.03) 79px, rgba(255, 255, 255, 0.03) 80px)',
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255, 255, 255, 0.03) 79px, rgba(255, 255, 255, 0.03) 80px)',
        }} />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Nigerian Businesses
            <br />
            <span className="text-white/40">Are Losing Money Daily</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Every day you wait, inflation and high fees eat into your profits. You work hard for your money—don&apos;t let the system waste it.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
                {/* User Segment Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl">{problem.emoji}</span>
                  <span className="text-xs font-medium text-vibrant-purple-400 bg-vibrant-purple-500/10 px-3 py-1 rounded-full">
                    {problem.userSegment}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {problem.title}
                </h3>

                <p className="text-white/60 leading-relaxed mb-4">
                  {problem.description}
                </p>

                {/* Stat */}
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent" />
                  <span className="text-sm font-bold text-red-400">
                    {problem.stat}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 text-lg mb-6">
            Stop losing money to a broken system.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-black font-semibold text-base rounded-xl hover:bg-white/90 transition-all duration-300"
          >
            See How StableVault Fixes This
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
