'use client';

import { motion } from 'framer-motion';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description: 'Sign up in minutes with just your email and phone number. No complicated forms, no endless verification.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      time: '2 minutes'
    },
    {
      number: '02',
      title: 'Receive Money Globally',
      description: 'Get paid from anywhere in the world. Your clients, customers, or family can send money directly to your Relyr wallet.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      time: 'Instant'
    },
    {
      number: '03',
      title: 'Send & Convert',
      description: 'Pay anyone, anywhere. Convert between currencies at real market rates. No hidden fees, no surprises.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      time: 'Real-time'
    },
    {
      number: '04',
      title: 'Spend or Withdraw',
      description: 'Use your virtual card for online purchases, or withdraw to your local bank account. Your money, your way.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      time: 'Anytime'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255, 255, 255, 0.05) 79px, rgba(255, 255, 255, 0.05) 80px)',
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255, 255, 255, 0.05) 79px, rgba(255, 255, 255, 0.05) 80px)',
        }} />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            One wallet. One app.
            <br />
            <span className="text-white/40">Move money globally.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            From Lagos to London, Nairobi to New York — your money simply moves.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-vibrant-purple-500/20 via-success-green-500/20 to-vibrant-purple-500/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full">
                  {/* Step number circle */}
                  <div className="absolute -top-4 left-6 w-16 h-16 bg-gradient-to-br from-vibrant-purple-500 to-success-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>

                  {/* Time badge */}
                  <div className="flex justify-end mb-4">
                    <span className="text-xs font-medium text-success-green-400 bg-success-green-500/10 px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 text-success-green-500 mb-4 mt-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-3 text-white/20 text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-white/80 text-lg mb-6">
            Join thousands moving money globally, instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-black font-semibold text-base rounded-xl hover:bg-white/90 transition-all duration-300"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent text-white font-semibold text-base rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
