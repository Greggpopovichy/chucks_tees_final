import React from "react";
import "./SocialIcons.css";

const SocialIcons = () => (
    <div className="fixed-action-btn vertical">
        <a className="btn-floating btn-large red">
            <i className="fa fa-share-square-o"></i>
        </a>
        <ul>
            <li><a className="btn-floating red"><i className="fa fa-facebook"></i></a></li>
            <li><a className="btn-floating yellow darken-1"><i className="fa fa-instagram"></i></a></li>
            <li><a className="btn-floating green"><i className="fa fa-linkedin"></i></a></li>
            <li><a className="btn-floating blue"><i className="fa fa-google-plus-official"></i></a></li>
        </ul>
    </div>

);

export default SocialIcons;