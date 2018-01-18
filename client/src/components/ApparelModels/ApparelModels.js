import React from "react";
import "./ApparelModels.css";
import blackModel from "./images/black_model_resized.jpg";

const ApparelModels = () => (
    <div className="card" id="modelCard">
        <img id="blackModelImage" src={blackModel}/>
    </div>
);

export default ApparelModels;