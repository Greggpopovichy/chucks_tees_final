import React, { Component } from 'react';
import axios from 'axios';
import "./Container.css";
import Nav from '../Nav/Nav';
import SignUpCard from '../SignUpCard/SignUpCard';
import AboutCard from '../AboutCard/AboutCard';
import LoginCard from '../LoginCard/LoginCard';
import Button from '../Button/Button';
import SocialIcons from '../Social_icons/SocialIcons';

window.axios = axios;

class Container extends Component {

    render(){
        return (
            <div>
                <Nav/>
                <div className="pageImage z-depth-5">
                    <div className="container">
                        <SignUpCard/>
                    </div>
                    <div>

                    </div>
                    <SocialIcons/>
                </div>

            </div>


        )
    }
}


export default Container;