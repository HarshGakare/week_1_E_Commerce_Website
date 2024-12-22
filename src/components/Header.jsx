
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation(); 
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [cartItems, setCartItems] = useState(0); 

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="flex justify-between items-center p-6 shadow-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 ">
      <motion.div
        className="text-4xl font-extrabold text-white tracking-wide"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        FashionHub
      </motion.div>

      <nav className="hidden md:flex gap-10">
        {['/', '/mens', '/womens', '/kids'].map((path, index) => (
          <motion.div
            key={path}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <Link
              to={path}
              onClick={() => handleLinkClick(path)}
              className={`${
                activeLink === path ? 'text-yellow-300' : 'text-white'
              } text-lg font-medium hover:text-yellow-500 transition-all duration-300 tracking-wide`}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="flex gap-6 items-center">
        <Link to="/loginsection">
          <motion.button
            className="text-sm bg-black font-semibold text-white px-6 py-2 rounded-md transform hover:scale-200 transition-all duration-300 shadow-md hover:shadow-xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Login
          </motion.button>
        </Link>

        <motion.button
          className="relative text-sm p-3 transform hover:scale-110 transition-all duration-300"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <Link to="/Cartsection">
            <i className="fas fa-shopping-cart fa-2x text-white"></i>
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold shadow-lg">
                {cartItems}
              </span>
            )}
          </Link>
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
