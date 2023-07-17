import React, { useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import Navbar from '../Home/Navbar.jsx';

const UpdateProduct = ({userId,handleLogout}) => {
    const [products, setProducts] = useState({
        name: '',
        description: '',
        price: 0,
        stock: 0,
        
      });
      const navigate = useNavigate();
      const params = useParams()
      console.log(params);
      const handleChange = (e) => {
        setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
      const updateProduct = async (e) => {
        e.preventDefault();
        try{
           await axios.put(`http://localhost:3000/product/${params.id}`, products)
           navigate('/product')

        }catch (err) {
            console.log(err);
          } 
        
    }
  return (
    <div>
      <Navbar userId={userId}  handleLogout={handleLogout} />
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
        </p>
        <p>
          <button onClick={updateProduct} className="btnn">
            Update Product
          </button>
        </p>
      </form>
      
    </div>
  )
}

export default UpdateProduct