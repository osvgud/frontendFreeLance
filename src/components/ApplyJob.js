import React, {Component} from 'react';
import Cookies from "universal-cookie";

class ApplyJob extends Component {
    constructor(props){
        super(props);
        this.state = {
            employeeComment: null,
            jobStatus: 0,
            timeSpent: 0,
            serviceId: this.props.match.params.id,
            freeLancerId: this.props.token['UserId'],
        };
        console.log(props);
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit = (event) => {
        const AuthStr = 'Bearer '+this.props.token['Token'];
        const data = JSON.stringify(this.state);  // you should be able to see your form data
        console.log(data);
        fetch('http://freelancework.lt/Jobs', {
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
            .then(function(response) {
                return console.log(response);
            });
    };

    render() {
        console.log(this.props.match.params.id);
        return (
            <div className="form-style-2">
                <div className="form-style-2-heading">Apply For this service</div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="employeeComment">
                        <span>Your Comment</span>
                        <input type="text" className="input-field" name="employeeComment" onChange={this.handleChange}/>
                    </label>
                    <label className={"submitLabel"}><input type="submit" value="Submit" /></label>
                </form>
            </div>
        );
    }
}

export default ApplyJob;