'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FamiliesSavingsSection() {
  const [sendAmount, setSendAmount] = useState(500);

  const calculateReceived = (amount: number, provider: string) => {
    if (provider === 'relyr') {
      return amount * 0.98; // 2% fee
    } else if (provider === 'westernunion') {
      return amount * 0.92; // 8% fee
    } else {
      return amount * 0.90; // 10% fee
    }
  };

  const comparisons = [
    {
      provider: 'Relyr',
      fee: '2%',
      speed: '< 5 minutes',
      received: calculateReceived(sendAmount, 'relyr'),
      color: 'success-green-500'
    },
    {
      provider: 'Western Union',
      fee: '8%',
      speed: '1-3 days',
      received: calculateReceived(sendAmount, 'westernunion'),
      color: 'white/40'
    },
    {
      provider: 'Bank Wire',
      fee: '10%',
      speed: '3-5 days',
      received: calculateReceived(sendAmount, 'bank'),
      color: 'white/40'
    }
  ];

  const savings = {
    vsWesternUnion: (calculateReceived(sendAmount, 'relyr') - calculateReceived(sendAmount, 'westernunion')).toFixed(2),
    vsBank: (calculateReceived(sendAmount, 'relyr') - calculateReceived(sendAmount, 'bank')).toFixed(2),
    perYear: ((calculateReceived(sendAmount, 'relyr') - calculateReceived(sendAmount, 'westernunion')) * 12).toFixed(2)
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Stop losing money
            <br />
            <span className="text-white/40">on every transfer</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            See how much more your family receives with Relyr compared to traditional services.
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 max-w-2xl mx-auto"
        >
          <label className="block text-white/80 text-sm font-medium mb-4">
            I send this much monthly:
          </label>
          <div className="relative mb-8">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl font-bold">$</span>
            <input
              type="range"
              min="100"
              max="2000"
              step="50"
              value={sendAmount}
              onChange={(e) => setSendAmount(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-success-green-500 mb-4"
            />
            <input
              type="number"
              value={sendAmount}
              onChange={(e) => setSendAmount(Number(e.target.value))}
              className="w-full bg-transparent border-b-2 border-white/20 text-white text-4xl font-bold text-center pb-2 focus:outline-none focus:border-success-green-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-white/60 text-xs mb-2">Your family gets</p>
              <p className="text-success-green-500 text-2xl font-bold">${calculateReceived(sendAmount, 'relyr').toFixed(2)}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-2">You save vs others</p>
              <p className="text-vibrant-purple-500 text-2xl font-bold">${savings.vsWesternUnion}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-2">Per year savings</p>
              <p className="text-white text-2xl font-bold">${savings.perYear}</p>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className={`bg-white/5 border ${
                comparison.provider === 'Relyr'
                  ? 'border-success-green-500 scale-105'
                  : 'border-white/10'
              } rounded-2xl p-8 relative`}
            >
              {comparison.provider === 'Relyr' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-success-green-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                  BEST VALUE
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-6 text-center">{comparison.provider}</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60 text-sm">Fee</span>
                  <span className={`text-${comparison.color} font-bold`}>{comparison.fee}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60 text-sm">Speed</span>
                  <span className={`text-${comparison.color} font-bold`}>{comparison.speed}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60 text-sm">They receive</span>
                  <span className={`text-${comparison.color} font-bold text-lg`}>${comparison.received.toFixed(2)}</span>
                </div>
              </div>

              {comparison.provider === 'Relyr' && (
                <div className="text-center pt-4">
                  <p className="text-success-green-500 text-sm font-medium">
                    +${(comparison.received - calculateReceived(sendAmount, 'westernunion')).toFixed(2)} more than Western Union
                  </p>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Real Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          {[
            { from: 'UK → Nigeria', amount: '$500', save: '$30/month' },
            { from: 'US → Kenya', amount: '$300', save: '$18/month' },
            { from: 'Canada → Ghana', amount: '$400', save: '$24/month' }
          ].map((example, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <p className="text-vibrant-purple-500 text-sm font-medium mb-2">{example.from}</p>
              <p className="text-white text-xl font-bold mb-1">{example.amount}</p>
              <p className="text-success-green-500 text-sm">Save {example.save}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
