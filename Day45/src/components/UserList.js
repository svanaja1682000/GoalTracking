import React, { useEffect, useState } from "react";
import { getUserList } from "./api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const UserList = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const usersresponse = await getUserList();
      console.log(usersresponse);
      setUsers(usersresponse.data);
    }
    getData();
  }, []);

  return (
    <div className="user-container">
      <h1>Here are the user list </h1>
      {users.map((item) => (
        <div key={item.id}>
          <a
            onClick={() => {
              navigate(`/users/:userid`, { state: { id: item.id } });
            }}
          >
            {item.name}
          </a>

          
        </div>
      ))}
      <button
        onClick={(e) => {
          navigate("/create-user", {});
        }}
      >
        Create_new User
      </button>
    </div>

  );
};

export default UserList;
