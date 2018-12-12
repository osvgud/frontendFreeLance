import React, {Component} from 'react';

class RegisterFreeLancer extends Component {
    constructor(){
        super();
        this.state = {
            username: null,
            password: null,
            name: null,
            surname: null,
            userlevel: 0,
            hourlyRate: null,
            jobsDone: 0,
            jobsCanceled: 0,
        };
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        const data = JSON.stringify(this.state);  // you should be able to see your form data
        console.log(data);
        fetch('http://freelancework.lt/FreeLancers', {
            method: 'POST',
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
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
        return (
            <div className="form-style-2">
                <div className="form-style-2-heading">Register as a FreeLancer</div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="username">
                        <span>Username</span>
                        <input type="text" className="input-field" name="username" required onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="password">
                        <span>Password</span>
                        <input type="text" className="input-field" name="password" required onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="name">
                        <span>Name</span>
                        <input type="text" className="input-field" name="name" required onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="surname">
                        <span>Surname</span>
                        <input type="text" className="input-field" name="surname" required onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="hourlyRate">
                        <span>Hourly Rate</span>
                        <input type="text" className="input-field" name="hourlyRate" required onChange={this.handleChange}/>
                    </label>
                    <label className={"submitLabel"}><input type="submit" value="Submit" /></label>
                </form>
            </div>
        );
    }
}

export default RegisterFreeLancer;