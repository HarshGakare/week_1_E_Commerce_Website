

import React, { useState } from "react";
import { motion } from "framer-motion"; 

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", email, password);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <motion.div
        className="w-full sm:w-96 bg-white rounded-lg p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-600 mt-2">Please login to continue</p>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="remember" className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2 h-4 w-4"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default LoginSection;
