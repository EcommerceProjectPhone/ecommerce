import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import "./Navbar.css"
import "./Footer.css"
import "./Home.css"
import Home from './component/Home.jsx';
import Login from '../src/component/login';
import Signup from './component/Signup.jsx';

import AddProduct from "./component/addProduct/AddProduct.jsx";
import BuyProduct from "./component/buyProduct/BuyProduct.jsx";
import UpdateProduct from "./component/addProduct/UpdateProduct";

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
 
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
    <Route path= '/add' element={<AddProduct/>}/>
    <Route path= '/product' element={<BuyProduct/>}/>
    <Route path= '/update/:id' element={<UpdateProduct/>}/>
    
    </Routes>

  );
};

export default App;
