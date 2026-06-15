import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function signup() {

    if (email === "" || password === "") {

      alert("Please fill all fields");

      return;

    }

    localStorage.setItem("email", email);

    localStorage.setItem("password", password);

    alert("Signup Successful");

    navigate("/");

  }

  return (

    <div className="signup-container">

      <div className="signup-box">

        <h1>Sign Up</h1>

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

        <button onClick={signup}>
          Sign Up
        </button>

        <h3>Already have an account?</h3>

        <button onClick={() => navigate("/")}>
          Login
        </button>

      </div>

    </div>

  );

}

export default Signup;