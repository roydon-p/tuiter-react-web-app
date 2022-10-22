import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import {Link} from "react-router-dom";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <Link to="/tuiter/explore" className="nav-link active">For You</Link>
                </li>
                <li className="nav-item">
                    <a href="trending.html" className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href="news.html" className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a href="sports.html" className="nav-link">Sports</a>
                </li>
                <li className="nav-item">
                    <a href="entertainment.html" className="nav-link">Entertainment</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/tuiter/images/starship.webp" alt="spaceX Starship" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;