import React from "react";
import "../style/styles.css";
import i from "./img/images.png";

function Navbar() {
 
  return (
  <div className="Navbar">
    <span className="logo">Just Chat</span>
    <div className="user">
       <img src={i}/>
        <span>krish</span>
        <button>login</button>

    </div>

  </div>
  );
}

export default Navbar;

