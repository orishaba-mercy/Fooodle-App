import React from "react";
// import {Link} from "react-router-dom"
import "./styles.css";

const NavBar=()=>{
    return(
        <nav className="navbar">
            <div>
            <h2>Foodle</h2>
            </div>
          
           <ul>
            <li><a href="home" className="hom">Home</a></li>
            <li><a href="offer">Offer</a></li>
            <li><a href="service">Services</a></li>
            <li><a href="menu">Menu</a></li>
            <li><a href="about us">About Us</a></li>
            <a href="sign in"><button className="btn">Sign In</button></a>
            <a href="sign up"><button>Sign Up</button></a>

           </ul>
           
        </nav>

    );
}
export default NavBar;