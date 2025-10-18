'use client';

import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      icon: '💰',
      title: 'Save in USD, Earn 5% Interest',
      description: 'Protect your money from inflation while earning actual returns. Your dollars work for you, not against you.',
      benefits: [
        'Beat inflation automatically',
        'Interest paid monthly',
        'No minimum balance',
        'Withdraw anytime'
      ],
      stat: '5% APY',
      statLabel: 'Annual Return',
      color: 'success-green'
    },
    {
      icon: '⚡',
      title: 'Pay Suppliers at 1% Fee',
      description: 'Send money to China, UK, US, or anywhere globally at a fraction of what banks charge. Fast and transparent.',
      benefits: [
        'Save up to 4% per transaction',
        'Same-day transfers',
        'Real exchange rates',
        'Track every payment'
      ],
      stat: '1%',
      statLabel: 'Transaction Fee',
      color: 'vibrant-purple'
    },
    {
      icon: '🚀',
      title: 'Fast, Secure Transactions',
      description: 'Move money in minutes, not days. Bank-grade security keeps your funds safe 24/7.',
      benefits: [
        '2-factor authentication',
        'Instant local transfers',
        'Encrypted transactions',
        '24/7 support access'
      ],
      stat: '< 2min',
      statLabel: 'Average Transfer Time',
      color: 'deep-blue'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-vibrant-purple-600 rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-success-green-500 rounded-full opacity-5 blur-3xl" />

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
            The Dollar Bank
            <br />
            <span className="text-white/40">Nigerian Businesses Deserve</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Everything you need to save, grow, and spend your money wisely. No hidden fees, no confusing terms.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-8 lg:space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl mb-6 text-4xl">
                  {feature.icon}
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-lg text-white/60 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-success-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>

              {/* Stat Card */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className={`relative bg-gradient-to-br from-${feature.color}-500/10 to-${feature.color}-600/5 border border-${feature.color}-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden`}>
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-${feature.color}-500/10 rounded-full blur-3xl`} />

                  <div className="relative z-10">
                    <p className="text-white/60 text-sm font-medium mb-2">
                      {feature.statLabel}
                    </p>
                    <p className={`text-6xl lg:text-7xl font-bold text-${feature.color}-500 mb-6`}>
                      {feature.stat}
                    </p>

                    {/* Mini stats */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-t border-white/10">
                        <span className="text-white/60 text-sm">Total Saved</span>
                        <span className="text-white font-bold">$8.5M+</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-t border-white/10">
                        <span className="text-white/60 text-sm">Active Users</span>
                        <span className="text-white font-bold">2,500+</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-t border-white/10">
                        <span className="text-white/60 text-sm">Avg. Monthly Savings</span>
                        <span className="text-white font-bold">$3,400</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
