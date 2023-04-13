import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { auth } from '../firebase';
import Home from '../Home';

const Mainroutes = () => {
    const [user,setUser] = useState(null)
     useEffect(() => {
       const listen = onAuthStateChanged(auth, (u) => {
         if (u) {
           setUser(u);          
         } else setUser(null);
       });
       return () => {
         listen();
       };
     }, []);
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={user ? <Home /> : <SignIn/>} />
      </Routes>
      
    </div>
  );
}

export default Mainroutes