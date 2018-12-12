import React, {Component} from 'react';
import Cookies from "universal-cookie";

class CreateService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            priceFrom: null,
            priceTo: null,
            employerId: this.props.token['UserId'],
            groupId: null,
        };
        console.log(props);
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit = (event) => {
        const cookies = new Cookies();
        const AuthStr = 'Bearer ' + cookies.get('jwt');
        const data = JSON.stringify(this.state);  // you should be able to see your form data
        console.log(data);
        fetch('http://freelancework.lt/Services', {
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
        return (
            <div className="form-style-2">
                <div className="form-style-2-heading">Provide your information</div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="title">
                        <span>Title</span>
                        <input type="text" className="input-field" name="title" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="description">
                        <span>Description</span>
                        <textarea name="description" className="textarea-field" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="priceFrom">
                        <span>Price From</span>
                        <input type="text" className="input-field" name="priceFrom" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="priceTo">
                        <span>Price To</span>
                        <input type="text" className="input-field" name="priceTo" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="groupId">
                        <span>Group Id</span>
                        <input type="text" className="input-field" name="groupId" onChange={this.handleChange}/>
                    </label>
                    <label className={"submitLabel"}><input type="submit" value="Submit" /></label>
                </form>
            </div>

        );
    }
}

export default CreateService;