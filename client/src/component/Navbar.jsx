import React from "react";
import { Link } from "react-router-dom";
import {  Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import './App.css';



const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <Link to="/home">
      <div className="home">Home</div>
      </Link>
      <Link to="/product">
      <div className="explore">Products</div>
      </Link>
      <div className="personal-collection">Personal Collection</div>
      <div
        className="SearchBar"
        style={{
          width: 358,
          height: 48,
          left: 172,
          top: 26,
          position: "absolute",
        }}
      >
        <div
          className="Rectangle1"
          style={{
            width: 358,
            height: 48,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: 184,
            border: "0.25px rgba(255, 255, 255, 0.50) solid",
          }}
        />
        <img
          className="Vector"
          src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
          style={{
            width: 21,
            height: 21,
            left: 15,
            top: 14,
            position: "absolute",
            
          }}
          alt=""
        ></img>
        <div
          className="SearchItemsFashionCollectionAndUsers"
          style={{
            left: 51,
            top: 16,
            position: "absolute",
            color: "white",
            fontSize: 14,
            fontFamily: "SF Pro Display",
            fontWeight: "400",
            letterSpacing: 0.42,
            wordWrap: "break-word",
          }}
        >
          Search Items, Fashion, Collection and Users
        </div>
      </div>
      <div className="drops">Drops</div>
      <div className="more">More</div>
      <div className="vector-6">
      <Box>
          <Avatar className="Avatar" src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" sx={{display: "inline-block"}}/>
        </Box>
      </div>
    </div>
  );
};

export default Navbar