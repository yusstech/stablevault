'use client';

import { motion } from 'framer-motion';

export default function FreelancerTestimonialsSection() {
  const testimonials = [
    {
      quote: "I'm keeping an extra $200/month just from better exchange rates. That's $2,400 a year back in my pocket.",
      author: 'David O.',
      role: 'Full-stack Developer',
      location: 'Lagos',
      rating: 5
    },
    {
      quote: "My client in Toronto pays me every Friday. By Friday afternoon, it's in my Nigerian account. This used to take until Wednesday.",
      author: 'Blessing M.',
      role: 'Social Media Manager',
      location: 'Abuja',
      rating: 5
    },
    {
      quote: "I calculated it. Between fees and exchange rates, I was losing 8% on every payment. Now it's under 2%. That's a raise I gave myself.",
      author: 'Kofi A.',
      role: 'Brand Strategist',
      location: 'Accra',
      rating: 5
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
            Real freelancers,
            <br />
            <span className="text-success-green-500">real savings</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 leading-relaxed mb-6 text-lg">&ldquo;{testimonial.quote}&rdquo;</p>

              {/* Author */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
                <p className="text-white/40 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
