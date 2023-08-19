import React from "react"
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faFileAlt, faFolder } from "@fortawesome/free-solid-svg-icons";

const Offer=()=>{
    return(
        <div className="offers">
            <button>
                <FontAwesomeIcon icon={faFolder} className="icon"/>
            <h1>Fast Delivery</h1>
            <h5>The fOOD will Be Delivered To <br/> Your Home Within 1-2Hours Of <br/> Your Ordering</h5>
            
            </button>
            <button>
                <FontAwesomeIcon icon={faArrowsRotate} className="icon"/>
                <h1>Fresh Food</h1>
                <h5>Your Food Will Be Delivered <br/> 100% Fresh To Your Home.WE <br/> Do NOT Deliver Stale Food</h5>
            </button>
            <button>
                <FontAwesomeIcon icon={faFileAlt} className="icon"/>
                <h1>Free Delivery</h1>
                <h5>Your Food Delivery Is <br/>Absolutly Free.No Cost <br/> Just ORDER and Enjoy</h5>

            </button>

        </div>
    )
}
export default Offer;