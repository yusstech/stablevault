'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vertical lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255, 255, 255, 0.08) 79px, rgba(255, 255, 255, 0.08) 80px)',
        }} />
        {/* Horizontal lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255, 255, 255, 0.08) 79px, rgba(255, 255, 255, 0.08) 80px)',
        }} />

        {/* Animated gradient overlay on grid */}
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

      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vibrant-purple-600 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-success-green-500 rounded-full opacity-5 blur-3xl" />
      </div>

      {/* Decorative circles in background */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] border border-white/5 rounded-full" />
      <div className="absolute top-40 right-40 w-[600px] h-[600px] border border-white/5 rounded-full" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Headline - Always first on all screens */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-0 leading-tight lg:pr-8 lg:row-start-1 lg:col-start-1"
          >
            Move money across borders
            <br />
            <span className="text-white/40">— instantly.</span>
          </motion.h1>

          {/* Mobile App Mockup - Second on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center items-center lg:row-start-1 lg:row-end-4 lg:col-start-2"
          >
            {/* Orbiting animated dots around phone - hidden on mobile */}
            <motion.div
              className="absolute w-[500px] h-[500px] pointer-events-none hidden lg:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {/* Dot 1 - Purple */}
              <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-vibrant-purple-500 shadow-lg shadow-vibrant-purple-500/50 blur-[1px]" />
              {/* Dot 2 - Green */}
              <div className="absolute top-1/4 right-0 w-2.5 h-2.5 rounded-full bg-success-green-500 shadow-lg shadow-success-green-500/50 blur-[1px]" />
              {/* Dot 3 - Blue */}
              <div className="absolute bottom-1/4 right-0 w-3.5 h-3.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 blur-[1px]" />
              {/* Dot 4 - Purple */}
              <div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-vibrant-purple-400 shadow-lg shadow-vibrant-purple-400/50 blur-[1px]" />
              {/* Dot 5 - Green */}
              <div className="absolute bottom-1/4 left-0 w-3 h-3 rounded-full bg-success-green-400 shadow-lg shadow-success-green-400/50 blur-[1px]" />
              {/* Dot 6 - Blue */}
              <div className="absolute top-1/4 left-0 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 blur-[1px]" />
            </motion.div>

            {/* Second orbit - slower, opposite direction - hidden on mobile */}
            <motion.div
              className="absolute w-[600px] h-[600px] pointer-events-none hidden lg:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {/* Dot 7 - Purple */}
              <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-vibrant-purple-300 shadow-lg shadow-vibrant-purple-300/50 blur-[1px]" />
              {/* Dot 8 - Green */}
              <div className="absolute bottom-1/3 right-10 w-3 h-3 rounded-full bg-success-green-300 shadow-lg shadow-success-green-300/50 blur-[1px]" />
              {/* Dot 9 - Blue */}
              <div className="absolute bottom-1/3 left-10 w-2.5 h-2.5 rounded-full bg-blue-300 shadow-lg shadow-blue-300/50 blur-[1px]" />
              {/* Dot 10 - Purple */}
              <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-vibrant-purple-500 shadow-lg shadow-vibrant-purple-500/50 blur-[1px]" />
            </motion.div>

            {/* Phone mockup - responsive sizing */}
            <div className="relative z-10 lg:ml-8">
              <div className="w-[280px] sm:w-[300px] lg:w-[340px] h-[580px] sm:h-[620px] lg:h-[700px] bg-white rounded-[40px] lg:rounded-[50px] shadow-2xl p-2.5 lg:p-3">
                {/* Phone notch */}
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30" />

                {/* Status bar icons */}
                <div className="absolute top-3 right-8 flex items-center gap-1 z-30">
                  <div className="text-[8px] text-black">■■■■</div>
                  <div className="text-[8px] text-black">📶 🔋</div>
                </div>

                {/* App content */}
                <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white rounded-[36px] lg:rounded-[44px] overflow-hidden relative">
                  {/* Header */}
                  <div className="p-4 lg:p-5 pt-8 lg:pt-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-[10px] text-gray-500 mb-0.5">Good Morning</p>
                        <p className="text-xs font-semibold text-gray-900">Adaeze Okonkwo</p>
                      </div>
                      <div className="w-7 h-7 bg-gray-200 rounded-lg" />
                    </div>
                  </div>

                  {/* Balance card */}
                  <div className="px-4 lg:px-5">
                    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl lg:rounded-2xl p-4 lg:p-5 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-2xl" />
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl" />

                      <p className="text-[10px] text-white/70 mb-1 relative z-10">USD Balance</p>
                      <h2 className="text-3xl font-bold text-white mb-3 relative z-10">$8,420.40</h2>
                      <div className="flex justify-between items-center relative z-10">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          <span className="text-[10px] text-white font-medium">≈ ₦6,736,000</span>
                        </div>
                        <div className="bg-gradient-to-r from-success-green-500 to-emerald-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <span className="text-[10px] text-white font-bold">↑ 5%</span>
                          <span className="text-[10px] text-white font-semibold">APY</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="px-5 mt-5 flex justify-between items-center mb-3">
                    <h3 className="text-xs font-semibold text-gray-900">Recent Activity</h3>
                    <button className="text-[10px] text-vibrant-purple-600 font-medium">See All</button>
                  </div>

                  {/* Transaction list */}
                  <div className="px-5 space-y-2.5">
                    {/* Payment to China Supplier */}
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">🏭</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-gray-900">China Supplier</p>
                          <p className="text-[9px] text-gray-500">Inventory payment</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-red-500">-$2,500</span>
                    </div>

                    {/* Interest Earned */}
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">💰</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-gray-900">Interest Earned</p>
                          <p className="text-[9px] text-gray-500">5% APY</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-success-green-500">+$104.17</span>
                    </div>

                    {/* Received from UK */}
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">🌍</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-gray-900">From Sister (UK)</p>
                          <p className="text-[9px] text-gray-500">Remittance</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-success-green-500">+$500</span>
                    </div>

                    {/* Withdrawal to Naira */}
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">₦</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-gray-900">To GT Bank</p>
                          <p className="text-[9px] text-gray-500">Local expenses</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-gray-600">-$300</span>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="px-5 mt-4 flex gap-2">
                    <div className="flex-1 bg-white border border-gray-100 rounded-xl p-2.5">
                      <p className="text-[9px] text-gray-500 mb-0.5">This Month</p>
                      <p className="text-xs font-bold text-gray-900">$8,420</p>
                      <p className="text-[8px] text-success-green-600 mt-0.5">↑ Saved</p>
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 rounded-xl p-2.5">
                      <p className="text-[9px] text-gray-500 mb-0.5">Fees Saved</p>
                      <p className="text-xs font-bold text-gray-900">$245</p>
                      <p className="text-[8px] text-vibrant-purple-600 mt-0.5">vs Banks</p>
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

          {/* Description, CTAs, and Trust badges - Third on mobile, left column on desktop */}
          <div className="lg:pr-8 lg:row-start-2 lg:row-end-4 lg:col-start-1">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed max-w-xl"
            >
              For Africans working, trading, and building globally. Your money should move as fast as your ambition. No delays, no hidden fees, no frustration.
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
                Learn more
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
        </div>
      </div>
    </section>
  );
}
