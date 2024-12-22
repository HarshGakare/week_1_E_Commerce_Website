import React from "react";

const CartSection = () => {
  return (
    <div className="w-11/12 mx-auto p-4 mt-16">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left border border-gray-300">Products</th>
            <th className="p-3 text-left border border-gray-300">Title</th>
            <th className="p-3 text-left border border-gray-300">Price</th>
            <th className="p-3 text-left border border-gray-300">Quantity</th>
            <th className="p-3 text-left border border-gray-300">Total</th>
            <th className="p-3 text-left border border-gray-300">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border border-gray-300">
              
            </td>
            <td className="p-3 border border-gray-300">
            </td>
            <td className="p-3 border border-gray-300"></td>
            <td className="p-3 border border-gray-300">
            </td>
            <td className="p-3 border border-gray-300"></td>
            <td className="p-3 border border-gray-300 text-center">
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-6">
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4 items-center">
        <div>
        <p className="mb-4">If you have a promo code, Enter it here</p>
        <div>
          <input
            type="text"
            placeholder="Promo code"
            className="border border-gray-300 p-2 w-full lg:w-auto"
            />
          <button className="bg-black text-white px-4 py-2">Submit</button>
            </div>
         </div>
        </div>

        <div className="w-full lg:w-1/2 border border-gray-300 p-4 mt-6 lg:mt-0">
          <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>$0</span>
          </div>
          <button className="mt-6 bg-red-500 text-white w-full py-2">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
