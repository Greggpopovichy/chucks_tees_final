import React from "react";
import "./Button.css";

const Button = () => (
    <div>
        <a className="waves-effect waves-light btn productBtn">Orders</a>
        <a className="waves-effect waves-light btn productBtn">Inventory</a>
        <a className="waves-effect waves-light btn productBtn">Analytics</a>
    </div>
);

export default Button;