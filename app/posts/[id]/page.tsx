"use client"


import {useParams} from "react-router";
import React from "react";

const Post=()=> {

    const params = useParams();
    const {id}=params

    return (
        <div>
            <h2>Post for component {id}</h2>
        </div>
    )
}

export default Post;