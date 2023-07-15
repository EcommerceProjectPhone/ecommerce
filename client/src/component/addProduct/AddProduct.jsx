import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import Navbar from '../Navbar.jsx';
import TbProduct from './TbProduct.jsx';

const AddProduct = () => {
  const [products, setProducts] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    imageUrl: null,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/product/add/`, products);
      navigate('/product');
    } catch (err) {
      console.log(err);
    }
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'phoneProduct');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dgcdmrj7x/image/upload',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const imageUrl = response.data.secure_url;
      console.log(imageUrl);
      setProducts((prev) => ({ ...prev, imageUrl: imageUrl }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

      <form  className="w3-container w3-card-4 dvv" action="/action_page.php">
        <p>
          <label className="txxt">
            <h3>Name product :</h3>
          </label>
          <input
            name="name"
            onChange={handleChange}
            className="w3-input w3-border"
            type="text"
          />
        </p>
        <p>
          <label className="txxt">
            <h3>Description :</h3>
          </label>
          <input
            name="description"
            onChange={handleChange}
            className="w3-input w3-border"
            type="text"
          />
        </p>
        <p>
          <label className="txxt">
            <h3>Price :</h3>
          </label>
          <input
            name="price"
            onChange={handleChange}
            className="w3-input w3-border"
            type="text"
          />
        </p>
        <p>
          <label className="txxt">
            <h3>Stock :</h3>
          </label>
          <input
            name="stock"
            onChange={handleChange}
            className="w3-input w3-border"
            type="text"
          />
        </p>
        <p>
          <label className="txxt">
            <h3>Photo :</h3>
          </label>
          <input name="imageUrl" type="file" onChange={handleImageUpload} />
        </p>
        <p>
          <button onClick={handleClick} className="btn">
            Add product
          </button>
        </p>
      </form>
      <TbProduct/>
    </div>
  );
};

export default AddProduct;
