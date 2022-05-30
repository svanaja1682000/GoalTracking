import React, { useEffect, useState } from "react";
import { getUserDetails, deleteUser } from "./api";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PostList from "./PostList";
const UserDetails = () => {
  let location = useLocation();
  let user = location.state;
  console.log(`iside user detailes:${JSON.stringify(user, null, 2)}`);
  console.log(user);

  const [userDetails, setUserDetails] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const UserDetails = await getUserDetails(user.id);
      console.log(UserDetails);
      setUserDetails(UserDetails.data);
      console.log(`inside user details:${userDetails}`);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Here are the user details</h1>
      <h1>userDetails</h1>
      <h4>{userDetails.id}</h4>
      <h4>{userDetails.name}</h4>
      <h4>{userDetails.email}</h4>
      <h4>{userDetails.gender}</h4>
      <h4>{userDetails.status}</h4>

     
      <button
        onClick={async (e) => {
          e.preventDefault();

          console.log(user.id);
          const response = await deleteUser(user.id);
          if (!response.error) {
            navigate("/", {});
          } else {
            alert(
              "Error while borrowing: " + JSON.stringify(response.error.detail)
            );
          }
        }}
      >
        Delete User      
        </button>

      <PostList userId={user.id}/>
    </div>
  );
};

export default UserDetails;
