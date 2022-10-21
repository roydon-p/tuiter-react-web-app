import React from "react";
const PostItem = (
    {
        post = {
            "profilepic": "teslalogo.png",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "imgtitle": "",
            "imgdesc": "",
            "comments": "5K",
            "retuits": "3K",
            "likes": "10K"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <img className="rounded-circle" src={`/tuiter/images/${post.profilepic}`} height="50px" width="50px"/>
                </div>
                <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
                    <div className="fw-bolder ps-2">
                        {post.userName}
                        <i className="fas fa-check-circle"></i>
                        <span
                            className="text-secondary fw-lighter"> {post.handle} - {post.time}
                        </span>
                    </div>
                    <div className="fw-light ps-2">
                        {post.title}
                    </div>
                    <div className="border border-dark rounded-2">
                        <img className="rounded-top border-bottom border-dark" src={`/tuiter/images/${post.image}`} width="100%"/>
                            <div className="fw-light ps-2">
                                {post.imgtitle}
                            </div>
                            <div className="text-secondary fw-light ps-2">
                                {post.imgdesc}
                            </div>
                    </div>
                    <ul className="list-group list-group-horizontal justify-content-evenly">
                        <li className="list-group-item border-0">
                            <i className="bi bi-chat me-3"></i>{post.comments}
                        </li>
                        <li className="list-group-item border-0">
                            <i className="bi bi-recycle me-3"></i>{post.retuits}
                        </li>
                        <li className="list-group-item border-0">
                            <i className="bi bi-heart me-3"></i>{post.likes}
                        </li>
                        <li className="list-group-item border-0">
                            <i className="bi bi-upload me-3"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};
export default PostItem;