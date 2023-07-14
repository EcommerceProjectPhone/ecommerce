import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import axios from 'axios'
import Profile from './components/profile.jsx'
import Posts from './components/post.jsx'
import Photos from './components/photos.jsx'
const App = (id) => {
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
        .catch((err) => alert("failed to post blog"))
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

ReactDOM.render(<App />, document.getElementById('app'))