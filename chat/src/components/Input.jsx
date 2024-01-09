import React from "react";
import "../style/styles.css";
import i from "./img/images.png";

function Input() {
 
  return (
  <div className="input" >
  <input type="text" placeholder="Message"/> 
 <div className="send">
    <img src={i}/>
 <input type="file" style={{display:"none"}} id="file"/>
<label htmlFor="file">
    <img src={i}/>

</label> 
<button>Send</button>
</div>
</div>

  );
}

export default Input;

