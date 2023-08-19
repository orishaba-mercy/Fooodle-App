import React from "react";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";


const Services =()=>{
    return(
        <div>
            <div className="best">
            <div>
          <h1>Best Delivered <br/><span>Categories</span> </h1>  
        </div>
        <div>
            <p>Here Are Same Of Our Best Distributed <br/>Categories .If you Want You Can Order From Here</p>
        </div>
        </div>
        <div className="Images">
            <div className="pizza">
            <img src="/images/Chicken burger.png"/>
            <h1>Chicken Burger</h1>
            <button>Order Now
            <FontAwesomeIcon icon={"chevron-right"}/>

            </button>
            </div>
            <div className="pizza">
                <img src="/images/Checken pizzaa.png"/>
                <h1>Chicken Pizza</h1>
                <button>Order Now
                <FontAwesomeIcon icon={"chevron-right"}/>

            </button>
            </div>
            <div className="pizza">
                <img src="/images/Flies.png"/>
                <h1>French Fries</h1>
                <button>Order Now
            <FontAwesomeIcon icon={"chevron-right"}/>

            </button>
            </div>
        </div>
        </div>
        
    )
}
export default Services;