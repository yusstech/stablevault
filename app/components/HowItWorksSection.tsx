'use client';

import { motion } from 'framer-motion';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Sign Up in Minutes',
      description: 'Download the app or visit our website. Create your account with just your phone number and BVN. No branch visits, no stress.',
      icon: '📱',
      time: '2 minutes'
    },
    {
      number: '02',
      title: 'Fund Your Dollar Account',
      description: 'Transfer Naira and we convert to USD at real rates. Or receive dollars directly from abroad. Your choice.',
      icon: '💵',
      time: 'Instant'
    },
    {
      number: '03',
      title: 'Watch Your Money Grow',
      description: 'Earn 5% interest automatically every month. No hidden terms, no minimum balance. Your money works while you sleep.',
      icon: '📈',
      time: 'Monthly'
    },
    {
      number: '04',
      title: 'Pay or Withdraw Anytime',
      description: 'Send dollars to suppliers worldwide at 1% fee. Or withdraw to your Naira account instantly. Total control, zero hassle.',
      icon: '🚀',
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
            Get Started in
            <br />
            <span className="text-white/40">Four Simple Steps</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            No paperwork, no long queues, no confusion. Just straightforward banking that works for you.
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
                  <div className="text-5xl mb-4 mt-4">
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
            Ready to take control of your money?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-black font-semibold text-base rounded-xl hover:bg-white/90 transition-all duration-300"
            >
              Open Your Account
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent text-white font-semibold text-base rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300"
            >
              Talk to Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
