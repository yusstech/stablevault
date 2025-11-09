'use client';

import { motion } from 'framer-motion';
import { WAITLIST_FORM_URL, CONTACT_EMAIL } from '../../config/constants';

export default function FamiliesCTASection() {
  const stats = [
    { label: 'Delivery Time', value: '< 5 min' },
    { label: 'Save up to', value: '85%' },
    { label: 'Countries', value: '50+' },
    { label: 'Customer Rating', value: '4.9/5' }
  ];

  const trustBadges = [
    {
      label: 'CBN Licensed',
      description: 'Regulated by Central Bank',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      label: 'NDIC Insured',
      description: 'Your money is protected',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      label: '256-bit Encryption',
      description: 'Bank-level security',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      label: '24/7 Support',
      description: 'Always here to help',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0f0f0f] to-black">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold text-success-green-500 mb-2">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Send money home
            <br />
            <span className="text-white/40">the way it should be</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of people who trust Relyr to support their families back home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-200 font-semibold text-lg shadow-lg shadow-white/20 text-center"
            >
              Join Waitlist
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg text-center"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 text-success-green-500 mx-auto mb-4">{badge.icon}</div>
              <h3 className="text-white font-bold text-sm mb-1">{badge.label}</h3>
              <p className="text-white/60 text-xs">{badge.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-white/40 text-sm">
            No hidden fees. No surprises. Just reliable support for the people who matter most.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
