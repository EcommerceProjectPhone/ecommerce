import React from "react";

const Profile=({user})=>{

    return (
        <div className="card">
            <div className="card__img">
                <img src={user.coverUrl} alt="Card Image" />
            </div>
            <div className="card__avatar">
                <img src={user.profileUrl} alt="Avatar" />
            </div>
            <div className="card__title">{user.username}</div>
            <div className="card__subtitle">{user.bio}</div>
            <div className="card__wrapper">
                <button className="card__btn">edit profile</button>
            </div>
        </div>
    )
}

export default Profile