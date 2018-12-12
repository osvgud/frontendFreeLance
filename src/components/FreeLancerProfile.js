import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {getFreeLancerBusyTimes} from "../thunks";
import axios from "axios";
import Cookies from "universal-cookie";
import BusyTime from "./BusyTime";

class FreeLancerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busyFrom: "",
            busyTo: "",
            freeLancerId: this.props.token['UserId']
        };

        props.onGetBusyTimes();
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        const cookies = new Cookies();
        const AuthStr = 'Bearer ' + cookies.get('jwt');
        const data = JSON.stringify(this.state);  // you should be able to see your form data
        console.log(data);
        fetch('http://freelancework.lt/BusyTimes', {
            method: 'POST',
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Authorization": AuthStr,
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data,
        })
            .then(function (response) {
                return console.log(response);
            });
    };

    render() {
        const {busyTimesList} = this.props;
        return (
            <div>
                <h1>My Profile</h1>
                <div className="form-style-2">
                    <div className="form-style-2-heading">Add busy time</div>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="busyFrom">
                            <span>Busy From</span>
                            <input type="datetime-local" className="input-field" name="busyFrom"
                                   onChange={this.handleChange}/>
                        </label>
                        <label htmlFor="busyTo">
                            <span>Busy To</span>
                            <input type="datetime-local" className="input-field" name="busyTo" onChange={this.handleChange}/>
                        </label>
                        <label className={"submitLabel"}><input type="submit" value="Submit"/></label>
                    </form>
                </div>

                <BusyTime busyTimesList={busyTimesList} page={0}/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            busyTimesList: state.busyTimes.list,
        };
    },
    (dispatch) => {
        return {
            onGetBusyTimes: () => dispatch(getFreeLancerBusyTimes()),
        }
    },
)
(FreeLancerProfile);