import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
import "./Navbar.css";

const Navbar = ({  handleLogout, userId }) => {
  const navigate = useNavigate();
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    const fetchAvatarUrl = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/users/getOne/${userId}`);
        const imgUrl = response.data.imgUrl;
        console.log(imgUrl)
        setAvatarUrl(imgUrl);
      } catch (error) {
        console.error("Error fetching avatar URL:", error);
      }
    };

    fetchAvatarUrl();
  }, [userId]);

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
      {/* <div
        className="SearchBar"
        style={{
          width: 358,
          height: 48,
          left: 172,
          top: 26,
          position: "absolute",
        }}
      >
      </div> */}
      <Link to="/admin">
        <div className="more">More</div>
      </Link>
      <div className="vector-6">
        <Avatar 
          className="Avatar"
          src={avatarUrl}
          sx={{ display: "inline-block" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
