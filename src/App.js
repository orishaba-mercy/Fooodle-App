import React from "react";
// import { Router } from "react-router-dom";
import NavBar from "./Component/Navigation/navbar";
import Home from "./Component/Home/home";
import Offer from "./Component/offers/offers";
import Services from "./Component/Services/services";
import Menu from "./Component/Menu/menu";
import AboutUs from "./Component/AboutUs/aboutUs";
import Special from "./Component/Special/special";


const App =()=>{
    return(
        
        <div>
            <NavBar/>
            <Home/>
            <Offer/>
            <Services/>
            <Menu/>
            <Special/>
            <AboutUs/>
          


        </div>
           
      
    )
};
export default App;
