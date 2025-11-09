'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FreelancerFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do my international clients pay me?',
      answer: 'They can send money to your Relyr email, use your payment link, or pay with card. They don\'t need a Relyr account.'
    },
    {
      question: 'What if my client is in a country not listed?',
      answer: 'We\'re expanding rapidly. Contact us and we\'ll prioritize that corridor based on demand.'
    },
    {
      question: 'Can I invoice in one currency and receive in another?',
      answer: 'Yes. Invoice in USD, receive in Naira. Or hold in USD. Your choice.'
    },
    {
      question: 'How do I withdraw to my local bank?',
      answer: 'One tap in the app. Choose your local bank, enter amount, done. Usually arrives same day.'
    },
    {
      question: 'Is there a minimum withdrawal amount?',
      answer: 'No minimum. Withdraw $10 or $10,000. Your money, your timeline.'
    },
    {
      question: 'Can I use this for client deposits/retainers?',
      answer: 'Absolutely. Many freelancers use payment links to collect 50% upfront before starting work.'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
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
            Questions?
            <br />
            <span className="text-white/40">We&apos;ve got answers.</span>
          </h2>
        </motion.div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
              >
                <span className="text-white font-semibold pr-8">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-white/60 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
