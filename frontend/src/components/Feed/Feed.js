import React, {useEffect, useState} from 'react';
import './styles.css';
import axios from '../../api/axios';
import {Post} from '../index'

export default function Feed() {
    const [posts, setPosts] = useState

    const URL = "/Assignment4Backend/GetExplorePagePosts";
    useEffect (() => {
        try {
        axios.get(URL).then((response) => {
            console.log(response)
            setPosts(response.data);
        })
        } catch (err) {
        console.log(err)
        }
    }, []);

    return (
        // {posts.map((post) => {
        //     console.log(post)
        //     return (
        //         <Post postID={post} />      
        //     )
             
        // })}
        <Post postID={1} />      
    )
    
};