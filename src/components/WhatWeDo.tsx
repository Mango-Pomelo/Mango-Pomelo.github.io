import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Users } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Adaptive Benchmarks',
    description: 'Holistic test suites that stress‑test an AI\'s ability to pivot under domain shifts.',
    color: 'from-amber-400 to-orange-400'
  },
  {
    icon: Shield,
    title: 'Safe Meta‑Learning',
    description: 'Layer‑wise token gating and self‑audit mechanisms to keep emergent behaviors in check.',
    color: 'from-emerald-400 to-teal-400'
  },
  {
    icon: Users,
    title: 'Open Collaboration',
    description: 'Community‑driven datasets, challenge tracks, and reproducible pipelines.',
    color: 'from-blue-400 to-indigo-400'
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            We believe the path to AGI isn't just about scale—it's about flexibility and trustworthiness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-stone-50 rounded-lg p-8 border border-stone-200 hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-lg mb-6 shadow-sm`}
              >
                <pillar.icon className="text-white" size={28} />
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                {pillar.title}
              </h3>
              
              <p className="text-stone-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-stone-50 to-stone-100 rounded-lg p-8 border border-stone-200">
            <h3 className="text-2xl font-semibold text-stone-900 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Our work spans dynamic benchmark design, test‑time adaptation methods, and meta‑learning loops 
              that let models reshape themselves safely in new environments. By open‑sourcing our findings and 
              collaborating with the broader AGI community, we aim to accelerate breakthroughs while embedding 
              robustness and transparency at every step.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;