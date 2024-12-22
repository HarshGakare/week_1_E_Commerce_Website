import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import p1 from "../assets/images/MensProduct/p1.png";
import p2 from "../assets/images/MensProduct/p2.png";
import p3 from "../assets/images/MensProduct/p3.png";
import p4 from "../assets/images/MensProduct/p4.png";
import p5 from "../assets/images/MensProduct/p5.png";
import p6 from "../assets/images/MensProduct/p6.png";
import p7 from "../assets/images/MensProduct/p7.png";
import p8 from "../assets/images/MensProduct/p8.png";
import p9 from "../assets/images/MensProduct/p9.png";
import p10 from "../assets/images/MensProduct/p10.png";
import p11 from "../assets/images/MensProduct/p11.png";
import p12 from "../assets/images/MensProduct/p12.png";

const MensSection = () => {
  const products = [
    {
      id: 1,
      name: "Men Black Leather Bomber Jacket",
      new_price: "$75",
      old_price: "$120",
      rating: 4.9,
      image: p1,
      description: "A premium black leather bomber jacket designed for both comfort and style.",
    },
    {
      id: 2,
      name: "Men Navy Blue Puffer Jacket",
      new_price: "$85",
      old_price: "$140",
      rating: 4.6,
      image: p2,
      description: "A warm and insulated puffer jacket perfect for cold weather, with a sleek navy blue finish.",
    },
    {
      id: 3,
      name: "Men Grey Wool Blend Overcoat",
      new_price: "$95",
      old_price: "$160",
      rating: 4.7,
      image: p3,
      description: "A sophisticated wool blend overcoat, perfect for formal and semi-formal occasions.",
    },
    {
      id: 4,
      name: "Men Olive Green Utility Jacket",
      new_price: "$55",
      old_price: "$100",
      rating: 4.8,
      image: p4,
      description: "A rugged utility jacket with plenty of pockets, ideal for outdoor activities.",
    },
    {
      id: 5,
      name: "Men Red Checkered Shirt Jacket",
      new_price: "$50",
      old_price: "$80",
      rating: 4.5,
      image: p5,
      description: "A casual red checkered shirt jacket, great for layering over your favorite tees.",
    },
    {
      id: 6,
      name: "Men Charcoal Grey Bomber Jacket",
      new_price: "$68",
      old_price: "$115",
      rating: 4.6,
      image: p6,
      description: "A classic charcoal grey bomber jacket with ribbed cuffs and waistband for a snug fit.",
    },
    {
      id: 7,
      name: "Men Tan Suede Jacket",
      new_price: "$90",
      old_price: "$150",
      rating: 4.8,
      image: p7,
      description: "A luxurious tan suede jacket that exudes sophistication and class.",
    },
    {
      id: 8,
      name: "Men Black Denim Jacket",
      new_price: "$65",
      old_price: "$110",
      rating: 4.7,
      image: p8,
      description: "A timeless black denim jacket that complements both casual and semi-formal looks.",
    },
    {
      id: 9,
      name: "Men Green Bomber Jacket with Hood",
      new_price: "$70",
      old_price: "$120",
      rating: 4.9,
      image: p9,
      description: "A stylish green bomber jacket featuring a detachable hood, perfect for cold and windy days.",
    },
    {
      id: 10,
      name: "Men Brown Faux Fur Coat",
      new_price: "$130",
      old_price: "$180",
      rating: 4.8,
      image: p10,
      description: "A cozy brown faux fur coat designed for ultimate warmth and comfort in cold climates.",
    },
    {
      id: 11,
      name: "Men White Varsity Jacket",
      new_price: "$85",
      old_price: "$130",
      rating: 4.7,
      image: p11,
      description: "A classic white varsity jacket with black sleeves, offering both style and comfort.",
    },
    {
      id: 12,
      name: "Men Burgundy Quilted Jacket",
      new_price: "$78",
      old_price: "$135",
      rating: 4.6,
      image: p12,
      description: "A sleek and warm burgundy quilted jacket, perfect for layering during chilly weather.",
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
       <h2 className="text-3xl font-bold text-center">mens Collections</h2>
       <p className="text-center mt-4">Explore our collection of mens fashion, shoes, and accessories!</p>
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

export default MensSection;
