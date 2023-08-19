// import React, { startTransition } from "react"
import React from "react";
import "./menu.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Menu=()=>{
    const menuItems=[
        {
            image:"/images/ch1.png",
            name:"Chicken Burger",
            rating:5,
            price:"$5.80"
        },
        {
            image:"/images/ch2.png",
            name:"Chicken Pizza",
            rating:5,
            price: "$4.20",
        },
        {
            image:"/images/Ch3.png",
            name:"Chicken Fry",
            rating:5,
            price: "$5.00",
        },
        {
            image:"/images/ch4.png",
            name:"Grill Sandwich",
            rating:5,
            price: "$4.80",
        },
        {
            image:"/images/ch5.png",
            name:"Taco Trafic",
            rating:5,
            price: "$3.63",
        },
        {
            image:"/images/ch6.png",
            name:"Noodle's Ramen",
            rating:5,
            price: "$6.50",
        },
    ]
    
    return(
        <div>
            <div className="menu">
                <div className="regular">
                    <div>
                    <h1>Our <span>Regular</span> Menu</h1>
                    <p>These Are Our Rehular Menus.You Can <br/>Order Anything YOU Like. </p>  
                    </div>
                    <div>
                    <button>See All</button>
                    </div>
                </div>
                <div className="img">
                    {menuItems.map((item,index)=>(
                    <div key={index}>
                        <img src={item.image} alt=""/>
                        <h2>{item.name}</h2>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <h2>{item.price}</h2>
                        <button>Buy Now</button>
                    </div>
                    ))}
                   
                    </div>
                    </div>
            </div>

)
}
  export default Menu;



  