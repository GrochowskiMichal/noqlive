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
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      {sections.map((_, index) => (
        <motion.div
          key={index}
          className={`w-3 h-3 rounded-full my-2 cursor-pointer ${
            Math.floor(scrollY / window.innerHeight) === index ? 'bg-[#1A1A1A]' : 'bg-[#CCCCCC]'
          }`}
          whileHover={{ scale: 1.2 }}
          onClick={() => window.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })}
        />
      ))}
    </div>
  );
}