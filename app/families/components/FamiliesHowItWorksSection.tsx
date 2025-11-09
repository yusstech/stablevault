'use client';

import { motion } from 'framer-motion';

export default function FamiliesHowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Open Relyr',
      description: 'No need to leave work. No need to find an agent. Just open the app wherever you are.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Enter Amount & Recipient',
      description: 'Type the amount in pounds, dollars, euros — whatever you earn in. Select who you\'re sending to. See exactly what they\'ll receive.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Send',
      description: 'Tap send. They get a notification. Money is in their account or mobile money. You get confirmation. Everyone smiles.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

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
            Three taps. Five minutes.
            <br />
            <span className="text-white/40">Done.</span>
          </h2>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-white/60">
            <span className="text-success-green-500 font-bold">Time taken:</span> Under 2 minutes to send. Under 5 minutes to deliver.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
