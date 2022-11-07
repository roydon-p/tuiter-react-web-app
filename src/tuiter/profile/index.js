import React from "react";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-1 d-flex align-content-center flex-wrap">
                    <Link to="/tuiter/" style={{color:"black", fontSize:"1.5em"}}>
                        <i className="bi bi-arrow-left"></i>
                    </Link>
                </div>
                <div className="col-11">
                    <div className="fw-bold fs-4">Elon Musk</div>
                    <div className="fw-light text-secondary fs-6">5,123 tuits</div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <img src="../../tuiter/images/banner.png" width="100%" alt="profile banner"/>
                </div>
            </div>
            <div className="row">
                <div className="col-3 ps-4 pb-3">
                    <img src="../../tuiter/images/elonmusk.jpeg" alt="profile pic"
                         className="rounded-circle float-start" width={100}/>
                </div>
                <div className="col-9 pt-3 pe-4">
                    <button className="btn border-dark rounded-pill float-end">Edit Profile</button>
                </div>
            </div>
            <div className="ps-3">
                <div className="fw-bold fs-4">Elon Musk</div>
                <div className="fw-light fs-6 text-secondary">@elonmusk</div>
            </div>
        </>
    );
};
export default ProfileComponent;
