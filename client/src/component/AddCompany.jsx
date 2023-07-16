import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from '../../src/component/Navbar.jsx';   

const AddCompany =()=>{
const [companyy,setCompanyy]=useState([])
  const [term,setTerm]=useState("")
  const navigate = useNavigate()
  const [file,setFile]=useState(null)
  const add=(term)=>{
    const { company,rating,review,createdAt,Image}=term
    axios.post("http://localhost:3000/company", { company,rating,review,createdAt,Image})
    .then((res)=>{
        setCompanyy([...companyy,res.data])
        navigate("/heey")
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
      <Navbar/>
        <div className='caard'>
        <h2 className='hhhe'>ADD COMPANY</h2>
        <p className='addd'>company :</p>
        <input className='inn' onChange={(e)=>setTerm({...term, company:e.target.value})}/>
        <p className='addd'>rating :</p>
        <input className='inn' onChange={(e)=>setTerm({...term, rating:e.target.value})}/>
        <p className='addd'>review :</p>
        <input className='inn' onChange={(e)=>setTerm({...term, review:e.target.value})}/>
        <input className='inn' type='file'  onChange={(e) => setFile(e.target.files[0])} />
        <button className='btn' onClick={uploadImg} >upload !</button>
        <button className='btn' onClick={()=>add(term)}>add</button>
        </div>
        </div>
    )
}
export default AddCompany