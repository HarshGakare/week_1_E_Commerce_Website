import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import p1 from "../assets/images/WomensProduct/p1.png";
import p2 from "../assets/images/WomensProduct/p2.png";
import p3 from "../assets/images/WomensProduct/p3.png";
import p4 from "../assets/images/WomensProduct/p4.png";
import p5 from "../assets/images/WomensProduct/p5.png";
import p6 from "../assets/images/WomensProduct/p6.png";
import p7 from "../assets/images/WomensProduct/p7.png";
import p8 from "../assets/images/WomensProduct/p8.png";
import p9 from "../assets/images/WomensProduct/p9.png";
import p10 from "../assets/images/WomensProduct/p10.png";
import p11 from "../assets/images/WomensProduct/p11.png";
import p12 from "../assets/images/WomensProduct/p12.png";


const WomensSection = () => {
  const products = [
    {
      id: 1,
      name: "Women Black Leather Moto Jacket",
      new_price: "$85",
      old_price: "$150",
      rating: 4.9,
      image: p1,
      description: "A sleek black leather moto jacket that adds an edgy touch to any outfit.",
    },
    {
      id: 2,
      name: "Women Pink Puffer Jacket",
      new_price: "$95",
      old_price: "$160",
      rating: 4.7,
      image: p2,
      description: "A cozy and stylish pink puffer jacket perfect for cold winter days.",
    },
    {
      id: 3,
      name: "Women Grey Wool Coat",
      new_price: "$120",
      old_price: "$180",
      rating: 4.8,
      image: p3,
      description: "A chic grey wool coat, designed for warmth and elegance during chilly days.",
    },
    {
      id: 4,
      name: "Women Olive Green Cargo Jacket",
      new_price: "$65",
      old_price: "$110",
      rating: 4.6,
      image: p4,
      description: "A trendy olive green cargo jacket, perfect for casual outings and layering.",
    },
    {
      id: 5,
      name: "Women Red Plaid Flannel Shirt Jacket",
      new_price: "$50",
      old_price: "$80",
      rating: 4.5,
      image: p5,
      description: "A comfortable red plaid flannel shirt jacket, ideal for a relaxed, cozy look.",
    },
    {
      id: 6,
      name: "Women Tan Faux Fur Vest",
      new_price: "$75",
      old_price: "$130",
      rating: 4.7,
      image: p6,
      description: "A warm and stylish tan faux fur vest, perfect for layering over your favorite outfits.",
    },
    {
      id: 7,
      name: "Women Beige Trench Coat",
      new_price: "$115",
      old_price: "$180",
      rating: 4.9,
      image: p7,
      description: "A timeless beige trench coat, designed for both style and functionality.",
    },
    {
      id: 8,
      name: "Women Black Denim Jacket",
      new_price: "$70",
      old_price: "$110",
      rating: 4.6,
      image: p8,
      description: "A classic black denim jacket that goes with almost any outfit, perfect for all seasons.",
    },
    {
      id: 9,
      name: "Women Burgundy Quilted Jacket",
      new_price: "$85",
      old_price: "$140",
      rating: 4.8,
      image: p9,
      description: "A stylish and cozy burgundy quilted jacket, ideal for casual winter wear.",
    },
    {
      id: 10,
      name: "Women White Faux Shearling Coat",
      new_price: "$130",
      old_price: "$190",
      rating: 4.7,
      image: p10,
      description: "A luxurious white faux shearling coat for a chic and warm winter look.",
    },
    {
      id: 11,
      name: "Women Navy Blue Wool Blend Overcoat",
      new_price: "$110",
      old_price: "$160",
      rating: 4.6,
      image: p11,
      description: "A stylish navy blue wool blend overcoat, perfect for formal and semi-formal events.",
    },
    {
      id: 12,
      name: "Women Yellow Cropped Jacket",
      new_price: "$60",
      old_price: "$95",
      rating: 4.5,
      image: p12,
      description: "A trendy yellow cropped jacket, adding a pop of color to your casual wardrobe.",
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
       <h2 className="text-3xl font-bold text-center">Womens Collections</h2>
       <p className="text-center mt-4">Explore our collection of Womens fashion, shoes, and accessories!</p>
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

export default WomensSection;
