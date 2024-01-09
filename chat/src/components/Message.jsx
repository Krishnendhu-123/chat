import React from "react";
import "../style/styles.css";
import i from "./img/images.png";
function Message() {
 
  return (
  <div className="message owner">
 <div className="messageInfo">
    <img src={i}/>
    <span>just now</span>
 </div>
 <div className="messageContent">
    <p>hello there </p>
     <img src={i}/> 
 </div>
  </div>
  );
}

export default Message;

