import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Products from '../Products';
import Header from '../Header';
import Signup from '../Signup';
import Cart from '../Cart';
import Booking from '../Booking';
import Contact from '../Contact';

const Routing = ({products, cartItems, handleAddProduct, handleRemoveProduct}) => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/menu" element={<Products products={products} handleAddProduct={handleAddProduct}/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/cart"  element={
           <Cart cartItems={cartItems} 
           products={products} 
           handleAddProduct={handleAddProduct}
             handleRemoveProduct={handleRemoveProduct}/>
           } />
           <Route path="/booking" element={<Booking />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
       
      </BrowserRouter>
  )
}

export default Routing;
