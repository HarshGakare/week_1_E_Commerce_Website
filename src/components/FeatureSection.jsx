import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
    { icon: "💰", title: "Lot of Discount", des: "Customers can easily search, browse, and find products from nearby shops." },
    { icon: "📞", title: "Support", des: "Customers can easily search, browse, and find products from nearby shops." },
    { icon: "🛍️", title: "New Fashions", des: "Customers can easily search, browse, and find products from nearby shops." },
    { icon: "⭐", title: "Good Services", des: "Customers can easily search, browse, and find products from nearby shops." },
  ];

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.8 } 
    );

    const section = document.getElementById("next-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="next-section" className="py-16 text-center">
      <motion.h2
        className="text-3xl sm:text-5xl font-bold mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        WE ARE BEST IN <br /> THE MARKET
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-28"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="text-center"
            variants={itemVariants} 
          >
            <div className="flex items-center justify-center text-4xl sm:text-2xl w-20 h-20 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 mx-auto">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mt-2">{feature.title}</h3>
            <h3 className="w-64 text-lg mt-2">{feature.des}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureSection;
