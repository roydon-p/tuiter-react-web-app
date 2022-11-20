import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuitdata}) => {
    const dispatch = useDispatch()
    const likeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes : tuit.likes + 1,
            liked : true}));
    }
    const unlikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes - 1,
            liked: false}));
    }
    const dislikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1,
            disliked: true}));
    }
    const revdislikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes - 1,
            disliked: false}));
    }
    return(
        <ul className="list-group list-group-horizontal justify-content-evenly">
            <li className="list-group-item border-0">
                <i className="bi bi-chat me-3"></i>{tuitdata.replies}
            </li>
            <li className="list-group-item border-0">
                <i className="bi bi-recycle me-3"></i>{tuitdata.retuits}
            </li>
            <li className="list-group-item border-0">
                {
                    tuitdata.liked &&
                    <i onClick={() => unlikeTuitHandler(tuitdata)}
                       className="bi bi-heart-fill me-3" style={{color:"red"}}></i>
                }
                {
                    !tuitdata.liked &&
                    <i onClick={() => likeTuitHandler(tuitdata)}
                       className="bi bi-heart me-3"></i>
                }
                {tuitdata.likes}
            </li>
            <li className="list-group-item border-0">
                {
                    tuitdata.disliked &&
                    <i onClick={() => revdislikeTuitHandler(tuitdata)}
                       className="bi bi-hand-thumbs-down-fill me-3" style={{color:"red"}}></i>
                }
                {
                    !tuitdata.disliked &&
                    <i onClick={() => dislikeTuitHandler(tuitdata)}
                       className="bi bi-hand-thumbs-down me-3"></i>
                }
                {tuitdata.dislikes}
            </li>
            <li className="list-group-item border-0">
                <i className="bi bi-upload me-3"></i>
            </li>
        </ul>
    )
}
export default TuitStats;