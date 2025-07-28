import React from 'react';
import { motion } from 'framer-motion';
import { Github, FileText, MessageCircle, ExternalLink } from 'lucide-react';

const highlights = [
  {
    icon: Github,
    title: 'Open Source',
    description: 'Explore our research code',
    link: 'https://github.com/Mango-Pomelo',
    color: 'hover:bg-stone-900 hover:text-white'
  },
  {
    icon: FileText,
    title: 'ArXiv Papers',
    description: 'Latest publications',
    link: '#',
    color: 'hover:bg-amber-400 hover:text-stone-900'
  },
  {
    icon: MessageCircle,
    title: 'Community Forum',
    description: 'Join the discussion',
    link: '#',
    color: 'hover:bg-emerald-400 hover:text-stone-900'
  }
];

const HighlightStrip = () => {
  return (
    <section className="py-16 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light text-stone-900 mb-4">
            Connect & Collaborate
          </h2>
          <p className="text-stone-600">
            Join our community of researchers and practitioners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.a
              key={index}
              href={highlight.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className={`block bg-white rounded-lg p-6 border border-stone-200 transition-all duration-300 ${highlight.color} group`}
            >
              <div className="flex items-center justify-between mb-4">
                <highlight.icon className="text-stone-600 group-hover:text-current transition-colors" size={32} />
                <ExternalLink className="text-stone-400 group-hover:text-current transition-colors" size={16} />
              </div>
              
              <h3 className="text-xl font-semibold text-stone-900 group-hover:text-current mb-2 transition-colors">
                {highlight.title}
              </h3>
              
              <p className="text-stone-600 group-hover:text-current transition-colors">
                {highlight.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightStrip;