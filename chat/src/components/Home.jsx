import React from "react";
import "../style/styles.css";

import Sidebar from "./Sidebar";

import Chat from "./Chat";
import Navbar from "./Navbar";
import Realchat from "./Realchat";

function Home() {
 
  return (
  <div className="Home">
    <div className="container">
       <Sidebar />
       <Realchat />
     
     
   
    </div>
  </div>
  );
}

export default Home;

