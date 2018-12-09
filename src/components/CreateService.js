import React, {Component} from 'react';
import Cookies from "universal-cookie";

class CreateService extends Component {
    constructor(props){
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
        const AuthStr = 'Bearer '+cookies.get('jwt');
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
            .then(function(response) {
                return console.log(response);
            });
    };

    render() {
        return (
            <div>
                <h2>Submit Job</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="quation">
                        <label>Title:</label>
                        <input type="text" id="title" name="title" onChange={this.handleChange}/>
                    </div>
                    <label>
                        Description:
                        <input type="text" name="description" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Price From:
                        <input type="text" name="priceFrom" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Price To:
                        <input type="text" name="priceTo" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Group Id
                        <input type="text" name="groupId" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}

export default CreateService;