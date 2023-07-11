
import React from "react";
import {Routes,Route } from "react-router-dom"
import './App.css';
import Home from "./component/Home.jsx"
import Login from "./component/Login.JSX";

const App = () => {

  return (
    <> 
    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/login'  element={<Login/>}/>
    </Routes>
    </>

  );
}

export default App;