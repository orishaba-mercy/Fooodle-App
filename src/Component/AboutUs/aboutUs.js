import React from "react";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";



const AboutUs=()=>{
    return(
        <div className="about">
            <div>
            <h1><span>Fooodish</span></h1>
            <p>Continue Foodish 2023 all rights reserved</p>
            <h1><span>Follow Us On</span></h1>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faPinterest}/>
            <FontAwesomeIcon icon={faTwitterSquare}/>
            <FontAwesomeIcon icon={faFacebook}/>
            
            </div>
            <div>
              <h1><span>Menu</span></h1>
              <p>Home</p>
              <p>Offers</p>
              <p>Service</p>
              <p>About Us</p>
              
            </div>
            <div>
              <h1><span>Information</span></h1>
              <p>Menu</p>
              <p>Quality</p>
              <p>Make a Choice</p>
              <p>Salad with vegetable</p>
              <p>Fast Delivery</p>
              <p>Subscribe</p>
            </div>
            <div>
              <h1><span>Contact</span></h1>
              <p>+123456789</p>
              <p>Explore</p>
              <p>info@Foodish.cam</p>
              <p>1245,New York,USA</p>
              
            </div>

        </div>
    );

};
export default AboutUs;