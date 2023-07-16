import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'; 
import Navbar from '../../src/component/Navbar.jsx';   
import Footer from './Footer.jsx';
import "./admin.css"

const AdminDashBord=()=>{
    const [company,setCompany]=useState([])
    const getAllCompanies=()=>{
        axios.get("http://localhost:3000/company")
        .then((res)=> {
            setCompany(res.data)
            console.log(res.data)
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
     getAllCompanies()
    },[])
    
  return (
    <div>
    <Navbar/>
    <div>
    <h1 className='claa'>TOP MARKET STATISTICS</h1>
    <table id="customers">
    <tr>
      <th>Company</th>
      <th>Rating</th>
      <th> </th>
    </tr>
      {company.map((e, index) => (
        <tr key={index}>
        <td className='i'>
        <img className='img' src={e.Image}/>
        <Link to={`/company/${e.id}`} key={e.id}>
        <div className='a'>
        {e.company}
        </div>
        </Link>
        
        </td>
        <td className='rat'>
        {e.rating}
        <img className='iv' src='https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png'/>
        </td>
        <td>hey</td>
      </tr>
      ))}
      </table>
      <Link to="/addcompany">
      <button id='iiid' className='btn'>ADD</button>
      </Link>
    </div>
    <Footer/>
    </div>
  )
}

export default AdminDashBord