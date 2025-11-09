'use client';

import { motion } from 'framer-motion';

export default function FreelancerComparisonSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
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
            The difference
            <br />
            <span className="text-white/40">is clear</span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-white/60 font-semibold">Feature</th>
                <th className="px-6 py-4 text-left text-white/60 font-semibold">Traditional Bank Wire</th>
                <th className="px-6 py-4 text-left text-white/60 font-semibold">PayPal</th>
                <th className="px-6 py-4 text-left text-success-green-500 font-semibold">Relyr</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="px-6 py-4 text-white font-medium">Speed</td>
                <td className="px-6 py-4 text-white/60">3-7 business days</td>
                <td className="px-6 py-4 text-white/60">1-3 days (if it works)</td>
                <td className="px-6 py-4 text-white">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 text-success-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Under 5 minutes
                  </span>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-6 py-4 text-white font-medium">Fees</td>
                <td className="px-6 py-4 text-white/60">$25-50 per transfer</td>
                <td className="px-6 py-4 text-white/60">3.9% + $0.30 + conversion</td>
                <td className="px-6 py-4 text-white">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 text-success-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Transparent, low fees
                  </span>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-6 py-4 text-white font-medium">Exchange Rate</td>
                <td className="px-6 py-4 text-white/60">Poor (3-5% markup)</td>
                <td className="px-6 py-4 text-white/60">Poor (2.5-4% markup)</td>
                <td className="px-6 py-4 text-white">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 text-success-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Real market rates
                  </span>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-6 py-4 text-white font-medium">Country Support</td>
                <td className="px-6 py-4 text-white/60">Limited, complex</td>
                <td className="px-6 py-4 text-white/60">Restricted in many African countries</td>
                <td className="px-6 py-4 text-white">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 text-success-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    50+ countries, seamless
                  </span>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-6 py-4 text-white font-medium">Holds/Limits</td>
                <td className="px-6 py-4 text-white/60">None, but slow</td>
                <td className="px-6 py-4 text-white/60">Frequent account limits</td>
                <td className="px-6 py-4 text-white">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 text-success-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    None
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white font-medium">Ease of Use</td>
                <td className="px-6 py-4 text-white/60">Complex wire instructions</td>
                <td className="px-6 py-4 text-white/60">Account restrictions</td>
                <td className="px-6 py-4 text-white">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 text-success-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Simple email/link
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
