import React from "react";
import {Link} from "react-router-dom";
import '../index.css'

const EditProfileComponent = () => {
    return(
        <div className="border border-light">
            <div className="row">
                <div className="col-1 d-flex align-content-center flex-wrap">
                    <Link to="/tuiter/" style={{color:"black", fontSize:"1.5em"}}>
                        <i className="bi bi-arrow-left ps-2"></i>
                    </Link>
                </div>
                <div className="col-11">
                    <div className="fw-bold fs-4">Elon Musk</div>
                    <div className="fw-light text-secondary fs-6">5,123 tuits</div>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 pos-relative">
                    <img src="../../tuiter/images/banner.png" width="100%" alt="profile banner"/>
                    <img src="../../tuiter/images/elonmusk.jpeg" alt="profile pic"
                         className="rounded-circle float-start wd-profile-image border border-white"
                         width={100} height={100}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pt-3 pe-4">
                    <button className="btn fw-bold border-dark rounded-pill float-end">Edit Profile</button>
                </div>
            </div>
            <div className="ps-3">
                <div className="fw-bold fs-4">Elon Musk</div>
                <div className="fw-light fs-6 text-secondary">@elonmusk</div>
            </div>
            <div className="ps-3 pt-2">Chief Tuit, Twitter Complaint Hotline Operator</div>
            <ul className="pt-2 list-group list-group-horizontal list-group-flush border border-0">
                <li className="list-group-item border border-0">
                    <i className="bi bi-geo-alt"></i>
                    <span className="ps-1">Boston, MA</span>
                </li>
                <li className="list-group-item border border-0">
                    <i className="bi bi-balloon"></i>
                    <span className="ps-1">Born 1 April 1990</span>
                </li>
                <li className="list-group-item border border-0">
                    <i className="bi bi-calendar3"></i>
                    <span className="ps-1">Joined April 2009</span>
                </li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-flush border border-0">
                <li className="list-group-item border border-0">
                    <span className="fw-bold">340 </span>Following
                </li>
                <li className="list-group-item border border-0">
                    <span className="fw-bold">400 </span>Followers
                </li>
            </ul>
        </div>
    );
};
export default EditProfileComponent;
