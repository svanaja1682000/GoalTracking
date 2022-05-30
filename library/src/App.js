import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      {token ? (
        <Home
          onLogout={() => {
            setToken(null);
          }}
        />
      ) : (
        <Login
          onLogin={(token) => {
            console.log(`Inside onLogin method of App ${token}`);
            setToken(token);
          }}
        />
      )}
    </>
  );
}

export default App;
