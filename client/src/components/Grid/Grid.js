import React from "react";
import "./Grid.css";
import TShirtOrderCard from '../OrderCards/TShirtOrderCard';
import ApparelModels from '../ApparelModels/ApparelModels';

const Grid = () => (
    <div className="container">
        <div className="row center" id="productTypeRow">
            <br/>
            <a className="waves-effect waves-light btn productBtn">Short Sleeve T-Shirt</a>
            <a className="waves-effect waves-light btn productBtn">Long Sleeve T-Shirt</a>
            <a className="waves-effect waves-light btn productBtn">Sweatshirt</a>
        </div>

        <div className="row">
            <div className="col xl6 s10">
                <ApparelModels/>
            </div>
            <div className="col xl6 s10">
                <TShirtOrderCard/>
            </div>
        </div>
    </div>
);

export default Grid;