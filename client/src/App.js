import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
import Home from './component/Home.jsx';
import Login from '../src/component/login';
import Signup from './component/Signup.jsx';
import Pr from './component/index.jsx';

import AddProduct from "./component/addProduct/AddProduct.jsx";
import BuyProduct from "./component/buyProduct/BuyProduct.jsx";
import UpdateProduct from "./component/addProduct/UpdateProduct.jsx";

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
        <Route path="/profile" element={<Pr />} />
    <Route path= '/add' element={<AddProduct/>}/>
    <Route path= '/product' element={<BuyProduct/>}/>
    <Route path= '/update/:id' element={<UpdateProduct/>}/>
    
    </Routes>

  );
};

export default App;
