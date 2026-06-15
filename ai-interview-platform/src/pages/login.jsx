import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (
      email === savedEmail &&
      password === savedPassword
    ) {

      navigate("/dashboard");

    }

    else {

      alert("Invalid Email or Password");

    }

  }

  return (

    <div className="login-container">

      <div className="login-box">

        <h1>AI Interview Preparation Platform</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>
          Login
        </button>

        <h3>or new user? Sign up</h3>

        <button onClick={() => navigate("/signup")}>
          Sign up
        </button>

      </div>

    </div>

  );

}

export default Login;