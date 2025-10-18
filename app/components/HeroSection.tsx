'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vibrant-purple-600 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-success-green-500 rounded-full opacity-5 blur-3xl" />
      </div>

      {/* Decorative circles in background */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] border border-white/5 rounded-full" />
      <div className="absolute top-40 right-40 w-[600px] h-[600px] border border-white/5 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Save in Dollars,
              <br />
              Earn Interest,
              <br />
              <span className="text-white/40">Pay Suppliers Cheap</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed max-w-xl"
            >
              Say goodbye to inflation eating your savings and expensive bank fees. Our hassle-free platform lets you save in dollars, earn 5% interest, and pay suppliers at 1% fee. Trust us to handle your money securely and efficiently.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black font-semibold text-base rounded-xl hover:bg-white/90 transition-all duration-300"
              >
                Open an account
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent text-white font-semibold text-base rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300"
              >
                Send money
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 text-white/40 text-sm"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licensed & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>2,500+ Businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>$8.5M+ Protected</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Mobile App Mockup + Floating Transactions */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex justify-end items-center"
          >
            {/* Floating transaction cards - LEFT SIDE */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-32 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-4 w-64"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-yellow-400 rounded-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">Dribbble</p>
                    <p className="text-xs text-gray-500">Subscription fee</p>
                  </div>
                  <span className="text-sm font-bold text-red-500">-$15.00</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-white rounded-2xl shadow-xl p-4 w-64"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">House</p>
                    <p className="text-xs text-gray-500">Saving</p>
                  </div>
                  <span className="text-sm font-bold text-red-500">-$50.00</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-white rounded-2xl shadow-xl p-4 w-64"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-pink-500 rounded-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">Sony Camera</p>
                    <p className="text-xs text-gray-500">Shopping fee</p>
                  </div>
                  <span className="text-sm font-bold text-red-500">-$200.00</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-white rounded-2xl shadow-xl p-4 w-64"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-success-green-500 rounded-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">Paypal</p>
                    <p className="text-xs text-gray-500">Salary</p>
                  </div>
                  <span className="text-sm font-bold text-red-500">-$32.00</span>
                </div>
              </motion.div>
            </div>

            {/* Floating avatars */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 left-8 w-16 h-16 rounded-full border-4 border-[#0a0a0a] overflow-hidden shadow-xl z-20"
            >
              <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-600" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-72 left-0 w-14 h-14 rounded-full border-4 border-[#0a0a0a] overflow-hidden shadow-xl z-20"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-24 left-12 w-14 h-14 rounded-full border-4 border-[#0a0a0a] overflow-hidden shadow-xl z-20"
            >
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-600" />
            </motion.div>

            {/* Phone mockup */}
            <div className="relative z-10">
              <div className="w-[340px] h-[700px] bg-white rounded-[50px] shadow-2xl p-3">
                {/* Phone notch */}
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30" />

                {/* Status bar icons */}
                <div className="absolute top-3 right-8 flex items-center gap-1 z-30">
                  <div className="text-[8px] text-black">■■■■</div>
                  <div className="text-[8px] text-black">📶 🔋</div>
                </div>

                {/* App content */}
                <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white rounded-[44px] overflow-hidden relative">
                  {/* Header */}
                  <div className="p-5 pt-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-[10px] text-gray-500 mb-0.5">Good Morning</p>
                        <p className="text-xs font-semibold text-gray-900">Adaeze Okonkwo</p>
                      </div>
                      <div className="w-7 h-7 bg-gray-200 rounded-lg" />
                    </div>
                  </div>

                  {/* Balance card */}
                  <div className="px-5">
                    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-5 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-2xl" />
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl" />

                      <p className="text-[10px] text-white/70 mb-1 relative z-10">Total Balance</p>
                      <h2 className="text-3xl font-bold text-white mb-3 relative z-10">$25,000.40</h2>
                      <div className="flex justify-between items-center relative z-10">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          <div className="w-4 h-4 bg-white rounded-full" />
                          <span className="text-[10px] text-white font-medium">My Wallet</span>
                        </div>
                        <div className="bg-gradient-to-r from-success-green-500 to-emerald-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <span className="text-[10px] text-white font-bold">↑</span>
                          <span className="text-[10px] text-white font-semibold">$17,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* See All link */}
                  <div className="px-5 mt-5 flex justify-between items-center">
                    <h3 className="text-xs font-semibold text-gray-900">Recent</h3>
                    <button className="text-[10px] text-blue-600 font-medium">See All</button>
                  </div>

                  {/* Quick action cards - mini version */}
                  <div className="px-5 mt-3 flex gap-2">
                    <div className="flex-1 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl p-3 min-h-[60px]">
                      <p className="text-[8px] text-white/80 mb-0.5">Friends</p>
                      <p className="text-sm font-bold text-white">$3,000</p>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 min-h-[60px]">
                      <p className="text-[8px] text-white/80 mb-0.5">Wallet</p>
                      <p className="text-sm font-bold text-white">$2,400</p>
                    </div>
                  </div>

                  {/* Spending cards */}
                  <div className="px-5 mt-4 flex gap-2">
                    <div className="flex-1 bg-white border border-gray-100 rounded-xl p-2.5">
                      <p className="text-[9px] text-gray-500 mb-1">Car</p>
                      <p className="text-sm font-bold text-gray-900">$20,000</p>
                      <div className="w-full h-1 bg-red-200 rounded-full mt-1.5">
                        <div className="w-3/4 h-full bg-red-500 rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 rounded-xl p-2.5">
                      <p className="text-[9px] text-gray-500 mb-1">House</p>
                      <p className="text-sm font-bold text-gray-900">$30,500</p>
                      <div className="w-full h-1 bg-pink-200 rounded-full mt-1.5">
                        <div className="w-2/3 h-full bg-pink-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-around px-8">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-5 h-5 bg-gray-300 rounded-lg" />
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-5 h-5 bg-gray-900 rounded-lg" />
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-5 h-5 bg-gray-300 rounded-lg" />
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-5 h-5 bg-gray-300 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
