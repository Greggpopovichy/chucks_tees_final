import React from "react";
import "./Container.css";
import Nav from '../Nav/Nav';
import SignUpCard from '../SignUpCard/SignUpCard';
import AboutCard from '../AboutCard/AboutCard';
import LoginCard from '../LoginCard/LoginCard';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';
import SocialIcons from '../Social_icons/SocialIcons';


const Container = () => (
    <div>
        <Nav/>
        <div className="pageImage z-depth-5">
            <div className="container">
                <Button/>
            </div>
            <div>

            </div>
            <SocialIcons/>
        </div>
    </div>
);

export default Container;