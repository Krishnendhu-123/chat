import React from "react";
import "../style/styles.css";
import i from "./img/images.png";
import Messages from "./Messages";
import Input  from "./Input";

function Realchat() {
 
  return (
  <div className="rchat" >
  <div className="chatInfo">
    <span>riya</span>
    <div className="chatIcons">
        <img src={i}/>
        <img src={i}/>
        <img src={i}/>
    </div>
   
  </div>
  <div className="messages">
        <Messages />
    </div>
    <Input />
  </div>
  );
}

export default Realchat;

