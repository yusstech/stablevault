'use client';

import { motion } from 'framer-motion';

export default function FreelancerHowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Share Your Payment Details',
      description: 'Give your client your Relyr email or payment link. That\'s it. No complicated wire instructions, no SWIFT codes, no routing numbers to explain.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'They Pay, You Receive',
      description: 'Client sends payment from anywhere in the world. You get a notification. Money appears in your wallet in minutes. Work done, payment received.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Use Your Money Your Way',
      description: 'Withdraw to your local bank, hold in stable currency, spend with virtual cards, or save and earn 5% APY. Your money, your choice.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
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
            Three steps to
            <br />
            <span className="text-white/40">getting paid</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-vibrant-purple-500/10 border border-vibrant-purple-500/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-vibrant-purple-500">{step.number}</span>
                </div>
              </div>
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 text-success-green-500 flex-shrink-0">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
