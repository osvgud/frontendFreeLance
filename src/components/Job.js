import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Job extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.token);
    }
    renderJobsTable(jobsList) {
        return (
            <div>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Employee Comment</th>
                        <th>Job Status</th>
                        <th>Time Spent</th>
                        <th>Service</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        jobsList.slice(this.props.page * 5, this.props.page * 5 + 5).map(job =>
                            <tr key={job.id}>
                                <td className={"jobs"}>{job.service.title}</td>
                                <td className={"jobs"}>{job.employeeComment}</td>
                                <td className={"jobs"}>{job.jobStatus}</td>
                                <td className={"jobs"}>{job.timeSpent}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
    render() {
        const {jobsList} = this.props;
        return (
            <div>
                {this.renderJobsTable(jobsList)}
            </div>
        );
    }
}

export default Job;