import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./component/Home.jsx";
import Login from "./component/Login.jsx";
import Signup from "./component/Signup.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
