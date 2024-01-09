
import React from "react"
import Login from "./components/Login";
import "./style/styles.css";
import Login2 from "./components/Login2";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Navbar  from "./components/Navbar";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
 <BrowserRouter>
<Routes>
  <Route path="/">
    <Route index element={<Home />} />
     <Route path="Login" element={<Login/>}/> 
     <Route path="Login2" element={<Login2/>}/>
   </Route>
  </Routes>
   </BrowserRouter> 
 
  );
}

export default App;
