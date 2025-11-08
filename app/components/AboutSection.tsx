'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function DrBExperience() {
  const containerRef = useRef(null);
  const timelineContainerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  // More accurate scroll tracking for the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start 80%", "end 20%"]
  });

  // More precise timeline fill
  const timelineFill = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const chapters = [
    {
      year: '2020',
      heading: 'The Beginning of Vision',
      text: `Founded in 2020, DrB & Co began as a vision — to build a company that blends ambition, excellence, and global reach. What started as a single travel venture has evolved into a multinational business group.`,
    },
    {
      year: '2022',
      heading: 'Expansion & Excellence',
      text: `By 2022, our growth accelerated as we obtained our Import–Export Trading Licence, expanding into global logistics and international trade. DrB Travels and DrB Logistics together formed our global foundation.`,
    },
    {
      year: 'Today',
      heading: 'A Global Legacy',
      text: `Today, DrB & Co stands as a symbol of reliability, innovation, and class — connecting markets, people, and opportunities across continents.`,
    },
    // {
    //   year: 'Today',
    //   heading: 'A Global Legacy',
    //   text: `Today, DrB & Co stands as a symbol of reliability, innovation, and class — connecting markets, people, and opportunities across continents.`,
    // },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative bg-black text-white overflow-hidden py-28 md:py-40"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-16">
        
        {/* Section heading */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-3"
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/80 font-light">
              Our Journey
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent"
          >
            The DrB Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/60 text-base md:text-lg font-light"
          >
            A cinematic story of ambition, innovation, and global excellence.
          </motion.p>
        </div>

        {/* Timeline Container with accurate scroll tracking */}
        <div ref={timelineContainerRef} className="relative min-h-[400px]">
          
          {/* Vertical Timeline Line - Background */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#d4af37]/10 to-[#d4af37]/10" />
          
          {/* Animated Progress Fill - More accurate */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#d4af37] via-[#ffd700] to-[#f4e5a3] origin-top"
            style={{ 
              height: timelineFill,
            }}
          />

          {/* Chapters with precise positioning */}
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${
                index === chapters.length - 1 ? 'mb-0' : 'mb-16'
              } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              
              {/* Content Box */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gradient-to-br from-black/50 to-black/30 border border-[#d4af37]/20 rounded-2xl p-8 backdrop-blur-sm hover:border-[#d4af37]/40 transition-all duration-500">
                  <div className="text-[#d4af37]/70 text-sm tracking-[0.4em] uppercase mb-4">
                    {chapter.year}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-br from-[#f5e7b1] via-[#d4af37] to-[#a37d24] bg-clip-text text-transparent mb-4">
                    {chapter.heading}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light">
                    {chapter.text}
                  </p>
                </div>
              </div>

              {/* Timeline Node - More precise positioning */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 flex items-center justify-center z-20">
                {/* Progress-aware node fill */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#d4af37] bg-black"
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                />
                
                {/* Inner dot that appears when scrolled to */}
                <motion.div
                  className="w-3 h-3 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffd700]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.3 + 0.2 }}
                />

                {/* Connection line from node to content */}
                <motion.div
                  className={`absolute top-1/2 w-12 h-0.5 bg-gradient-to-r ${
                    index % 2 === 0 
                      ? 'left-full from-[#d4af37] to-transparent' 
                      : 'right-full from-transparent to-[#d4af37]'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-24"
        >
          <p className="italic text-white/50 text-lg">
            "Connecting markets, people, and opportunities across continents."
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </motion.div>
      </div>
    </section>
  );
}