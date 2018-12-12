import React, {Component} from 'react';
import Service from "./Service";
import Home from "./Home";
import connect from "react-redux/es/connect/connect";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {getServices} from "../thunks";

class ServicePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        };

        props.onGetServices();
        this.onClick = this.handleClick.bind(this);
    }

    getMaxPage() {
        return this.props.servicesList.length / 5;
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
            token
        } = this.props;
        const {page} = this.state;

        return (
            <div>
                {token && token['Role'] === 'Employer' ? (<Link to="/services/create">Create new service</Link>) : (false)}
                <Service token={token} servicesList={servicesList} type={"my"} page={page}/>
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
            servicesList: state.services.list,
        };
    },
    (dispatch) => {
        return {
            onGetServices: () => dispatch(getServices()),
        }
    },
)
(ServicePage);