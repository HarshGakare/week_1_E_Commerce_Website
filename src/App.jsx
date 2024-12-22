import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ProductsSection from "./components/ProductsSection";
import Newsletter from "./components/Newsletter";
import Collection from "./components/collection";
import Footer from "./components/Footer";
import Topbrand from "./components/Topbrand";
import MensSection from "./components/MensSection";
import WomensSection from "./components/WomensSection";
import Kidsoffers from "./components/Kidsoffers";
import KidsSection from "./components/KidsSection";
import Mensoffers from "./components/Mensoffers";
import Womensoffers from "./components/Womensoffers";
import Cartsection from "./components/Cartsection";
import ProductDisplay from "./components/ProductDisplay";
import './index.css';
import LoginSection from "./components/LoginSection";

function App() {
  return (
    <Router>
      <div className="font-sans ">
        <Header />
        <main className="space-y-16">
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <div>
                  <HeroSection />
                  <FeatureSection />
                  <Topbrand />
                  <Collection />
                  <ProductsSection />
                  <Newsletter />
                </div>
              }
            />
            {/* Men's Section Route */}
            <Route
              path="/mens"
              element={
                <div>
                  <Mensoffers />
                  <MensSection />
                </div>
              }
            />
            {/* Women's Section Route */}
            <Route
              path="/womens"
              element={
                <div>
                  <Womensoffers />
                  <WomensSection />
                </div>
              }
            />
            {/* Kids' Section Route */}
            <Route
              path="/kids"
              element={
                <div>
                  <Kidsoffers />
                  <KidsSection />
                </div>
              }
            />
            {/* Product Display Route */}
            <Route path="/productdisplay" element={<ProductDisplay />} />
            {/* Cart Section Route */}
            <Route path="/cartsection" element={<Cartsection />} />
            <Route path="/loginsection" element={<LoginSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
