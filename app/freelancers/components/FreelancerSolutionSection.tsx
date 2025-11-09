'use client';

import { motion } from 'framer-motion';

export default function FreelancerSolutionSection() {
  const benefits = [
    {
      title: 'Instant Payments',
      description: 'Your client sends payment. You see it in under 5 minutes. No 3-7 day holds. No payment processing delays. Just instant access to money you\'ve already earned.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stat: '< 5min',
      statLabel: 'Average time'
    },
    {
      title: 'No Country Restrictions',
      description: 'US client? UK agency? European startup? Asian company? It doesn\'t matter. Get paid from 50+ countries without the "we can\'t pay your location" rejection.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '50+',
      statLabel: 'Countries'
    },
    {
      title: 'Keep More of Your Money',
      description: 'Transparent fees that don\'t eat your income. Real exchange rates, not inflated bank rates. See exactly what you\'re getting before you confirm.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '6%',
      statLabel: 'Avg. saved vs banks'
    },
    {
      title: 'Multi-Currency Wallet',
      description: 'Hold USD, EUR, GBP, or convert to local currency. Your choice. Switch between currencies as you need. Earn 5% APY while you decide.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      stat: '5%',
      statLabel: 'APY on balance'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-success-green-500 rounded-full opacity-5 blur-3xl" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Relyr was built for
            <br />
            <span className="text-success-green-500">this exact moment.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Get paid by clients anywhere in the world. See your money in minutes. Keep more of what you earn.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-success-green-500/10 rounded-xl flex items-center justify-center text-success-green-500 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-success-green-500">{benefit.stat}</span>
                    <span className="text-white/40 text-sm">{benefit.statLabel}</span>
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
