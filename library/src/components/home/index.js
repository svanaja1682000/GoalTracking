import React from "react";
import BrowseBooks from "../browse-books";

const Home = (props) => {
  return (
    <>
      <h1>Welcome!</h1>

      <BrowseBooks />

      <button
        onClick={() => {
          localStorage.setItem("token", null);
          props.onLogout();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
