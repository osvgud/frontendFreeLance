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
                    <Link to={"/"}><img className={"svgicon"} src='https://svgshare.com/i/9q7.svg'/> Home</Link>
                    {token ? (<li>
                        <Link to={"/services/list"}><img className={"svgicon"} src={'https://svgshare.com/i/9pi.svg'}/> Services</Link>
                        {token['Role'] === 'FreeLancer' ? (
                            <li>
                            <Link to="/freelancer/jobs"><img className={"svgicon"} src={"https://svgshare.com/i/9qo.svg"}/> Your Jobs</Link>
                            <Link to="/freelancer/profile"><img className={"svgicon"} src={"https://svgshare.com/i/9tJ.svg"}/> My Profile</Link>
                            </li>
                        ) : (<span></span>)}
                        {token['Role'] === 'Employer' ? (
                            <Link to={"/employer/services"}><img className={"svgicon"} src={'https://svgshare.com/i/9pC.svg'}/> Your Services</Link>
                        ) : (<span></span>)}
                        <a href={"/logout"}><img className={"svgicon"}src='https://svgshare.com/i/9q8.svg'/> Logout</a>
                    </li>) : (
                        <li>
                            <a href={"/login"}><img className={"svgicon"} src='https://svgshare.com/i/9rK.svg' title='login' /> Login</a>
                            <Link to={"/register/freelancer"}><img className={"svgicon"} src={"https://svgshare.com/i/9qd.svg"}/> Register as a FreeLancer</Link>
                            <Link to={"/register/employer"}><img className={"svgicon"} src={"https://svgshare.com/i/9pn.svg"}/> Register as an Employer</Link>
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