import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const NeuralNetworkIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="text-amber-400/30">
    <g fill="currentColor">
      <circle cx="20" cy="20" r="4" />
      <circle cx="60" cy="30" r="4" />
      <circle cx="100" cy="20" r="4" />
      <circle cx="30" cy="60" r="4" />
      <circle cx="90" cy="70" r="4" />
      <circle cx="20" cy="100" r="4" />
      <circle cx="60" cy="90" r="4" />
      <circle cx="100" cy="100" r="4" />
    </g>
    <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6">
      <line x1="20" y1="20" x2="60" y2="30" />
      <line x1="60" y1="30" x2="100" y2="20" />
      <line x1="20" y1="20" x2="30" y2="60" />
      <line x1="60" y1="30" x2="90" y2="70" />
      <line x1="100" y1="20" x2="90" y2="70" />
      <line x1="30" y1="60" x2="60" y2="90" />
      <line x1="90" y1="70" x2="60" y2="90" />
      <line x1="20" y1="100" x2="60" y2="90" />
      <line x1="60" y1="90" x2="100" y2="100" />
    </g>
  </svg>
);

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-stone-50 to-stone-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <NeuralNetworkIcon />
        </div>
        <div className="absolute bottom-20 left-20 transform rotate-45">
          <NeuralNetworkIcon />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-stone-900 mb-8 leading-tight"
          >
            Pioneering Safe,{' '}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Adaptive AGI
            </span>{' '}
            Research
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-stone-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Your window into next‑generation intelligence that learns on the fly—and does so responsibly.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-stone-600 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            At Mango Pomelo Labs, we explore the frontiers of fluid, context‑aware intelligence. 
            We benchmark adaptability, develop self‑evolving agents, and architect guard‑rails to ensure 
            advanced AI systems remain reliable, interpretable, and aligned with human values.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ backgroundColor: '#f59e0b', color: '#1c1917', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/coming-soon'}
              className="bg-stone-900 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <BookOpen size={20} />
              <span>Learn Our Research</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/coming-soon'}
              className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-stone-100 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View Publications</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;