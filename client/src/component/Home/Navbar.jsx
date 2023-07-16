import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./Navbar.css";

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <div className="header">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{ marginRight: "10px", color: "blue", fontSize: "24px" }}
          onClick={handleLogoutClick}
        >
          <ExitToAppIcon />
        </Box>
        <div className="logo">Logo</div>
      </Box>
      <Link to="/home">
        <div className="home">Home</div>
      </Link>
      <Link to="/product">
        <div className="explore">Products</div>
      </Link>
      <Link to="/profile">
        <div className="personal-collection">Profile</div>
      </Link>
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
        {/* Search bar code here */}
      </div>
      <Link to="/admin">
        <div className="more">More</div>
      </Link>
      <div className="vector-6">
        <Avatar
          className="Avatar"
          src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
          sx={{ display: "inline-block" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
