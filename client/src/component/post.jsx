import React from "react";
import "./profile.css"
const Posts = ({user}) => {
    return (
        <div className="posts">
            <div className="f-card">
                <div className="header">
                    <div className="options"><i className="fa fa-chevron-down"></i></div>
                    <img className="co-logo" src={user.profileUrl} alt=""/>
                    <div className="co-name"><a href="#">{user.username}</a></div>
                    <div className="time"><a href="#">2hrs</a> · <i className="fa fa-globe"></i></div>
                </div>
                <div className="content">
                    <p>Height is optional, if no height is specified the image will be a square. Example: See More</p>
                </div>

                <div className="reference">
                    <img className="reference-thumb" src="http://placehold.it/476x249" alt="" />
                </div>
            </div>
        </div>
    
    )

}

export default Posts