import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
const Header = ()=>{
const LogOut=()=>{
    
    window.localStorage.removeItem("email")
    window.location.pathname='/login'
}
return <>

<nav style={{position:"fixed",top:"0",left:"0",height:"100px",width:"100%"}}>
<div className="header">
    <div className="left-1">
        <img src="./images/logo.png" alt="drem x logo" className="logo"c  width={220} height={60} style={{cursor:"pointer"}} />
    </div>
    <div className="midell d-flex-1">
<ul className="d-flex-1"> 
    <li><Link to={'/home'} >Home</Link></li>
    <li><Link to={'/about'} >About</Link></li>
    <li><Link to={'/works'} >Works</Link></li>
    <li><Link to={'/Services'}  >Services</Link></li>
    <li><Link to={'/contact'} >Contct</Link></li>
</ul>
    </div>
 {
   ! window.localStorage.getItem("email") ?  
     <div className="right d-flex-1">
    <Link to={"/login"} className="logs">
        Log In
    </Link>
    <Link to={"/signup"} className="logs">
       Sign Up
    </Link>
</div>
:
<div className="right d-flex-1">
<span onClick={LogOut}  className="logs">
    Log out
</span>
</div>

 }
</div>
</nav>

</>


}


export default Header;