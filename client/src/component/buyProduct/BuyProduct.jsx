import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import Footer from '../Footer.jsx';
import Navbar from '../Navbar.jsx';
const BuyProduct = ({userId,UserRole}) => {

  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState([]);
  console.log("userrole",UserRole);



const handleClick = async (e, productId) => {
  e.preventDefault();
  try {
    const response = await axios.post(`http://localhost:3000/order/add/${userId}`, {
      productId: productId,
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};



  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const res = await axios.get('http://localhost:3000/product/getAll');
        setProduct(res.data);
        setSearch(res.data);

      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProduct();
    

  }, []);


  const [data , setDAta] = useState(0)


  
  const filterBuyName = (event) => {
    const filteredProducts = search.filter((elem) =>
      elem.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setProduct(filteredProducts);
  };

  return (
    <div>
      <Navbar handleLogout = {handleLogout}/>
      <div className="grid-item item2">
        <svg
          className="layout"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 17"
          fill="none"
        >
          <path
            d="M0 15.7857C0 15.4637 0.127934 15.1548 0.355656 14.9271C0.583379 14.6994 0.892237 14.5714 1.21429 14.5714H8.5C8.82205 14.5714 9.13091 14.6994 9.35863 14.9271C9.58635 15.1548 9.71429 15.4637 9.71429 15.7857C9.71429 16.1078 9.58635 16.4166 9.35863 16.6443C9.13091 16.8721 8.82205 17 8.5 17H1.21429C0.892237 17 0.583379 16.8721 0.355656 16.6443C0.127934 16.4166 0 16.1078 0 15.7857ZM0 8.5C0 8.17795 0.127934 7.86909 0.355656 7.64137C0.583379 7.41365 0.892237 7.28571 1.21429 7.28571H18.2143C18.5363 7.28571 18.8452 7.41365 19.0729 7.64137C19.3006 7.86909 19.4286 8.17795 19.4286 8.5C19.4286 8.82205 19.3006 9.13091 19.0729 9.35863C18.8452 9.58635 18.5363 9.71429 18.2143 9.71429H1.21429C0.892237 9.71429 0.583379 9.58635 0.355656 9.35863C0.127934 9.13091 0 8.82205 0 8.5ZM0 1.21429C0 0.892237 0.127934 0.583379 0.355656 0.355656C0.583379 0.127934 0.892237 0 1.21429 0H27.9286C28.2506 0 28.5595 0.127934 28.7872 0.355656C29.0149 0.583379 29.1429 0.892237 29.1429 1.21429C29.1429 1.53633 29.0149 1.84519 28.7872 2.07292C28.5595 2.30064 28.2506 2.42857 27.9286 2.42857H1.21429C0.892237 2.42857 0.583379 2.30064 0.355656 2.07292C0.127934 1.84519 0 1.53633 0 1.21429Z"
            fill="white"
          />
        </svg>
        <span>
          <p className="fi">Filter</p>
        </span>
        <p className="price">Price :
        <h1>{data}</h1>
        <span> <input type="range" min="0" max="6000" step="1" value={data} onChange={(e)=>setDAta(e.target.value)} /> </span>
        </p>
        <p className="price">Name :
        <span> <input type="text" onChange={filterBuyName}  /> </span>
        
        </p>
        
      </div>
      
       {UserRole !== 'client' && (
        <Link to="/add">
          <button className="btnn">Seller</button>
        </Link>
      )}
      <div className="grid-container">

        {product.map((elem) => {
          return (
            <div className=" item3" key={elem.id}>
              <img className="card-img-top img1" src={elem.imageUrl} alt="" />
              <div className="card-body">
                <p className="card-title title">{elem.name}</p>
                <p className="card-text txt">{elem.description}</p>
                <svg
                  className="rate"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M19.5028 4.29051C19.1968 3.58754 18.7556 2.95052 18.2039 2.41511C17.6518 1.8781 17.0008 1.45134 16.2864 1.15805C15.5456 0.852714 14.7511 0.696426 13.9489 0.698258C12.8236 0.698258 11.7256 1.00403 10.7714 1.5816C10.5431 1.71976 10.3263 1.87152 10.1208 2.03686C9.91539 1.87152 9.69854 1.71976 9.47026 1.5816C8.51609 1.00403 7.41811 0.698258 6.29273 0.698258C5.48237 0.698258 4.69711 0.852276 3.95523 1.15805C3.23846 1.45249 2.59245 1.87604 2.03775 2.41511C1.48533 2.94992 1.04404 3.58709 0.738891 4.29051C0.421594 5.02209 0.259521 5.79898 0.259521 6.59852C0.259521 7.35275 0.414746 8.1387 0.722912 8.93824C0.980859 9.6064 1.35066 10.2995 1.82318 10.9994C2.57191 12.1069 3.60141 13.2621 4.87973 14.4331C6.99809 16.3741 9.0959 17.715 9.18493 17.7694L9.72593 18.1136C9.96561 18.2654 10.2738 18.2654 10.5135 18.1136L11.0545 17.7694C11.1435 17.7127 13.239 16.3741 15.3597 14.4331C16.638 13.2621 17.6675 12.1069 18.4162 10.9994C18.8887 10.2995 19.2608 9.6064 19.5165 8.93824C19.8246 8.1387 19.9799 7.35275 19.9799 6.59852C19.9822 5.79898 19.8201 5.02209 19.5028 4.29051Z"
                    fill="#FF2525"
                  />
                </svg>
                <button onClick={(e) => handleClick(e, elem.id)} href="#" className="btnn btn-primary ">
                
                  {elem.price} $
                </button>
              </div>
            </div>
          );
        })}
       
      </div>
      <Footer/>
    </div>
  );
};

export default BuyProduct;
