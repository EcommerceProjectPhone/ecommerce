import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from '../Home/Navbar.jsx';   
import Footer from '../Home/Footer.jsx';

import "./admin.css"

const AddCompany =({userId,handleLogout})=>{
const [companyy,setCompanyy]=useState([])
  const [term,setTerm]=useState("")
  const navigate = useNavigate()
  const [file,setFile]=useState(null)
  const add=(term)=>{
    const { company,rating,review,createdAt,Image,sales}=term
    axios.post("http://localhost:3000/company", { company,rating,review,createdAt,Image,sales})
    .then((res)=>{
        setCompanyy([...companyy,res.data])
        navigate("/admin")
    })
    .catch((err)=>console.log(err))
  }

  const uploadImg = async () => {
    const form = new FormData()
    form.append("file", file)
    form.append("upload_preset", "ahmedsm")
  
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dljarbi3r/image/upload",form
      )
      setTerm({ ...term, Image: response.data.secure_url })
    } catch (error) {
      console.log(error)
    }
  }
    return(
      <div>
      <Navbar  userId={userId}  handleLogout = {handleLogout}/>
        <div className='caard'>
        <h2 className='hhhe'>ADD COMPANY</h2>
        <p className='addd'>company :</p>
        <input className='inn' onChange={(e)=>setTerm({...term, company:e.target.value})}/>
        <p className='addd'>rating :</p>
        <input className='inn' onChange={(e)=>setTerm({...term, rating:e.target.value})}/>
        <p className='addd'>review :</p>
        <input className='inn' onChange={(e)=>setTerm({...term, review:e.target.value})}/>
        <input className='inn' placeholder="Add the sales"  onChange={(e)=>setTerm({...term, sales:e.target.value})}/>
        <input className='inn' type='file'  onChange={(e) => setFile(e.target.files[0])} />
        <button className='btn' onClick={uploadImg} >upload !</button>
        <button className='btn' onClick={()=>add(term)}>add</button>
        </div>
        <Footer/>
        </div>
    )
}
export default AddCompany