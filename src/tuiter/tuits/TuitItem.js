import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/hometuits-reducer";

const TuitItem = (
    {
        tuit = {
            "_id": 111,
            "topic": "Space",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "profilepic": "elonmusk.jpeg",
            "userName": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23 hrs",
            "text": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
            "liked": true,
            "replies": 456,
            "retuits": 123,
            "likes": 1034
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <img className="rounded-circle" src={`/tuiter/images/${tuit.profilepic}`}
                         alt="Profile of account holder" height="50px" width="50px"/>
                </div>
                <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
                    <div className="fw-bolder ps-2">
                        {tuit.userName}
                        <i className="fas fa-check-circle"></i>
                        <span
                            className="text-secondary fw-lighter"> {tuit.handle} - {tuit.time}
                        </span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div className="fw-light ps-2">
                        {tuit.text}
                    </div>
                    <TuitStats
                        liked={tuit.liked}
                        likes={tuit.likes}
                        replies={tuit.replies}
                        retuits={tuit.retuits}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;