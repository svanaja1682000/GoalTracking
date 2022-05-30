import React, { useEffect, useState } from 'react'
import {getAllPosts } from './api'
import Post from './Post';
import { useNavigate } from 'react-router-dom';

const PostList = ({userId}) => {
    const [posts,setPosts]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        async function getData(){
            const postsResponse=await getAllPosts(userId);
            console.log(posts);
            setPosts(postsResponse.data)
        }
        getData();
    },[]);
    console.log("Inside Post List")
  return (
    <div><h1>Posts</h1>
    
    {posts.map((post)=>(
    <Post title={post.title} body={post.body} key={post.id}/>)
   
    )}
 <button  onClick={(e)=>{
     navigate(`/users/${userId}/create-post`,{state:{userId:userId}},)
 }}
>Create Post</button>   
    </div>
  );
}

export default PostList;