import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ToastMsg from "./components/ToastMsg";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
        setUserEmail(user.email);
      }else{
        setUserName("");
        setUserEmail("");
      }
    })
  },[])

  return (
    <>
      <ToastMsg />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home username={userName} email={userEmail} />} />
          <Route Exact path="/login" element={<Login />} />
          <Route Exact path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
