'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Chioma Eze',
      role: 'Fashion Retailer',
      location: 'Lagos',
      image: '👩🏾',
      quote: 'I used to lose ₦200,000+ every month in bank fees when paying my suppliers in China. With StableVault, I pay 1% and the money arrives same day. My profit margins have never been better.',
      stat: 'Saves ₦2.4M yearly',
      verified: true
    },
    {
      name: 'Ibrahim Yusuf',
      role: 'E-commerce Business Owner',
      location: 'Abuja',
      image: '👨🏾',
      quote: 'Naira was eating my capital alive. I moved my working capital to StableVault and now earn 5% interest instead of watching inflation destroy my savings. Game changer.',
      stat: 'Earns $420/month interest',
      verified: true
    },
    {
      name: 'Ada Nwosu',
      role: 'Software Developer',
      location: 'Port Harcourt',
      image: '👩🏾‍💻',
      quote: 'Getting paid in dollars from clients abroad was always a nightmare until StableVault. Now I receive payments directly, keep it in USD, and use it when I need it. Simple.',
      stat: 'Receives $8K+ monthly',
      verified: true
    },
    {
      name: 'Tunde Adebayo',
      role: 'Import/Export Trader',
      location: 'Kano',
      image: '👨🏾‍💼',
      quote: 'The speed is what shocked me. I sent $5,000 to my supplier in Dubai and it arrived in 30 minutes. My bank used to take 5 days and charge me triple the fees.',
      stat: 'Saved $12K in fees',
      verified: true
    },
    {
      name: 'Blessing Okeke',
      role: 'Beauty Products Distributor',
      location: 'Enugu',
      image: '👩🏾‍🦱',
      quote: 'As a woman in business, I need my money to work smart. StableVault gives me dollar stability, great interest, and respect. No condescending bank staff, just results.',
      stat: 'Grew savings by 47%',
      verified: true
    },
    {
      name: 'David Okonkwo',
      role: 'Tech Startup Founder',
      location: 'Lagos',
      image: '👨🏾‍💻',
      quote: 'Running a startup means every kobo counts. Moving to USD accounts with StableVault protected my runway and the 5% APY is better than any Naira fixed deposit I have seen.',
      stat: '$15K saved in 6 months',
      verified: true
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-vibrant-purple-600 rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-success-green-500 rounded-full opacity-5 blur-3xl" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Real Nigerian Businesses,
            <br />
            <span className="text-white/40">Real Results</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Over 2,500 businesses trust StableVault with their money. Here's why they made the switch.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20"
        >
          {[
            { value: '2,500+', label: 'Active Businesses' },
            { value: '$8.5M+', label: 'Total Protected' },
            { value: '15,000+', label: 'Transactions Monthly' },
            { value: '4.9/5', label: 'User Rating' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-white/60 text-xs">{testimonial.role}</p>
                      <p className="text-white/40 text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/80 leading-relaxed mb-4 text-sm">
                  "{testimonial.quote}"
                </p>

                {/* Stat */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-success-green-400 font-semibold text-sm">
                    {testimonial.stat}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <p className="text-white/60 mb-6">Trusted and secured by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="text-white/40 text-sm font-medium">🔒 256-bit SSL Encryption</div>
            <div className="text-white/40 text-sm font-medium">🏦 CBN Licensed Partner</div>
            <div className="text-white/40 text-sm font-medium">✅ NDIC Insured</div>
            <div className="text-white/40 text-sm font-medium">🛡️ 2FA Security</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
