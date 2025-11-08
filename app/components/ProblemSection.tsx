'use client';

import { motion } from 'framer-motion';

export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Waiting Days to Get Paid',
      description: 'International payments take 3-7 days to clear. Your business moves fast, but your money doesn&apos;t.',
      stat: '3-7 day delays',
      userSegment: 'Freelancers'
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Losing Value in Fees',
      description: 'Banks and transfer services charge 3-5% in hidden fees. Poor exchange rates cost you even more.',
      stat: 'Up to 5% in fees',
      userSegment: 'All Users'
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      title: 'Payment Restrictions',
      description: 'Being told &quot;we can&apos;t pay your country&quot; or facing arbitrary limits on how much you can send or receive.',
      stat: 'Frequent blocks',
      userSegment: 'Cross-border'
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Poor Exchange Rates',
      description: 'Unfavorable rates when converting currencies. The spread between buy and sell rates eats into your earnings.',
      stat: '3-5% markup',
      userSegment: 'Traders'
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
            You&apos;ve done everything right
            <br />
            <span className="text-white/40">— but payments still fail.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Waiting days to get paid. Losing value in fees and poor exchange rates. Being told &quot;we can&apos;t pay your country.&quot; It&apos;s exhausting. We get it.
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
                  <div className="w-12 h-12 text-red-400">
                    {problem.icon}
                  </div>
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
            Relyr changes everything.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-black font-semibold text-base rounded-xl hover:bg-white/90 transition-all duration-300"
          >
            See How Relyr Works
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
