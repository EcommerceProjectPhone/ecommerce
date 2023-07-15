import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
import Home from './component/Home.jsx';
import Login from './component/login.jsx';
import Signup from './component/Signup.jsx';
import Pr from './component/index.jsx';
import AddProduct from './component/addProduct/AddProduct.jsx';
import BuyProduct from './component/buyProduct/BuyProduct.jsx';
import UpdateProduct from './component/addProduct/UpdateProduct.jsx';

const App = () => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [UserRole, setUserRole] = useState('');
  const handleLogin = (newToken, newUserId, newUserRole) => {
    setToken(newToken);
    setUserId(newUserId);
    setUserRole(newUserRole)
  };
   console.log(userId)
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home  />} />
      <Route path="/profile" element={<Pr userId={userId} UserRole = {UserRole}  />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/product" element={<BuyProduct  userId={userId} UserRole = {UserRole}  />} />
      <Route path="/update/:id" element={<UpdateProduct />} />
    </Routes>
  );
};

export default App;
