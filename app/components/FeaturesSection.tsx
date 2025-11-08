'use client';

import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Get paid instantly',
      description: 'Whether it&apos;s a client overseas, a supplier, or family back home, you see your money within minutes. No waiting, no guessing, just instant freedom.',
      benefits: [
        'Receive payments in minutes',
        'From anywhere in the world',
        'Multiple currencies supported',
        'Real-time notifications'
      ],
      stat: '< 5min',
      statLabel: 'Average Payment Time',
      color: 'success-green'
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Send to anyone, anywhere',
      description: 'Pay your business partners, freelancers, or loved ones in seconds. No borders, no delays, no hidden costs.',
      benefits: [
        'Send to 50+ countries',
        'Transparent pricing',
        'Real exchange rates',
        'Track every transfer'
      ],
      stat: '50+',
      statLabel: 'Countries Supported',
      color: 'vibrant-purple'
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Spend like it&apos;s local',
      description: 'Use a virtual card online, withdraw to your local bank, or convert currencies effortlessly. Your money works where you work.',
      benefits: [
        'Virtual cards for online payments',
        'Instant local withdrawals',
        'Currency conversion on demand',
        'Spend globally without fees'
      ],
      stat: '24/7',
      statLabel: 'Always Available',
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
            Relyr changes
            <br />
            <span className="text-white/40">everything.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            One wallet. One app. Get paid, send, convert, and spend — wherever you are, wherever they are.
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl mb-6 text-success-green-500">
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
