'use client';

import { motion } from 'framer-motion';
import { WAITLIST_FORM_URL, CONTACT_EMAIL } from '../../config/constants';

export default function FamiliesHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255, 255, 255, 0.08) 79px, rgba(255, 255, 255, 0.08) 80px)',
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255, 255, 255, 0.08) 79px, rgba(255, 255, 255, 0.08) 80px)',
        }} />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, transparent 40%, rgba(16, 185, 129, 0.12) 100%)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vibrant-purple-600 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-success-green-500 rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-success-green-500/10 text-success-green-500 rounded-full text-sm font-semibold border border-success-green-500/20">
                For Families
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Send money home.
              <br />
              <span className="text-white/40">Instantly. Safely.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed max-w-xl"
            >
              Your family shouldn&apos;t wait days for the money you sent today. With Relyr, they don&apos;t have to.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black font-semibold text-base rounded-xl hover:bg-white/90 transition-all duration-300 text-center"
              >
                Join Waitlist
              </motion.a>

              <motion.a
                href={`mailto:${CONTACT_EMAIL}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent text-white font-semibold text-base rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                Contact Us
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6 text-white/40 text-sm"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Under 5 min delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Save up to 85% on fees</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 available</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-white/10 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-success-green-500/10 border border-success-green-500/30 rounded-2xl p-6 mb-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold mb-1">Money received</p>
                    <p className="text-white/60 text-sm">From: Your son in London</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-success-green-500/20">
                  <p className="text-3xl font-bold text-white mb-1">₦400,000</p>
                  <p className="text-white/60 text-sm">≈ £200 sent</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-xs mb-1">Delivery time</p>
                  <p className="text-white font-bold text-lg">3 minutes</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-xs mb-1">vs Western Union</p>
                  <p className="text-success-green-500 font-bold text-lg">£28 saved</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-vibrant-purple-500 text-white px-4 py-3 rounded-full shadow-lg hidden lg:block"
            >
              <p className="text-sm font-semibold">vs 3-7 days wait</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
