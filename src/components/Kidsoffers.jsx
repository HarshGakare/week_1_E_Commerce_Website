import React from "react";
import { motion } from "framer-motion"; 
import img from "../assets/images/balls.png"; 

const Kidsoffers = () => {
  return (
    <section className="Kidsoffers flex flex-col lg:flex-row mx-auto w-11/12 h-auto bg-gradient-to-r from-pink-200 via-yellow-200 to-teal-200 rounded-lg my-10 shadow-xl">
      <div className="w-full lg:w-1/2 flex flex-col justify-center pl-6 lg:pl-10 space-y-4 py-6">
      
        <motion.h2
          className="mt-6 text-3xl sm:text-4xl font-semibold text-center lg:text-left text-gray-800"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          New Kidsoffers for everyone
        </motion.h2>


        <motion.h6
          className="text-sm sm:text-base lg:text-lg text-center lg:text-left w-full md:w-[24rem] mx-auto lg:mx-0 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }} 
        >
          Step into style with our exclusive Kidsoffers – where fun meets fashion, reimagining your child's wardrobe with color, comfort, and joy.
        </motion.h6>
      </div>


      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
        <motion.img
          className="h-56 sm:h-64 md:h-72 lg:h-64 xl:h-72 px-6 md:px-10 rounded-lg object-cover"
          src={img}
          alt="Kidsoffers Image"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Kidsoffers;
