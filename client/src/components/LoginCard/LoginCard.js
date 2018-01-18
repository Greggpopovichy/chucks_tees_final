import React, {Component} from "react";
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import "./LoginCard.css";

class LoginCard extends Component {

    constructor() {
        super();
        this.state = {};
    }

    getValues = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    sendData = (event) => {
        event.preventDefault();

        axios.post('/login', this.state)
            .then((data) => {
                localStorage.setItem('isAuthenticated', JSON.stringify(true));
                this.props.history.push('/dashboard');
            })
            .catch((err) => {
                // Not signed
                console.log("Error Happened");
                console.log(err);
            });
    };

    render() {
        return (
        <div className="card center-align z-depth-4" id="loginCard">
            <h4 className="center-align black-text card-title">Sign Up</h4>
            <form action="/" method="post">
                <div className="form-group" id="userName">
                    <input className="form-control validate" id="userName-input" name="username" type="text"
                           placeholder="Username" onChange={this.getValues} required/>
                </div>

                <div className="form-group" id="password">
                    <input type="password" className="form-control validate" id="password-input" name="password"
                           placeholder="Password" onChange={this.getValues} required/>
                </div>

                <button className="btn waves-effect waves-light red" id="loginSubmit" onClick={this.sendData}>Login</button>

            </form>
        </div>
        )
    };
}

export default LoginCard;