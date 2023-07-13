import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import Navbar from '../Navbar.jsx';

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
      await axios.post('http://localhost:3000/product/add', products);
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
        <h2 className="w3-text-blue">Product </h2>
        <p>
          <label className="w3-text-blue">
            <b>Name product :</b>
          </label>
          <input
            name="name"
            onChange={handleChange}
            className="w3-input w3-border"
            type="text"
          />
        </p>
        <p>
          <label className="w3-text-blue">
            <b>Description :</b>
          </label>
          <input
            name="description"
            onChange={handleChange}
            className="w3-input w3-border"
            type="text"
          />
        </p>
        <p>
          <label className="w3-text-blue">
            <b>Price :</b>
          </label>
          <input
            name="price"
            onChange={handleChange}
            className="w3-input w3-border"
            type="text"
          />
        </p>
        <p>
          <label className="w3-text-blue">
            <b>Stock :</b>
          </label>
          <input
            name="stock"
            onChange={handleChange}
            className="w3-input w3-border"
            type="text"
          />
        </p>
        <p>
          <label className="w3-text-blue">
            <b>Photo :</b>
          </label>
          <input name="imageUrl" type="file" onChange={handleImageUpload} />
        </p>
        <p>
          <button onClick={handleClick} className="w3-btn w3-blue">
            Add product
          </button>
        </p>
      </form>
    </div>
  );
};

export default AddProduct;
