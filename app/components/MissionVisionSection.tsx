'use client';

import { motion } from 'framer-motion';
import { Target, Shield, Globe, Award } from 'lucide-react';

export default function MissionVisionSection() {
  const cards = [
    {
      icon: Target,
      title: 'Our Mission',
      text: `To connect markets, people, and opportunities through integrity, innovation, and excellence — creating ventures that redefine global standards of trust and sophistication.`,
      accent: '#d4af37', // gold
    },
    {
      icon: Shield,
      title: 'Our Vision',
      text: `To be a global symbol of reliability and class — a name synonymous with quality, ambition, and innovation across industries and continents.`,
      accent: '#C0C0C0', // silver
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      text: 'Striving to deliver beyond expectations in every venture we pursue.',
    },
    {
      icon: Globe,
      title: 'Global Outlook',
      text: 'Building international bridges that unite people and businesses.',
    },
  ];

  return (
    <section className="relative bg-black text-white py-28 md:py-40 overflow-hidden">
      {/* Background Grain */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.25%27/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-20">
        {/* Section Header */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-3"
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/80 font-light">
              Our Philosophy
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent"
          >
            Mission & Vision
          </motion.h2>
        </div>

        {/* Mission + Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.2 }}
              className="relative bg-gradient-to-br from-[#0c0c0c] via-black to-[#0c0c0c] border border-white/10 rounded-3xl p-10 text-left group overflow-hidden"
            >
              {/* Hover Accent Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition duration-700"
                style={{ borderColor: card.accent }}
              />
              
              {/* Light sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${card.accent}22, transparent)`,
                }}
              >
                <card.icon className="w-8 h-8" style={{ color: card.accent }} />
              </div>

              {/* Title */}
              <h3
                className="text-3xl md:text-4xl font-serif font-bold mb-4"
                style={{
                  background: `linear-gradient(to right, ${card.accent}, #fff)`,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {card.title}
              </h3>

              {/* Text */}
              <p className="text-white/60 font-light leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="mt-24 space-y-12">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-4xl font-serif font-bold text-[#f5e7b1]"
          >
            Our Core Values
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: i * 0.2 }}
                className="relative p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-[#111]/50 to-black backdrop-blur-sm group"
              >
                {/* Glow border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{ borderColor: '#d4af37' }}
                />
                <div className="flex items-start gap-4">
                  <v.icon className="w-8 h-8 text-[#d4af37] flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="text-2xl font-serif font-semibold text-white mb-2">
                      {v.title}
                    </h4>
                    <p className="text-white/60 font-light">{v.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
