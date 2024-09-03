import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const QuantumConvenienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const controls = useAnimation();

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 120,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 825,
        delay: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        delay: 0.4
      }
    }
  };

  const flipVariants = {
    front: {
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 130
      }
    },
    back: {
      rotateY: 180,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 130
      }
    }
  };

  const cardData = [
    {
      title: 'Guests Never Wait',
      description: "When time feels like it's moving at their speed, guests order more, stay longer, and keep coming back. Less waiting means more smiles—and more smiles mean better reviews, fuller tables, and a bustling restaurant.",
      icon: '/ico1.svg',
      color: '#E26C52',
    },
    {
      title: 'Revenue Unlocked',
      description: "Guests get what they want before they even know they want it. You get streamlined operations, happier staff, and less chaos in the kitchen. It's like magic, but better—it's built for profit.",
      icon: '/ico2.svg',
      color: '#FAD85D',
    },
    {
      title: 'The Guest Knows Best',
      description: 'Why tell them what they want when they already know? The experience adjusts, adapts, and evolves, making every moment count — with no interruptions.',
      icon: '/ico3.svg',
      color: '#E89C4B',
    },
  ];

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => prev.map((flipped, i) => i === index ? !flipped : flipped));
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-[#F5F3E8] to-[#E6E4D9] overflow-hidden relative"
    >
      <motion.h2
        variants={itemVariants}
        className="font-bungee text-3xl sm:text-5xl md:text-7xl text-[#1A1A1A] mb-6 sm:mb-12 text-center relative"
      >
        Unlock the Secret to
        <br />
        <span className="text-[#E26C52]">Seamless Dining</span>
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="w-full max-w-4xl p-4 sm:p-8 rounded-2xl relative overflow-hidden mb-8 sm:mb-16 border-2 border-[#1A1A1A] shadow-2xl"
      >
        <p className="font-poppins text-lg sm:text-2xl md:text-3xl text-[#333333] relative z-10">
          Imagine if Your guests could have it <b>ALL</b>. <br />
          No waits, no frustrations. <br />Just pure satisfaction with every visit. <br />
          That's what They get.
          <br />
          <span className="text-[#FAD85D] font-bold">NOW</span> here's what{' '}
          <span className="text-[#E89C4B] font-bold">YOU</span> get.
        </p>
      </motion.div>

      {/* Enhanced Interactive Flip Cards with improved RWD */}
      <motion.div
        variants={containerVariants}
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-16 w-full max-w-6xl"
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="w-full sm:w-[calc(50%-1rem)] md:w-80 h-72 sm:h-80 perspective-1000"
          >
            <motion.div
              className="relative w-full h-full cursor-pointer transform-style-3d"
              onClick={() => handleCardFlip(index)}
              animate={flippedCards[index] ? "back" : "front"}
              variants={flipVariants}
            >
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center bg-[#EDEBDF] rounded-xl shadow-lg overflow-hidden backface-hidden border-2 border-black p-4"
                style={{ zIndex: flippedCards[index] ? 0 : 1 }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <motion.div variants={iconVariants} className="flex-grow-0 flex-shrink-0 w-22 h-22 mb-2">
                    <Image
                      src={card.icon}
                      width={180}
                      height={80}
                      alt={card.title}
                    />
                  </motion.div>
                  <motion.h3
                    variants={titleVariants}
                    className="font-bungee text-base sm:text-lg md:text-xl text-black text-center px-2"
                  >
                    {card.title}
                  </motion.h3>
                </div>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-[#EDEBDF] p-4 sm:p-6 rounded-xl border-2 border-[#1A1A1A] shadow-lg text-[#333333] backface-hidden"
                style={{
                  zIndex: flippedCards[index] ? 1 : 0,
                  transform: "rotateY(180deg)"
                }}
              >
                <p className="font-poppins text-xl sm:text-base md:text-xl">{card.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default QuantumConvenienceSection;
