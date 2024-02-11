import React, { useState } from 'react';
import Header from "./Componenets/Mainpage/Header";
import Products from "./Componenets/Mainpage/Products";
import Footer from "./Componenets/Mainpage/Footer";
import Cart from "./Componenets/Cart/Cart";
import CartProvider from './Componenets/store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);  
  const handleCartClick = () => {
    setShowCart(!showCart); 
  };
return (
    <CartProvider>
      <Header handleCartClick={handleCartClick} />
      <Products />
      <Footer />
      {showCart && <Cart handleCartClick={handleCartClick}/>} 
    </CartProvider>
  );
}

export default App;
