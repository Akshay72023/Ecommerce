import React, { useState } from 'react';
import Header from "./Componenets/Mainpage/Header";
import Products from "./Componenets/Pages/Products";
import About from "./Componenets/Pages/About";
import Footer from "./Componenets/Mainpage/Footer";
import Cart from "./Componenets/Cart/Cart";
import CartProvider from './Componenets/store/CartProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showCart, setShowCart] = useState(false);  
  const handleCartClick = () => {
    setShowCart(!showCart); 
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <div style={{ flex: "1" }}>
            <Header handleCartClick={handleCartClick} />
            <Routes>
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
        {showCart && <Cart handleCartClick={handleCartClick} />} 
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
