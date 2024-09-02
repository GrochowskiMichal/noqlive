'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const sections = ['hero', 'invisible', 'blink', 'stationary', 'cta', 'business'];
  const sectionRefs = sections.map(() => useInView({ triggerOnce: true, threshold: 0.1 }));
  const sectionControls = sections.map(() => useAnimation());

  useEffect(() => {
    sectionRefs.forEach((ref, index) => {
      if (ref[1]) sectionControls[index].start('visible');
    });
  }, [sectionRefs, sectionControls]);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#F5F3E8] to-[#E6E4D9]">
      {/* Navigation Dots */}
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

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center text-center relative px-4 py-8 mb-16 sm:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={sectionRefs[0][0]}
      >
        <motion.h1 
          className="font-bungee text-4xl sm:text-6xl md:text-9xl text-[#1A1A1A] mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          THINK ABOUT IT
        </motion.h1>
        <motion.h2 
          className="font-poppins font-thin text-2xl sm:text-3xl md:text-5xl text-[#333333] max-w-4xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          You're exactly where you want to be.<br/>
          Everything you need is within reach.<br/>
          You haven't moved,<br/> but things start happening.<br/>
          Exactly how you want them.
        </motion.h2>
        <motion.div 
          className="mt-20 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Image src="/scroll.png" width={160} height={40} alt="Scroll down" />
        </motion.div>
      </motion.section>

      {/* Invisible Yet Powerful Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center px-4 py-16 mb-16 sm:mb-0"
        ref={sectionRefs[1][0]}
        initial="hidden"
        animate={sectionControls[1]}
        variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row items-stretch max-w-7xl w-full border-2 border-[#1A1A1A] overflow-hidden shadow-2xl rounded-lg">
          <motion.div 
            className="flex-1 p-6 sm:p-12 flex flex-col justify-center bg-transparent"
            variants={fadeInUp}
          >
            <h2 className="font-bungee font-bold text-4xl sm:text-6xl text-[#1A1A1A] mb-8">Invisible, <br />Yet Powerful</h2>
            <p className="font-poppins text-xl sm:text-3xl leading-relaxed text-[#333333]">
              Have you ever wished things would just come to you?<br/>
              No noise, no fuss. Simply... arrive.<br/>
              It's almost like someone knows exactly what you want,
              and they're ready to bring it.<br/> Directly to you.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 relative bg-[#FAD85D] border-t-2 md:border-t-0 md:border-l-2 border-[#1A1A1A]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image src="/sushi.png" alt="Sushi" layout="fill" objectFit="contain" priority />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Blink of an Eye Section */}
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-[#E26C52] mb-16 sm:mb-0"
        ref={sectionRefs[2][0]}
        initial="hidden"
        animate={sectionControls[2]}
        variants={fadeInUp}
      >
        <motion.div 
          className="w-full max-w-6xl bg-[#EDEBDF] border-2 border-[#1A1A1A] shadow-xl p-6 sm:p-12 mb-12 rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h2 className="font-bungee font-bold text-4xl sm:text-6xl text-[#1A1A1A] text-center">
            In the Blink of an Eye
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch max-w-7xl w-full bg-[#EDEBDF] border-2 border-[#1A1A1A] overflow-hidden shadow-2xl rounded-lg">
          <motion.div 
            className="flex-1 p-6 sm:p-12 flex flex-col justify-center"
            variants={fadeInUp}
          >
            <p className="font-poppins text-xl sm:text-3xl leading-relaxed text-[#333333]">
              What if there were no interruptions?<br/>
              No waiting around. <br/>No waving hands.<br/>
              Just a smooth, continuous experience,
              from start to finish.
              Quick, effortless, seamless...<br/>
              almost as if it's already done in the
              moment you think about it.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 relative p-4 sm:p-8 bg-transparent"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Image src="/wlaptop.png" alt="Laptop" layout="responsive" width={680} height={500} objectFit="contain" priority />
          </motion.div>
        </div>
      </motion.section>

      {/* The Stationary Revolution Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-[#F5F3E8] mb-16 sm:mb-0"
        ref={sectionRefs[3][0]}
        initial="hidden"
        animate={sectionControls[3]}
        variants={fadeInUp}
      >
        <motion.div 
          className="max-w-7xl w-full bg-transparent shadow-2xl border-2 border-[#1A1A1A] p-6 sm:p-12 relative rounded-lg"
          whileHover={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}
        >
          <motion.div 
            className="absolute -top-6 left-12 text-white px-6 py-3 bg-[#1A1A1A] rounded-t-lg"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="font-bold text-xl bg-[#1A1A1A] py-2 px-2 text-[#EDEBDF]">ANSWER</h3>
          </motion.div>
          <div className="flex flex-col md:flex-row justify-between items-start mt-8">
            <motion.div 
              className="w-full md:w-2/3 pr-0 md:pr-8"
              variants={fadeInUp}
            >
              <h2 className="font-bungee font-bold text-4xl sm:text-6xl text-[#1A1A1A] mb-6">
                The Stationary<br />Revolution
              </h2>
              <p className="font-poppins font-semibold text-2xl sm:text-4xl text-[#333333] mb-8">
                How can staying put bring<br/>
                the world to your fingertips?
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <motion.div 
                  className="bg-yellow-300 border border-[#1A1A1A] inline-block px-3 py-2 mb-4 sm:mb-0 sm:mr-4 rounded-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-regular text-xl sm:text-2xl text-[#1A1A1A]">convenience</span>
                </motion.div>
                <p className="text-xl sm:text-2xl leading-relaxed text-[#1A1A1A] sm:ml-8">
                  The less you move, the more happens.<br />
                  The less you wait, the more you get.<br />
                  Stay exactly where you are, and watch as<br />
                  everything you need falls perfectly into place.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/3 mt-8 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Image src="/ramen.png" alt="Ramen" layout="responsive" width={500} height={500} objectFit="contain" priority />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Final Call to Action Section */}
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8 mb-16 sm:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={sectionRefs[4][0]}
      >
        <motion.h1 
          className="font-bungee font-bold text-4xl sm:text-6xl text-[#1A1A1A] mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          STAY SEATED, STAY TUNED
        </motion.h1>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
        >
          <Image src="/logowslang.svg" alt="Logo" layout="responsive" width={700} height={200} priority />
        </motion.div>
      </motion.section>

      {/* Business Contact Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-[#F5F3E8]"
        ref={sectionRefs[5][0]}
        initial="hidden"
        animate={sectionControls[5]}
        variants={fadeInUp}
      >
        <div className="max-w-4xl w-full">
          <motion.div 
            className="bg-transparent p-4 mb-10 sm:mb-20 border-2 border-[#1A1A1A] shadow-md w-full sm:w-7/12 rounded-lg"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2 className="font-bungee text-3xl sm:text-4xl text-[#1A1A1A] px-2 py-2">Business Contact</h2>
          </motion.div>
    
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-stretch bg-[#F5F3E8] border-2 border-[#1A1A1A] overflow-hidden shadow-lg rounded-lg"
            whileHover={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
          >
            <motion.div 
              className="flex-1 p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-[#1A1A1A]"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, zIndex: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.h3 
                className="font-poppins font-semibold text-4xl sm:text-6xl mb-5 text-[#E89C4B]"
              >
                Kacper Migdał
              </motion.h3>
              <motion.h3 
                className="font-poppins font-semibold text-2xl sm:text-3xl mb-4 text-[#333333]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Chief Business Samurai
              </motion.h3>
              <motion.p 
                className="font-poppins text-xl sm:text-2xl text-[#1A1A1A] mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <a href="mailto:kacper@noqueue.pl" className="hover:underline">kacper@noqueue.pl</a>
              </motion.p>
              <motion.p 
                className="font-poppins text-lg sm:text-xl text-[#1A1A1A]"
                whileHover={{ scale: 1.05 }}
              >
                <a href="https://www.linkedin.com/in/kacper-migdał-781b7b219/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex-1 p-6"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, zIndex: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.h3 
                className="font-poppins font-semibold text-4xl sm:text-6xl mb-5 text-[#FAD85D]"
              >
                Michał Grochowski
              </motion.h3>
              <motion.h3 
                className="font-poppins font-semibold text-2xl sm:text-3xl mb-4 text-[#333333]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Chief Technology Ninja
              </motion.h3>
              <motion.p 
                className="font-poppins text-xl sm:text-2xl text-[#1A1A1A] mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <a href="mailto:michal@noqueue.pl" className="hover:underline">michal@noqueue.pl</a>
              </motion.p>
              <motion.p 
                className="font-poppins text-lg sm:text-xl text-[#1A1A1A]"
                whileHover={{ scale: 1.05 }}
              >
                <a href="https://www.linkedin.com/in/mikegrochowski/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}