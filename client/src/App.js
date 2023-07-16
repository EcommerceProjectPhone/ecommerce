import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';



import Home from './component/Home.jsx';
import Login from './component/login.jsx';
import Signup from './component/Signup.jsx';
import Pr from './component/index.jsx';
import AddProduct from './component/addProduct/AddProduct.jsx';
import BuyProduct from './component/buyProduct/BuyProduct.jsx';
import UpdateProduct from './component/addProduct/UpdateProduct.jsx';
import AdminDashBord from './component/AdminDashBord.jsx';
import AddCompany from './component/AddCompany.jsx';
import CompanyProfile from './component/CompanyProfile.jsx';

const App = () => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    const storedUserRole = sessionStorage.getItem('userRole');

    if (storedUserId && storedUserRole) {
      setUserId(storedUserId);
      setUserRole(storedUserRole);
    }
  }, []);

  const handleLogin = (newToken, newUserId, newUserRole) => {
    setToken(newToken);
    setUserId(newUserId);
    setUserRole(newUserRole);

    // Store user ID and role in sessionStorage
    sessionStorage.setItem('userId', newUserId);
    sessionStorage.setItem('userRole', newUserRole);
  };

  const handleLogout = () => {
    setToken('');
    setUserId('');
    setUserRole('');

    // Remove user ID and role from sessionStorage
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userRole');
  };
   console.log(userId)

  return (
    <Routes>
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home userId={userId} />} />
      <Route path="/profile" element={<Pr userId={userId} UserRole = {UserRole}  />} />
      <Route path="/add" element={<AddProduct userId={userId} UserRole = {UserRole} />} />
      <Route path="/product" element={<BuyProduct  userId={userId} UserRole = {UserRole}  />} />
      <Route path="/update/:id" element={<UpdateProduct />} />
      <Route path="/admin" element={<AdminDashBord />} />
      <Route path="/addcompany" element={<AddCompany/>}/>
      <Route path="/company/:id" element={<CompanyProfile/>}/>
    </Routes>
  )
}

  


export default App;
