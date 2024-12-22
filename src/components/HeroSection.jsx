import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; 
import bg_img from '../assets/images/pr_bg.png';

function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToNextSection2 = () => {
    const nextSection = document.getElementById('next-section2');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative overflow-hidden w-11/12 mx-auto bg-cover bg-center h-[80vh] flex items-center justify-center rounded-3xl mt-10"
      style={{ backgroundImage: `url(${bg_img})` }}
    >

      <div className="z-10 text-white max-w-5xl px-6">

        <motion.h1
          className="absolute top-24 left-12 text-4xl md:text-6xl font-semibold leading-tight"
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          We are digital <br /> meets fashion
        </motion.h1>

        <motion.p
          className="absolute bottom-24 right-10 mt-4 text-lg md:text-xl max-w-md"
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
        >
          Step into style with our exclusive collection – where fashion meets comfort, redefining your wardrobe with elegance and trend.
        </motion.p>
      </div>

      <motion.div
        className="absolute flex items-center justify-center bottom-28"
        initial={{ y: '100vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
      >
        <button
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          onClick={scrollToNextSection2} 
        >
          Start Shopping
        </button>
      </motion.div>

      <div
        className="absolute z-10 bottom-6 cursor-pointer animate-bounce"
        onClick={scrollToNextSection} 
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <FaArrowDown size={40} className="text-white" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
