import React, {Component} from 'react';
import Cookies from "universal-cookie";
import  { Redirect } from 'react-router-dom'

class Logout extends Component {
    render() {
        const cookies = new Cookies();
        cookies.remove('jwt');
        return (
            <Redirect to='/login'  />
        );
    }
}

export default Logout;