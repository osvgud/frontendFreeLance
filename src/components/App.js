import React, {Component} from 'react';
import {Route} from 'react-router';
import Home from './Home';
import Layout from './Layout';
import Cookies from "universal-cookie";
import jwt from "jwt-decode";

class App extends Component {
    constructor(props) {
        super(props);

        try {
            const cookies = new Cookies();
            let token = jwt(cookies.get('jwt'));
            console.log(token);
            this.state = {
                'UserId': token['UserId'],
                'Role': token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
                'Token': cookies.get('jwt')
            }
        }
        catch (e) {
            console.log("ERROR");
        }
    }

    render() {
        return (
            <div>
                <head>
                    <link href='https://fonts.googleapis.com/css?family=Autour One' rel='stylesheet'/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </head>
                <Layout token={this.state}/>
            </div>
        );
    }
}

export default App;
