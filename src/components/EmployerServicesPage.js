import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {getEmployerServices} from "../thunks";
import {Link} from "react-router-dom";
import Service from "./Service";

class EmployerServicesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        };

        props.onGetServices();
        this.onClick = this.handleClick.bind(this);
    }

    getMaxPage() {
        return this.props.servicesList.length / 25;
    }

    createPages = () => {
        let pages = [];
        for (let i = 0; i < this.getMaxPage(); i++) {
            pages.push(<div className="page" id={i} onClick={this.onClick}>{i + 1}</div>)
        }
        return pages;
    };


    handleClick(event) {
        const {id} = event.target;
        console.log(this.getMaxPage());
        this.setState({
            page: id,
        });
    }

    render() {
        const {
            servicesList,
            token,
        } = this.props;
        const {page} = this.state;
        console.log(servicesList);
        return (
            <div>
                {token && token['Role'] === 'Employer' ? (<Link to="/services/create">Create new service</Link>) : (
                    <span>Tik employers gali kurti</span>)}
                <Service token={token} servicesList={servicesList} page={page} type={"all"}/>
                <div className={"parentPage"}>
                    {this.createPages()}
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            servicesList: state.employerServices.list,
        };
    },
    (dispatch) => {
        return {
            onGetServices: () => dispatch(getEmployerServices()),
        }
    },
)
(EmployerServicesPage);