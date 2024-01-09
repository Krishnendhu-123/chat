import React from "react";
import "../style/styles.css";
import i from "./img/images.png";

function Chat() {
 
  return (
<div >
<div className="search">

<div className="userChat">
    <img src={i}/>
    <div className="userChatInfo">
        <span >Riya</span>
        <p style={{color:"lightgray"}}>hello</p>
    </div>
</div>
  </div>

  <div className="search">

<div className="userChat">
    <img src={i}/>
    <div className="userChatInfo">
        <span>Riya</span>
        <p style={{color:"lightgray"}}>hello</p>
    </div>
</div>
  </div>
</div>
 
  );
}

export default Chat;

