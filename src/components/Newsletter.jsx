import React from "react";
import { motion } from "framer-motion"; 
import img from "../assets/images/balls.png"; 
const Newsletter = () => {
  return (
    <section className="newsletter mt-12 flex mx-auto w-11/12 lg:w-11/12 h-[400px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-24 p-8 shadow-xl">

      <div className="w-1/2 flex justify-center items-center">

        <motion.img
          src={img}
          alt="Newsletter"
          className="h-64 object-contain transform transition-all duration-500 hover:scale-105"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
        />
      </div>

\
      <div className="w-1/2 flex flex-col justify-center items-center text-white space-y-6">
        <motion.h2
          className="text-4xl font-extrabold leading-tight text-center"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          Get Exclusive Offers On Your Email
        </motion.h2>
        

        <motion.h6
          className="text-lg font-medium opacity-80 text-center"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.4 }} 
        >
          Subscribe to our newsletter and stay updated with the latest trends!
        </motion.h6>

        <form className="flex mt-6">
          <motion.input
            className="w-64 h-12 text-lg px-4 py-2 rounded-lg bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            type="email"
            placeholder="Enter your email"
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.6 }} 
          />
          
          <motion.button
            className="ml-4 w-32 h-12 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300"
            type="submit"
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
