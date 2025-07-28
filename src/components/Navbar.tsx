import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const MangoLogo = () => (
  <div className="w-10 h-10 flex items-center justify-center">
    <img src="/mango_pom.png" alt="Mango Pomelo Labs" className="w-10 h-10 object-contain rounded-full" />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <MangoLogo />
            <div>
              <div className="font-semibold text-stone-900 text-lg">Mango Pomelo Labs</div>
              <div className="text-stone-600 text-xs">Safe AGI Research</div>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/coming-soon" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">Research</a>
            <a href="/coming-soon" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">Publications</a>
            <a href="/coming-soon" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">Team</a>
            <a href="/coming-soon" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ backgroundColor: '#f59e0b', color: '#1c1917' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/coming-soon'}
              className="bg-stone-900 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
            >
              View Publications
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-stone-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="/coming-soon" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">Research</a>
              <a href="/coming-soon" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">Publications</a>
              <a href="/coming-soon" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">Team</a>
              <a href="/coming-soon" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">Contact</a>
              <button 
                onClick={() => window.location.href = '/coming-soon'}
                className="bg-stone-900 text-white px-6 py-2 rounded-lg font-medium w-fit"
              >
                View Publications
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;