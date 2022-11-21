import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    // const tuitsArray = useSelector(state => state.hometuits)
    const {tuits, loading} = useSelector(state => state.hometuitData)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [])  //eslint-disable-line react-hooks/exhaustive-deps

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading &&
                tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;