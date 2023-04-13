import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email,password);
  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="SignUp-container">
      <h1>Firebase Authentication </h1>
      <h1>Create An Account</h1>
      <form action="" onSubmit={SignUp}>
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
        <button type="submit"> Sign Up</button>
      </form>
      <p>Don't Have Account...</p>
      <Link to="/signin">
        <button>Sign In Here</button>
      </Link>
    </div>
  );
};

export default SignUp;
