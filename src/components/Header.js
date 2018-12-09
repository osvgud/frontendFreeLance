import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Cookies from "universal-cookie";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    myFunction() {
        let x = document.getElementById("myTopnav");
        console.log(x);
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    render() {
        const {token} = this.props;
        return (
            <div>
                <ul className="topnav" id="myTopnav">
                    <Link to="/">Home</Link>
                    {token ? (<li>
                        <Link to="/services/list">Services</Link>
                        {token['Role'] === 'FreeLancer' ? (
                            <Link to="/freelancer/jobs">Your Jobs</Link>
                        ) : (<span></span>)}
                        {token['Role'] === 'Employer' ? (
                            <Link to="/employer/services">Your Services</Link>
                        ) : (<span></span>)}
                        <Link to="/logout">LogOut</Link>
                    </li>) : (
                        <li>
                            <Link to="/register/freelancer">Register as a FreeLancer</Link>
                            <Link to="/register/employer">Register as an Employer</Link>
                            <Link to="/login">Login</Link>
                        </li>)}
                    <a href="javascript:void(0);" className="icon" onClick={() => this.myFunction()}>
                        <i className="fa fa-bars"></i>
                    </a>
                </ul>
            </div>
        );
    }
}

export default Header;


//<div>
//    <ul className="topnav" id="myTopNav">
//        <Link to="/">Home</Link>
//        {token ? (<div>
//            <Link to="/services/list">Services</Link>
//            {token['Role'] === 'FreeLancer' ? (
//                <Link to="/freelancer/jobs">Your Jobs</Link>
//            ) : (<span></span>)}
//            {token['Role'] === 'Employer' ? (
//                <Link to="/employer/services">Your Services</Link>
//            ) : (<span></span>)}
//            <Link to="/logout">LogOut</Link>
//        </div>) : (
//           <div>
//                <Link to="/register/freelancer">Register as a FreeLancer</Link>
//                <Link to="/register/employer">Register as an Employer</Link>
//                <Link to="/login">Login</Link>
//            </div>)}
//    </ul>
//</div>