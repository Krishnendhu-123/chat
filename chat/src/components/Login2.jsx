import React from "react";
import "../style/styles.css";
import image from "../components/img/images.png";
function Login2() {
 
  return (
  <div className="formContainer">
    <div className="formWrapper">
        <span className="logo"> Just Chat</span>
        <span className="title"> Login</span>
        <form>
 
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <input  style={{display:"none"}} type="file" id="file"></input>
            <label htmlFor="file"><img src={image}/><span>Add an avatar</span></label>
            
            <button>Sign Up</button>
            
        </form>
        <p> you don't have an account? Register</p>
    </div>
  </div>
  );
}

export default Login2;

