'use client';

import { motion } from 'framer-motion';
import { WAITLIST_FORM_URL, CONTACT_EMAIL } from '../config/constants';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-16">
        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-success-green-500/10 border border-success-green-500/20 rounded-full">
            <p className="text-success-green-500 text-sm font-semibold">Coming Soon</p>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Download Relyr on iOS & Android
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Be the first to know when we launch. Join the waitlist today.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-[160px] h-[48px] bg-white/5 border border-white/20 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-white/60 text-[10px] leading-tight">Download on the</p>
                  <p className="text-white text-sm font-semibold leading-tight">App Store</p>
                </div>
              </div>
            </a>

            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-[180px] h-[48px] bg-white/5 border border-white/20 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <p className="text-white/60 text-[10px] leading-tight">GET IT ON</p>
                  <p className="text-white text-sm font-semibold leading-tight">Google Play</p>
                </div>
              </div>
            </a>
          </div>

          <a
            href={WAITLIST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-200 font-semibold"
          >
            Join Waitlist
          </a>
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Brand & Copyright */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Relyr</h3>
              <p className="text-white/60 text-sm">
                © 2025 Relyr. All rights reserved.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-right">
              <p className="text-white/60 text-sm mb-2">Questions?</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white hover:text-success-green-500 transition-colors duration-300"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
