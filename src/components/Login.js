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
            <div>
                <h2>Register as an Employer</h2>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}