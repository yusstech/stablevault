'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255, 255, 255, 0.08) 79px, rgba(255, 255, 255, 0.08) 80px)',
          }} />
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255, 255, 255, 0.08) 79px, rgba(255, 255, 255, 0.08) 80px)',
          }} />
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-vibrant-purple-600 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-success-green-500 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-success-green-500/10 border border-success-green-500/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="text-2xl">🚀</span>
            <span className="text-success-green-400 font-medium text-sm">Join the movement</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Built for Africans
            <br />
            <span className="text-white/40">redefining the world.</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            You hustle, you create, you build — we make sure your money keeps up. Because global shouldn&apos;t feel far away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-white/90 transition-all duration-300 shadow-xl"
            >
              Sign Up
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Partner with Us
            </motion.button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free to start</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No minimum balance</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Setup in 2 minutes</span>
            </div>
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 pt-12 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* User avatars */}
              <div className="flex items-center -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-[#0a0a0a] flex items-center justify-center text-white text-xs font-bold">
                  CE
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 border-2 border-[#0a0a0a] flex items-center justify-center text-white text-xs font-bold">
                  IY
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-[#0a0a0a] flex items-center justify-center text-white text-xs font-bold">
                  AN
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-[#0a0a0a] flex items-center justify-center text-white text-xs font-bold">
                  TA
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 border-2 border-[#0a0a0a] flex items-center justify-center text-white text-lg">
                  +
                </div>
              </div>

              {/* Text */}
              <div className="text-left">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 font-medium text-sm">
                  Experience the freedom of instant global payments
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
