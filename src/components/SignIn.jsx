import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // console.log(email,password);
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signin-container" style={{"border":"1px solid red"}}>
      <h1>Firebase Authentication </h1>
      <h1>Log In</h1>
      <form action="" onSubmit={signIn}>
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
        <button type="submit"> Login</button>
      </form>
      <p>Don't Have Account...</p>
      <Link to="/signup">
        <button>Sign Up Here</button>
      </Link>
    </div>
  );
};

export default SignIn;
