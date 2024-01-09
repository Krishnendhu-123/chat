import React from "react";
import "../style/styles.css";
import i from "./img/images.png";
function Searchbar() {
 
  return (
  <div className="search">
<div className="searchform">
    <input type="text" placeholder="Find a User"/>
</div>
<div className="userChat">
    <img src={i}/>
    <div className="userChatInfo">
        <span>Riya</span>
    </div>
</div>
  </div>
  );
}

export default Searchbar;

