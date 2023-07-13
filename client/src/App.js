import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
