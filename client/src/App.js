import React from "react";
import {Routes,Route } from "react-router-dom"
import './App.css';
import Home from "./component/Home.jsx"
import AddProduct from "./component/addProduct/AddProduct.jsx";
import BuyProduct from "./component/buyProduct/BuyProduct.jsx";
import UpdateProduct from "./component/addProduct/UpdateProduct";

const App = () => {

  return (
    <> 
    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path= '/add' element={<AddProduct/>}/>
    <Route path= '/product' element={<BuyProduct/>}/>
    <Route path= '/update/:id' element={<UpdateProduct/>}/>
    
    </Routes>
    </>
  );
}

export default App;
