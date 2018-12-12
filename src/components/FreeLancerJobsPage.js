import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {getFreeLancerJobs} from "../thunks";
import Job from "./Job";

class FreeLancerJobsPage extends Component {
    constructor(props) {
        super(props);

        props.onGetFreeLancerJobs();
    }
    render() {
        const {token, jobsList} = this.props;
        return (
            <div>
                <h1>My Jobs</h1>
                <Job token={token} jobsList={jobsList} page={0}/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            jobsList: state.freeLancerJobs.list,
        };
    },
    (dispatch) => {
        return {
            onGetFreeLancerJobs: () => dispatch(getFreeLancerJobs()),
        }
    },
)
(FreeLancerJobsPage);