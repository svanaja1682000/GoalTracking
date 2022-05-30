import React, { useState } from "react";
import login from "./api";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Welcome to Library Management System</h1>
      <form>
        <ul>
          <li>
            <label htmlFor="email">Username</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </li>
          <li>
            <button
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                console.log(`Inside onClick handler: email: ${email}`);
                const response = await login(email, password);
                console.log(`response is ${JSON.stringify(response, null, 2)}`);
                localStorage.setItem("token", response.token);
                console.log(`token: ${localStorage.getItem("token")}`);
                props.onLogin(response.token);
              }}
            >
              Login
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Login;
