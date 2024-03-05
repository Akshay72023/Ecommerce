import React, { useState, useContext } from 'react';
import Header from "./Componenets/Mainpage/Header";
import Products from "./Componenets/Pages/Products";
import About from "./Componenets/Pages/About";
import Home from './Componenets/Pages/Home';
import ContactUs from './Componenets/Pages/ContactUs';
import ProductDetails from './Componenets/Pages/ProductDetails';
import Footer from "./Componenets/Mainpage/Footer";
import Cart from "./Componenets/Cart/Cart";
import Login from './Componenets/Pages/Login';
import CartProvider from './Componenets/store/CartProvider';
import AuthContext from './Componenets/store/auth-context';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const authCtx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);
  const handleCartClick = () => {
    setShowCart(!showCart);
  };
  console.log(authCtx.isLoggedIn)
  return (
    <BrowserRouter> 
        <CartProvider>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <div style={{ flex: "1" }}>
              <Header handleCartClick={handleCartClick} />
              <Routes>
                <Route
                  path='/store'
                  element={authCtx.isLoggedIn ? <Products /> : <Navigate to="/login" />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
                <Route path='*' element={<Navigate to="/" />} />
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
