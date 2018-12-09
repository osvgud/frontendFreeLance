import React, {Component} from 'react';

class RegisterEmployer extends Component {
    constructor(){
        super();
        this.state = {
            username: null,
            password: null,
            name: null,
            surname: null,
            userlevel: 1,
            companyName: null,
            workPhone: null,
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
        fetch('http://freelancework.lt/Employers', {
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
            <div>
                <h2>Register as an Employer</h2>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Surname:
                        <input type="text" name="surname" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Company Name
                        <input type="text" name="companyName" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Work Phone
                        <input type="text" name="workPhone" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}

export default RegisterEmployer;