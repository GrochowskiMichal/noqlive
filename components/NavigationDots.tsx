'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollY } from '../hooks/useScrollY';

interface NavigationDotsProps {
  sections: string[];
}

export function NavigationDots({ sections }: NavigationDotsProps) {
  const scrollY = useScrollY();

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex flex-row md:flex-col md:right-4 md:top-1/2 md:left-auto md:-translate-y-1/2 md:translate-x-0">
      {sections.map((_, index) => (
        <motion.div
          key={index}
          className={`w-2 h-2 md:w-3 md:h-3 rounded-full mx-1 my-1 md:mx-0 md:my-2 cursor-pointer ${
            Math.floor(scrollY / window.innerHeight) === index ? 'bg-[#1A1A1A]' : 'bg-[#CCCCCC]'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })}
        />
      ))}
    </div>
  );
}