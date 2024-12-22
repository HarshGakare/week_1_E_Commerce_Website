import React, { useRef } from "react";
import { motion } from "framer-motion"; 
import p1 from "../assets/images/WomensProduct/p1.png";
import p2 from "../assets/images/WomensProduct/p2.png";
import p9 from "../assets/images/WomensProduct/p9.png";
import p10 from "../assets/images/WomensProduct/p10.png";

import p3 from "../assets/images/MensProduct/p3.png";
import p4 from "../assets/images/MensProduct/p4.png";
import p7 from "../assets/images/MensProduct/p7.png";
import p8 from "../assets/images/MensProduct/p8.png";

import p5 from "../assets/images/KidsProduct/p5.png";
import p6 from "../assets/images/KidsProduct/p6.png";
import p11 from "../assets/images/KidsProduct/p11.png";
import p12 from "../assets/images/KidsProduct/p12.png";

const Topbrand = () => {
  const products = [
    { name: "Cool Denim Jacket", brand: "Top Brand", price: "$65", oldPrice: "$120", rating: 4.7, img: p1 },
    { name: "Striped Flutter Sleeve Dress", brand: "Top Brand", price: "$55", oldPrice: "$95", rating: 4.8, img: p2 },
    { name: "Men's Slim Fit ", brand: "Urban Gear", price: "$50", oldPrice: "$80", rating: 4.5, img: p3 },
    { name: "Men's Leather Jacket", brand: "Moto Gear", price: "$120", oldPrice: "$180", rating: 4.8, img: p4 },
    { name: "Kids Blue Denim Jacket", brand: "Mini Style", price: "$40", oldPrice: "$65", rating: 4.7, img: p5 },
    { name: "Kids Pink Puffer Jacket", brand: "Tiny Trendz", price: "$50", oldPrice: "$80", rating: 4.8, img: p6 },
    { name: "Men's Sports jaket", brand: "TechTime", price: "$120", oldPrice: "$150", rating: 4.7, img: p7},
    { name: "Men's jaket", brand: "Speedy", price: "$75", oldPrice: "$120", rating: 4.6, img: p8 },
    { name: "Leather cool drees", brand: "Classic Footwear", price: "$85", oldPrice: "$140", rating: 4.9, img: p9 },
    { name: "Floral Maxi Skirt", brand: "Chic Label", price: "$45", oldPrice: "$75", rating: 4.6, img: p10 },
    { name: "Kids Red Hoodie with Dinosaur Print", brand: "Playtime", price: "$35", oldPrice: "$50", rating: 4.8, img: p11 },
    { name: "Kids Sneakers", brand: "Active Kids", price: "$40", oldPrice: "$60", rating: 4.6, img: p12 },
  ];
  

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section id="next-section2" className="py-8 bg-gray-50 relative w-11/12 mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
        Explore Top Brands
      </h2>
      <div className="relative flex items-center">
        <motion.button
          onClick={scrollLeft}
          className="absolute left-0 z-10 w-12 h-12 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          whileHover={{ scale: 1.2 }} 
        >
          ❮
        </motion.button>

        <div
          ref={scrollRef}
          className="flex gap-8 px-4 overflow-hidden scroll-smooth w-full"
        >
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              className="w-72 flex-shrink-0 bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: idx * 0.2 }} 
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-700">{product.name}</h3>
                <h4 className="text-sm text-gray-500">{product.brand}</h4>
                <div className="flex justify-between mt-2">
                  <div>
                    <span className="text-red-500 font-bold">{product.price}</span>
                    <span className="line-through text-gray-400 ml-2">{product.oldPrice}</span>
                  </div>
                  <div className="text-yellow-500">
                    ⭐ {product.rating}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={scrollRight}
          className="absolute right-0 z-10 w-12 h-12 bg-gray-800 text-white mt-20 rounded-full hover:bg-gray-700 focus:outline-none"
          whileHover={{ scale: 1.2 }} 
        >
          ❯
        </motion.button>
      </div>
    </section>
  );
};

export default Topbrand;
