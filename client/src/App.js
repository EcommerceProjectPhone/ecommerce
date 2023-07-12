
import React from "react";
import {Routes,Route } from "react-router-dom"
import './App.css';
import Home from "./component/Home.jsx"
import Login  from "./component/Login.jsx";
import Signup from "./component/Signup.jsx";



const App = () => {

  return (
    <> 
    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/login'  element={<Login/>}/>
    <Route path='/Signup'  element={<Signup/>}/>
    </Routes>
    </>

  );
}

export default App;