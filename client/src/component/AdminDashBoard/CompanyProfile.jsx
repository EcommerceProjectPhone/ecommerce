import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Home/Navbar.jsx';   
import "./admin.css"

const CompanyProfile = ({handleLogout}) => {
  const [companyy, setCompanyy] = useState(null)
  const [showUpdate, setShowUpdate] = useState(false)
  const [term,setTerm]=useState("")
  const { id } = useParams()
  const navigate = useNavigate()

  const getOne = (id) => {
    axios
      .get(`http://localhost:3000/company/${id}`)
      .then((res) => setCompanyy(res.data))
      .catch((err) => console.log(err))
  }
  const update=(id,term)=>{
    const { company,rating,review}=term
    axios.put(`http://localhost:3000/company/${id}`,{ company,rating,review})
    .then((res)=>{
        setCompanyy(null)
        navigate("/admin") 
    })
    .catch((err)=>console.log(err))
}
const delet=(id)=>{
    axios.delete(`http://localhost:3000/company/${id}`)
    .then((res)=>{
        setCompanyy(null)       
        navigate("/admin")
    })
    .catch((err)=>console.log(err))
}
 

  useEffect(() => {
    getOne(id)
  }, [id])

  if (!companyy) {
    return null
  }

  const handleUpdateClick = () => {
    setShowUpdate(!showUpdate)
  }

  return (
    <div>
    <Navbar handleLogout={handleLogout}/>
      <div className="containerr">
        <div className="profilee">
          <img src={companyy.Image} className="nin" alt="Company Logo" />
          <h2>{companyy.company}</h2>
          <p>Review:</p>
          <p>{companyy.review}</p>
          <img onClick={()=>delet(companyy.id)} className='oo' src='https://cdn-icons-png.flaticon.com/512/1345/1345874.png'/>
        </div>
      </div>
      <button className="btn" onClick={handleUpdateClick}>
        Update
      </button>
      {showUpdate && (
        <div className="caard">
          <h2 className="hhhe">UPDATE COMPANY</h2>
          <p className="addd">Update company:</p>
          <input className="inn" onChange={(e)=>setTerm({...term,company:e.target.value})}/>
          <p className="addd">Update rating:</p>
          <input className="inn" onChange={(e)=>setTerm({...term,rating:e.target.value})}/>
          <p className="addd">Update review:</p>
          <input className="inn" onChange={(e)=>setTerm({...term,review:e.target.value})}/>
          <button className='btn' onClick={()=>update(companyy.id,term)}>submit</button>
        </div>
      )}
     
    </div>
  )
}

export default CompanyProfile;
