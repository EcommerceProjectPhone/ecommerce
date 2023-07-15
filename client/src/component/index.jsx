import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Profile from './profile.jsx'
import Posts from './post.jsx'
import Photos from './photos.jsx'
import "./profile.css"



const Pr = ({userId , UserRole}) => {
    console.log(userId,UserRole) ;
    const [user, setUser] = useState([])
    const [state, setState] = useState(false)
    const [file, setFile] = useState("")
    const [change, setChange] = useState(false)
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/api/profile/get/1`)
            .then((res) => { setUser(res.data) })
            .catch((err) => console.log(err))
    }, [updated,state])
console.log("aaaaa");
    const changeProfile = async (id) => {
        const form = new FormData()
        form.append("file", file)
        form.append("upload_preset", "blogging")
        const res = await axios.post("https://api.cloudinary.com/v1_1/dx3tuofza/upload", form)
        const url = res.data.secure_url
        await axios.patch(`http://127.0.0.1:3000/api/profile/main/${id}`, {
            url:url
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
            url:url2
        })
        .then((res) => { setState(!state) })
        .catch((err) => alert("failed to post blog"))
    }



    return (
        <div>
            <Profile user={user} changeCover={changeCover} changeProfile={changeProfile} setFile={setFile} change={change} setChange={setChange} updated={updated} setUpdated={setUpdated} />
            <Photos />
            <Posts user={user} />
        </div>
    )
}

export default Pr

