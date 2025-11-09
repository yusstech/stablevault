'use client';

import { motion } from 'framer-motion';

export default function FreelancerProblemSection() {
  const problems = [
    {
      title: 'The Waiting Game',
      description: [
        'Invoice sent: Day 1',
        'Payment "processed": Day 5',
        'Actually in your account: Day 8',
        'You need to eat: Every day'
      ],
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'red-500'
    },
    {
      title: 'The PayPal Problem',
      description: [
        '"Sorry, we don\'t support your country."',
        'Or worse: "Your account has been limited."',
        'Your money held hostage for 180 days.'
      ],
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      color: 'orange-500'
    },
    {
      title: 'The Fee Robbery',
      description: [
        'Client pays: $1,000',
        'PayPal takes: $50',
        'Bank conversion: $45',
        'Wire transfer fee: $25',
        'You actually get: $880'
      ],
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'yellow-500'
    },
    {
      title: 'The Currency Trap',
      description: [
        'Earned in dollars. Paid in dollars.',
        'But stuck converting at terrible bank rates.',
        'Value lost every single time.'
      ],
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      color: 'purple-500'
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
            You&apos;ve felt this
            <br />
            <span className="text-white/40">frustration before.</span>
          </h2>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-12 h-12 text-${problem.color} mb-4`}>{problem.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
              <ul className="space-y-2">
                {problem.description.map((line, idx) => (
                  <li key={idx} className="text-white/60 text-sm leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Your actual rate just dropped 12%. And you&apos;re still waiting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
