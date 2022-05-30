import React from "react";

import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetailes";
import CreateNewUser from "./components/CreateUSer";
import  PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
 

function App() {
  return (    
    <>
    <h1>Welcome</h1>
       <Routes>
        <Route path="/" element={<UserList />} />
         <Route path="/users/:userid" element={<UserDetails />} />
       <Route path="/create-user" element={<CreateNewUser />} />
       <Route path="/:userid/posts" element={<PostList />} />
       <Route path="/users/:userId/create-post" element={<CreatePost/>}/>
        

      </Routes> 
    </>
  );
}


export default App;
