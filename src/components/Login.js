import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";
import Cookies from 'universal-cookie';
import {setServices} from "../actions";

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit = () => {
        axios
            .get("http://freelancework.lt/Auth/"+this.state.username+"/"+this.state.password)
            .then((res) => {
                const cookies = new Cookies();
                cookies.set('jwt', res.data, { path: '/' });
                console.log(cookies.get('jwt'));
            })
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <div className="form-style-2">
                <div className="form-style-2-heading">Login to a website</div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="username">
                        <span>Username</span>
                        <input type="text" className="input-field" name="username" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="password">
                        <span>Password</span>
                        <input type="password" className="input-field" name="password" onChange={this.handleChange}/>
                    </label>
                    <label className={"submitLabel"}><input type="submit" value="Submit" /></label>
                </form>
            </div>

        );
    }
}