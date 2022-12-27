import React from "react";
// import PostList from "../post-list";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h2>Home</h2>
            <WhatsHappening/>
            <TuitsList/>
            {/*<PostList/>*/}
        </>
    );
};
export default HomeComponent;
