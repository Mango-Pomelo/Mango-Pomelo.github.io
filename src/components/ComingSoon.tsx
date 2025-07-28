import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Bell } from 'lucide-react';

const MangoLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <img src="/mango_pom.png" alt="Mango Pomelo Labs" className="w-16 h-16 object-contain rounded-full" />
  </div>
);

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <MangoLogo />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-light text-stone-900 mb-6"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-stone-600 mb-8 leading-relaxed"
        >
          We're working hard to bring you this feature. 
          Stay tuned for updates on our latest research and developments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="bg-stone-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 hover:bg-amber-500 hover:text-stone-900"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-stone-300 text-stone-700 px-6 py-3 rounded-lg font-medium hover:bg-stone-100 transition-all duration-300 flex items-center space-x-2"
          >
            <Bell size={20} />
            <span>Notify Me</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg p-6 border border-stone-200 shadow-sm"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Clock className="text-amber-500" size={24} />
            <h3 className="text-lg font-semibold text-stone-900">
              What's Coming
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-stone-600">
            <div className="text-center">
              <div className="font-medium text-stone-900 mb-1">Research Papers</div>
              <div>Latest publications and preprints</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-stone-900 mb-1">Open Source</div>
              <div>Code repositories and datasets</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-stone-900 mb-1">Community</div>
              <div>Discussion forums and collaboration</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-stone-500 text-sm"
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/mango_pom.png" alt="Mango Pomelo Labs" className="w-8 h-8 object-contain rounded-full" />
            </div>
            <span>Mango Pomelo Labs</span>
          </div>
          <div>Agile AGI, Safely Engineered</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;