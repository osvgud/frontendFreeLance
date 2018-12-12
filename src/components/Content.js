import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import ServicePage from "./ServicePage";
import CreateService from "./CreateService";
import Header from "./Header";
import RegisterFreeLancer from "./RegisterFreeLancer";
import RegisterEmployer from "./RegisterEmployer";
import Login from "./Login";
import Logout from "./Logout";
import Cookies from 'universal-cookie';
import jwt from 'jwt-decode'
import EmployerServicesPage from "./EmployerServicesPage";
import ApplyJob from "./ApplyJob";
import FreeLancerJobsPage from "./FreeLancerJobsPage";
import PageShell from './PageShell'
import FreeLancerProfile from "./FreeLancerProfile";


class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {token} = this.props;
        return (
            <Router>
                <div>
                    <Header token={token}/>

                    <hr />
                <div className="content">
                    <Route exact path="/" component={PageShell(() => <Home token={token}/>)} />
                    <Route path="/services/create" component={PageShell(() => <CreateService token={token}/>)} />
                    <Route path="/services/list" component={PageShell(() => <ServicePage token={token}/>)} />
                    <Route path="/register/freelancer" component={PageShell(() => <RegisterFreeLancer/>)} />
                    <Route path="/register/employer" component={PageShell(() => <RegisterEmployer/>)} />
                    <Route path="/login" component={PageShell(() => <Login/>)} />
                    <Route path="/logout" component={PageShell(() => <Logout/>)} />
                    <Route path="/employer/services" component={() => <EmployerServicesPage token={token}/>} />
                    <Route path="/freelancer/jobs" component={PageShell(() => <FreeLancerJobsPage token={token}/>)} />
                    <Route path="/freelancer/profile" component={PageShell(() => <FreeLancerProfile token={token}/>)} />
                    <Route path="/service/apply/:id" render={(props) => <ApplyJob {...props} token={token}/>} />
                </div>
                </div>
            </Router>
        );
    }
}

export default Content;
