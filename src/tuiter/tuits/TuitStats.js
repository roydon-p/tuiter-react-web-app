import React from "react";

const TuitStats = ({liked, likes, replies, retuits}) => {
    return(
        <ul className="list-group list-group-horizontal justify-content-evenly">
            <li className="list-group-item border-0">
                <i className="bi bi-chat me-3"></i>{replies}
            </li>
            <li className="list-group-item border-0">
                <i className="bi bi-recycle me-3"></i>{retuits}
            </li>
            <li className="list-group-item border-0">
                {
                    liked && <i className="bi bi-heart-fill me-3" style={{color:"red"}}></i>
                }
                {
                    !liked && <i className="bi bi-heart me-3"></i>
                }
                {likes}
            </li>
            <li className="list-group-item border-0">
                <i className="bi bi-upload me-3"></i>
            </li>
        </ul>
    )
}
export default TuitStats;