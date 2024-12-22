import React from "react";
import { useLocation } from "react-router-dom";


const ProductDisplay = () => {
  const location = useLocation();
  const { product } = location.state; 

  return (
    <section className="py-8 w-5/6 mx-auto ">
      <h2 className="text-5xl font-bold text-center mb-16">Product Details</h2>
      <div className="w-5/6 flex mx-auto">
        <div className="w-1/2 flex ">
          <div>
            <img
             src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover mb-4"></img>
            <img 
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover mb-4"></img>
            <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover mb-4"></img>
            <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover "></img>
          </div>
          <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover ml-4"
            />
            </div>
        </div>
        <div className="w-1/2 mt-4 ">
          <h3 className="text-3xl font-semibold mb-2">{product.name}</h3>
          <p className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐ {product.rating}</p>
          <span className="text-xl font-bold line-through  text-gray-500 pr-4">{product.old_price}</span>
          <span className="text-xl font-bold text-red-500">{product.new_price}</span>{" "}
          <p className="text-lg text-gray-700 my-4">{product.description}</p>
          <h1 className="text-xl font-bold text-gray-500">Select Size</h1>
          <div className="mt-4">
            <button  className="px-4 py-2 border-2 mr-4" >S</button>
            <button className="px-4 py-2 border-2 mr-4" >M</button>
            <button className="px-4 py-2 border-2 mr-4" >L</button>
            <button className="px-4 py-2 border-2 mr-4" >XL</button>
            <button className="px-4 py-2 border-2 mr-4" >XXL</button>
          </div>
          <button className="px-10 py-4 bg-red-500 text-white font-bold border-2 border-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 mt-6">

          ADD TO CART
          </button>

        </div>
        
      </div>
    </section>
  );
};

export default ProductDisplay;
