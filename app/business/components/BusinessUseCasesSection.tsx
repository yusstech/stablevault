'use client';

import { motion } from 'framer-motion';

export default function BusinessUseCasesSection() {
  const useCases = [
    {
      type: 'E-commerce & Retail',
      company: 'Fashion Boutique, Lagos',
      story: 'Sources from Istanbul and Guangzhou. Before Relyr, payments took a week. Now pays Monday, supplier confirms Tuesday, goods ship Wednesday. Inventory turns faster.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      type: 'SaaS & Tech Startups',
      company: 'Software Company, Nairobi',
      story: 'Team across Nigeria, Kenya, Ghana. Payday used to mean 3 banking systems. Now one batch payment in 5 minutes.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      type: 'Import/Export Trading',
      company: 'Agricultural Exporter, Accra',
      story: 'Exports to Europe. Getting paid took 7-10 days. Now buyers pay via Relyr, sees money same day, pays farmers immediately. Everyone wins.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            Real businesses,
            <br />
            <span className="text-white/40">real results</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="w-16 h-16 text-vibrant-purple-500 mb-6">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{useCase.type}</h3>
              <p className="text-success-green-500 text-sm mb-4">{useCase.company}</p>
              <p className="text-white/60 text-sm leading-relaxed">{useCase.story}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
