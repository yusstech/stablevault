'use client';

import { motion } from 'framer-motion';

export default function FreelancerUseCasesSection() {
  const useCases = [
    {
      profession: 'Graphic Design & Creative Work',
      name: 'Sarah',
      location: 'Lagos',
      story: 'Designs for agencies in London and New York. Used to wait 7-10 days for international wire transfers. Now gets paid same day the client approves work.',
      quote: '"I used to plan my month around when payments would actually clear. Now I just plan around when I finish projects."',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: 'vibrant-purple-500'
    },
    {
      profession: 'Software Development',
      name: 'Chidi',
      location: 'Nairobi',
      story: 'Codes for startups in Silicon Valley. Clients pay via Relyr instantly. No more explaining why Nigerian PayPal doesn\'t work the same way.',
      quote: '"My clients think I have a US bank account. I don\'t. I just have Relyr. It\'s simpler for everyone."',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'blue-500'
    },
    {
      profession: 'Content Writing & Copywriting',
      name: 'Amara',
      location: 'Accra',
      story: 'Writes for international blogs and SaaS companies. Gets paid per article, needs quick access to earnings for daily expenses.',
      quote: '"Before Relyr, I had to wait until I hit $500 to make a withdrawal worthwhile. Now I cash out anytime I want."',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: 'success-green-500'
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
            Built for how you
            <br />
            <span className="text-white/40">actually work</span>
          </h2>
        </motion.div>

        {/* Use Cases */}
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 text-${useCase.color} mb-4`}>{useCase.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{useCase.profession}</h3>
              <p className="text-success-green-500 text-sm mb-4">{useCase.name}, {useCase.location}</p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{useCase.story}</p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/80 text-sm italic">{useCase.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
