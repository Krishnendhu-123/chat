import React from "react";
import '../style/styles.css';
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Chat from "./Chat";

function Sidebar() {
 
  return (
  <div className="sidebar">
<Navbar />
<Searchbar/>
<Chat />
  </div>
  );
}

export default  Sidebar ;

