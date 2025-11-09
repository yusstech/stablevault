'use client';

import { motion } from 'framer-motion';

export default function FamiliesStoriesSection() {
  const stories = [
    {
      name: 'Nkem',
      location: 'Nurse in London',
      recipient: 'Mother in Enugu',
      story: 'My mum needed surgery. The hospital wanted payment upfront. It was a Saturday evening. I sent £2,000 via Relyr at 8pm London time. By 9pm Nigerian time, the hospital confirmed receipt. Surgery happened Sunday morning.',
      quote: 'Before Relyr, I would have panicked. Waited until Monday. This time, I just sent it. It worked. Mum is fine.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: 'Kwabena',
      location: 'Teacher in New York',
      recipient: 'Sister in Kumasi',
      story: 'School fees are due on specific dates. Miss the date, your kids don\'t write exams. I used to send money a week early via bank wire, hoping it would arrive on time. Stressful.',
      quote: 'Now I send on the day before, knowing my sister will have it same day. No more buffer. No more anxiety. Just reliable.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: 'Grace',
      location: 'Accountant in Dubai',
      recipient: 'Parents in Nairobi',
      story: 'I support my parents monthly. I set up a recurring payment through Relyr. Every 1st of the month, automatically sent. They know it\'s coming. I don\'t have to remember.',
      quote: 'I\'m sending them $50 more each month compared to the old method, just from better rates. That\'s $600 a year extra for them.',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Real people,
            <br />
            <span className="text-success-green-500">real relief</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="w-16 h-16 text-success-green-500 mb-6">{story.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{story.name}</h3>
              <p className="text-vibrant-purple-500 text-sm mb-1">{story.location}</p>
              <p className="text-white/60 text-xs mb-4">→ {story.recipient}</p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{story.story}</p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/80 text-sm italic">&ldquo;{story.quote}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
