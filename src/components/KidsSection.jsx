import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import p1 from "../assets/images/KidsProduct/p1.png";
import p2 from "../assets/images/KidsProduct/p2.png";
import p3 from "../assets/images/KidsProduct/p3.png";
import p4 from "../assets/images/KidsProduct/p4.png";
import p5 from "../assets/images/KidsProduct/p5.png";
import p6 from "../assets/images/KidsProduct/p6.png";
import p7 from "../assets/images/KidsProduct/p7.png";
import p8 from "../assets/images/KidsProduct/p8.png";
import p9 from "../assets/images/KidsProduct/p9.png";
import p10 from "../assets/images/KidsProduct/p10.png";
import p11 from "../assets/images/KidsProduct/p11.png";
import p12 from "../assets/images/KidsProduct/p12.png";


const KidsSection = () => {
  const products = [
    {
      id: 1,
      name: "Kids Red Hoodie with Dinosaur Print",
      new_price: "$35",
      old_price: "$50",
      rating: 4.8,
      image: p1,
      description: "A cozy red hoodie featuring a fun dinosaur print, perfect for any adventurous kid.",
    },
    {
      id: 2,
      name: "Kids Blue Denim Jacket",
      new_price: "$40",
      old_price: "$65",
      rating: 4.7,
      image: p2,
      description: "A stylish blue denim jacket that pairs well with almost any outfit for a casual look.",
    },
    {
      id: 3,
      name: "Kids Green Zip-Up Jacket",
      new_price: "$30",
      old_price: "$45",
      rating: 4.6,
      image: p3,
      description: "A versatile green zip-up jacket, perfect for layering and staying warm during cool days.",
    },
    {
      id: 4,
      name: "Kids Pink Puffer Jacket",
      new_price: "$50",
      old_price: "$80",
      rating: 4.8,
      image: p4,
      description: "A warm and stylish pink puffer jacket, ideal for cold weather and outdoor activities.",
    },
    {
      id: 5,
      name: "Kids Yellow Raincoat",
      new_price: "$25",
      old_price: "$40",
      rating: 4.7,
      image: p5,
      description: "A bright yellow raincoat to keep your little one dry and cheerful on rainy days.",
    },
    {
      id: 6,
      name: "Kids Purple Fleece Jacket",
      new_price: "$28",
      old_price: "$50",
      rating: 4.6,
      image: p6,
      description: "A soft and comfortable purple fleece jacket, perfect for chilly days and outdoor play.",
    },
    {
      id: 7,
      name: "Kids Navy Blue Hooded Sweatshirt",
      new_price: "$32",
      old_price: "$55",
      rating: 4.7,
      image: p7,
      description: "A navy blue hooded sweatshirt, offering both warmth and style for everyday wear.",
    },
    {
      id: 8,
      name: "Kids Orange Quilted Jacket",
      new_price: "$38",
      old_price: "$60",
      rating: 4.5,
      image: p8,
      description: "A trendy orange quilted jacket that keeps your child cozy while looking fashionable.",
    },
    {
      id: 9,
      name: "Kids Black Bomber Jacket",
      new_price: "$45",
      old_price: "$70",
      rating: 4.8,
      image: p9,
      description: "A cool black bomber jacket that adds a stylish edge to any kid's wardrobe.",
    },
    {
      id: 10,
      name: "Kids Light Blue Fleece Hoodie",
      new_price: "$40",
      old_price: "$60",
      rating: 4.7,
      image: p10,
      description: "A comfy light blue fleece hoodie, perfect for outdoor adventures or casual hangouts.",
    },
    {
      id: 11,
      name: "Kids Red Baseball Jacket",
      new_price: "$48",
      old_price: "$75",
      rating: 4.6,
      image: p11,
      description: "A sporty red baseball jacket, perfect for any young sports fan or active child.",
    },
    {
      id: 12,
      name: "Kids Mint Green Sweater Vest",
      new_price: "$22",
      old_price: "$35",
      rating: 4.5,
      image: p12,
      description: "A cute mint green sweater vest, great for layering over shirts during cooler days.",
    },
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-8 w-11/12 mx-auto mb-1">
       <h2 className="text-3xl font-bold text-center">Kids Collections</h2>
       <p className="text-center mt-4">Explore our collection of Kids fashion, shoes, and accessories!</p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="border p-4 rounded-lg hover:shadow-xl cursor-pointer transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/productdisplay" state={{ product }}>
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
            <div className="flex justify-between">
              <p className="mt-2 text-gray-700">
                <span className="text-red-500">{product.new_price}</span>{" "}
                <span className="line-through text-gray-500">{product.old_price}</span>
              </p>
              <p className="mt-2 text-yellow-500">⭐ {product.rating}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default KidsSection;
