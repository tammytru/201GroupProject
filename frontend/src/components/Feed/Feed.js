import React, {useEffect, useState} from 'react';
import './styles.css';
import axios from '../../api/axios';
import {Post} from '../index'

export default function Feed() {
    const [posts, setPosts] = useState([])
    const [numPosts, setnumPosts] = useState(0)

    const URL = "/Assignment4Backend/GetExplorePagePosts";
    useEffect (() => {
        try {
        axios.get(URL).then((response) => {
            console.log(response)
            setPosts(response.data);
            var count = response.data.length;
            setnumPosts(count);
        })
        } catch (err) {
        console.log(err)
        }
    }, []);

    return (

        <div>
            {
                Object.keys(posts).map(p => {
                    var i = parseInt(p)+1;
                    return (
                        <div>
                            <Post postID={i} />
                            <br id="break"/>
                        </div>
                    )
                })
            }
        </div>
            
    );
    
};