import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import "./style.css"
import { faCaretRight, faFile, faForward, faHeader, faLock, faPerson, faPersonCircleCheck, faSmile, faUser } from "@fortawesome/free-solid-svg-icons";


const Home=()=>{
    return(
        <div className="homepage">
            <div className="home-style">
              <h1>All Fast Food Is <br/>
              Available at Foodle </h1> 
              <p>
                <FontAwesomeIcon icon={faUser} className="icon3"/>
                We Are Just A Click Away When You <br/>
              Crave For Delicious Fast Food</p> 
              <button className="buy">
                <FontAwesomeIcon icon={faLock} className="icon2"/>
                Buy Now
                </button>
                <button className="buy2">
                    <FontAwesomeIcon icon={faCaretRight} className="icon1"/>
                    How To Order
                </button>

            </div>
            <div>
               <img src="/images/pic1.png"/> 
            </div>

        </div>

    )
}
export default Home;