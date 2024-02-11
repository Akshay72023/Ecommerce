import React, { useState } from 'react';
import Header from "./Componenets/Mainpage/Header";
import Products from "./Componenets/Mainpage/Products";
import Footer from "./Componenets/Mainpage/Footer";
import Cart from "./Componenets/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false); 

  
  const handleCartClick = () => {
    setShowCart(!showCart); 
  };

  

  return (
    <div>
      <Header handleCartClick={handleCartClick} />
      <Products />
      <Footer />
      {showCart && <Cart handleCartClick={handleCartClick}/>} 
    </div>
  );
}

export default App;
