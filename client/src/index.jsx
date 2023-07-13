import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import axios from 'axios'
import Profile from './components/profile.jsx'
import Posts from './components/post.jsx'
const App = (id) => {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/api/profile/get/1`)
            .then((res) => { setUser(res.data) })
            .catch((err) => console.log(err))
    }, [])

    const editProfile = (id) => {
        axios.patch(`http://127.0.0.1:3000/api/profile/edit/${id}`)
            .then((res) => alert("changed successfully"))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <Profile user={user} />
            <Posts user={user} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
