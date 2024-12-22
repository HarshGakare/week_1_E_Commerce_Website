import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import p7 from "../assets/images/WomensProduct/p7.png";
import p8 from "../assets/images/WomensProduct/p8.png";
import p9 from "../assets/images/WomensProduct/p9.png";
import p10 from "../assets/images/WomensProduct/p10.png";
import p11 from "../assets/images/WomensProduct/p11.png";

import p1 from "../assets/images/MensProduct/p1.png";
import p2 from "../assets/images/MensProduct/p2.png";
import p3 from "../assets/images/MensProduct/p3.png";
import p4 from "../assets/images/MensProduct/p4.png";
import p5 from "../assets/images/MensProduct/p5.png";

import pk2 from "../assets/images/KidsProduct/p2.png";
import pk3 from "../assets/images/KidsProduct/p3.png";
import pk4 from "../assets/images/KidsProduct/p4.png";
import pk5 from "../assets/images/KidsProduct/p5.png";
import pk6 from "../assets/images/KidsProduct/p6.png";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Striped Flutter Sleeve",
      new_price: "$55",
      old_price: "$95",
      rating: 4.8,
      image: p11,
      description: "A lightweight, knitted, close-fitting pullover with a round neckline.",
    },
    {
      id: 2,
      name: "Floral Maxi Dress",
      new_price: "$85",
      old_price: "$140",
      rating: 4.9,
      image: p10,
      description: "A vibrant floral maxi dress for casual and formal occasions.",
    },
    {
      id: 3,
      name: "Classic Handbag",
      new_price: "$100",
      old_price: "$160",
      rating: 4.7,
      image: p9,
      description: "An elegant handbag to complement any outfit.",
    },
    {
      id: 4,
      name: "Gold Hoop Earrings",
      new_price: "$45",
      old_price: "$70",
      rating: 4.8,
      image: p8,
      description: "Stylish gold hoops that go with every look.",
    },
    {
      id: 5,
      name: "Comfortable Yoga Pants",
      new_price: "$30",
      old_price: "$50",
      rating: 4.6,
      image: p7,
      description: "Stretchable yoga pants for everyday comfort.",
    },
  

    {
      id: 6,
      name: "Slim Fit Jeans",
      new_price: "$50",
      old_price: "$80",
      rating: 4.5,
      image: p1,
      description: "A pair of comfortable and stylish slim-fit jeans.",
    },
    {
      id: 7,
      name: "Leather Jacket",
      new_price: "$120",
      old_price: "$180",
      rating: 4.8,
      image: p2,
      description: "A high-quality leather jacket with a modern fit.",
    },
    {
      id: 8,
      name: "Men's Sneakers",
      new_price: "$70",
      old_price: "$110",
      rating: 4.7,
      image: p3,
      description: "Comfortable sneakers for daily wear.",
    },
    {
      id: 9,
      name: "Formal Shirt",
      new_price: "$45",
      old_price: "$75",
      rating: 4.6,
      image: p5,
      description: "A classic formal shirt perfect for office and events.",
    },
    {
      id: 10,
      name: "Sports Watch",
      new_price: "$90",
      old_price: "$150",
      rating: 4.8,
      image: p4,
      description: "A durable and stylish sports watch with multiple functionalities.",
    },
  
    {
      id: 11,
      name: "Dinosaur Hoodie",
      new_price: "$35",
      old_price: "$50",
      rating: 4.8,
      image: pk2,
      description: "A fun and cozy hoodie with a cute dinosaur print.",
    },
    {
      id: 12,
      name: "Kids Denim Jacket",
      new_price: "$40",
      old_price: "$65",
      rating: 4.7,
      image: pk3,
      description: "A trendy denim jacket designed for kids.",
    },
    {
      id: 13,
      name: "Unicorn Backpack",
      new_price: "$25",
      old_price: "$40",
      rating: 4.9,
      image: pk4,
      description: "A cute unicorn-themed backpack for kids.",
    },
    {
      id: 14,
      name: "Toy Car Set",
      new_price: "$30",
      old_price: "$50",
      rating: 4.7,
      image: pk5,
      description: "A set of vibrant toy cars for endless fun.",
    },
    {
      id: 15,
      name: "Pink Puffer Jacket",
      new_price: "$50",
      old_price: "$80",
      rating: 4.8,
      image: pk6,
      description: "A warm and stylish puffer jacket in a lovely pink shade.",
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
      <h2 className="text-5xl font-bold text-center mb-16">All Collections</h2>

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

export default ProductsSection;
