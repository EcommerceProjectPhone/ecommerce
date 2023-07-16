import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from './Posts.jsx'
import Photos from './photos.jsx'
import Profile from "./profile.jsx"
import "./profile.css"



const Pr = ({ userId, UserRole }) => {
    const [user, setUser] = useState([])
    const [state, setState] = useState(false)
    const [file, setFile] = useState("")
    const [change, setChange] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [id, setId] = useState(userId)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(id)
        getProducts(id)
    }, [updated, state])

    const fetch = (id) => {
        axios.get(`http://127.0.0.1:3000/api/profile/get/${id}`)
            .then((res) => { setUser(res.data) })
            .catch((err) => console.log(err))
    }

    const getProducts = (id) => {
        axios.get(`http://localhost:3000/api/profile/prod/${id}`)
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
    }

    const changeProfile = async (id) => {
        const form = new FormData()
        form.append("file", file)
        form.append("upload_preset", "blogging")
        const res = await axios.post("https://api.cloudinary.com/v1_1/dx3tuofza/upload", form)
        const url = res.data.secure_url
        await axios.patch(`http://127.0.0.1:3000/api/profile/main/${id}`, {
            url: url
        })
            .then((res) => { setState(!state) })
            .catch((err) => alert("failed to change profile", err))
    }

    const changeCover = async (id) => {
        const form = new FormData()
        form.append("file", file)
        form.append("upload_preset", "blogging")
        const res = await axios.post("https://api.cloudinary.com/v1_1/dx3tuofza/upload", form)
        const url2 = res.data.secure_url
        await axios.patch(`http://127.0.0.1:3000/api/profile/cover/${id}`, {
            url: url2
        })
            .then((res) => { setState(!state) })
            .catch((err) => alert("failed to post blog"))
    }
    
    return (
        <div>
            <Profile id={id} user={user} changeCover={changeCover} changeProfile={changeProfile} setFile={setFile} change={change} setChange={setChange} updated={updated} setUpdated={setUpdated} />
            <div class="float-parent-element">
                <div class="float-child-element">
                <Photos  className='red' products={products} />
                </div>
                <div class="float-child-element">
                <Posts className='yellow' products={products}  id={id} user={user} />
                </div>
            </div>
        </div>
        
    )
}

export default Pr

