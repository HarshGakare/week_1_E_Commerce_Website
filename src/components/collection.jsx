import React from "react";
import { motion } from "framer-motion";
import img from "../assets/images/balls.png";

const Collection = () => {
  return (
    <section className="Collection mt-12 flex mx-auto w-11/12 md:w-10/12 lg:w-11/12 h-[450px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg mb-16 shadow-lg">

      <div className="w-1/2 flex flex-col justify-center pl-10 text-white space-y-6">
 
        <motion.h2
          className="text-4xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          New Collections for Everyone
        </motion.h2>
       
        <motion.h6
          className="text-lg font-medium opacity-90"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }} 
        >
          Step into style with our exclusive collection – where fashion meets comfort, redefining your wardrobe with elegance and trend.
        </motion.h6>

        <motion.a
          href="#"
          className="inline-block px-6 py-3 mt-6 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Explore Now
        </motion.a>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <motion.img
          className="h-64 object-contain"
          src={img}
          alt="Collection Image"
          initial={{ opacity: 0, x: -60 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Collection;
