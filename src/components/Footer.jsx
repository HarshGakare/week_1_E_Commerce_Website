import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-100">About Us</h3>
            <p className="text-sm text-gray-300">
              Welcome to FashionHub, where style meets innovation. Explore our collections and stay trendy!
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-100">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-sm hover:text-yellow-400 transition duration-300 ease-in-out">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-yellow-400 transition duration-300 ease-in-out">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-yellow-400 transition duration-300 ease-in-out">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-yellow-400 transition duration-300 ease-in-out">
                  Contact
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-100">Follow Us</h3>
            <div className="flex gap-6 justify-start md:justify-start">
              <a
                href="https://facebook.com"
                className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i> 
              </a>
              <a
                href="https://twitter.com"
                className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i> 
              </a>
              <a
                href="https://instagram.com"
                className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i> 
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FashionHub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
