import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';    


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
    <p>TOP MARKET STATISTICS</p>
    <table id="customers">
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
      {company.map((e, index) => (
        <tr key={index}>
        <td className='i'>
        <img className='img' src={e.Image}/>
        <Link to="/add">
        <div className='a'>
        {e.company}
        </div>
        </Link>
        </td>
        <td>{e.rating}</td>
        <td>hey</td>
      </tr>
      ))}
      </table>
      <button>ADD</button>
    </div>
  )
}

export default AdminDashBord