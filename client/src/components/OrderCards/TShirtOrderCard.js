import React from "react";
import "./TShirtOrderCard.css";
import brownThumb from "./images/brown_30x30.png";
import navyThumb from "./images/navy.jpg";
import greenThumb from "./images/dark_green_30x30.png";
import turqoiseThumb from "./images/turqoise_30x30.jpeg";
import orangeThumb from "./images/orange_30x30.jpg";
import whiteThumb from "./images/white_30x30.jpeg";
import blackThumb from "./images/Solid_black.svg_1_30x30.png";
import greyThumb from "./images/grey.png";

const TShirtOrderCard = () => (
    <div className="card" id="tshirt-card">
        <div className="card-content">
            <span className="card-title">Short Sleeve T-Shirts</span>
            <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
            <ul className="color-list center">
                <li className="thumb"><a href="#"><img src={brownThumb} id="brown"/></a></li>
                <li className="thumb"><a href="#"><img src={navyThumb} id="navy"/></a></li>
                <li className="thumb"><a href="#"><img src={greenThumb} id="green"/></a></li>
                <li className="thumb"><a href="#"><img src={turqoiseThumb} id="turqoise"/></a></li>
                <li className="thumb"><a href="#"><img src={orangeThumb} id="orange"/></a></li>
                <li className="thumb"><a href="#"><img src={whiteThumb} id="white"/></a></li>
                <li className="thumb"><a href="#"><img src={blackThumb} id="black"/></a></li>
                <li className="thumb"><a href="#"><img src={greyThumb} id="grey"/></a></li>
            </ul>
        </div>
    </div>
);

export default TShirtOrderCard;