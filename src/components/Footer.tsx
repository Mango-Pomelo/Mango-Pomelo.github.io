import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const MangoLogo = () => (
  <div className="w-8 h-8 flex items-center justify-center">
    <img src="/mango_pom.png" alt="Mango Pomelo Labs" className="w-8 h-8 object-contain rounded-full" />
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <MangoLogo />
              <div>
                <div className="font-semibold text-lg">Mango Pomelo Labs</div>
                <div className="text-stone-400 text-sm">Safe AGI Research</div>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed mb-6">
              Agile AGI, Safely Engineered
            </p>
            <div className="flex items-center space-x-4">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "https://github.com/Mango-Pomelo" },
                { Icon: Linkedin, href: "#" },
                { Icon: Mail, href: "#" }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Research Areas</h3>
            <ul className="space-y-3 text-stone-400">
              <li><a href="/coming-soon" className="hover:text-white transition-colors">Adaptive Benchmarks</a></li>
              <li><a href="/coming-soon" className="hover:text-white transition-colors">Meta-Learning</a></li>
              <li><a href="/coming-soon" className="hover:text-white transition-colors">AI Safety</a></li>
              <li><a href="/coming-soon" className="hover:text-white transition-colors">Test-Time Adaptation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-stone-400">
              <li><a href="/coming-soon" className="hover:text-white transition-colors">Publications</a></li>
              <li><a href="/coming-soon" className="hover:text-white transition-colors">Datasets</a></li>
              <li><a href="/coming-soon" className="hover:text-white transition-colors">Code Repository</a></li>
              <li><a href="/coming-soon" className="hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-stone-400 text-sm mb-4 md:mb-0">
              © 2024 Mango Pomelo Labs. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-stone-400 text-sm">
              <a href="/coming-soon" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/coming-soon" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="mailto:contact@mangopomelo.ai" className="hover:text-white transition-colors">
                contact@mangopomelo.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;