import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Service extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.token);
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.type = 'text/javascript';
        script.async = true;
        const scriptText = document.createTextNode("var modal = document.getElementsByClassName('modal');\n" +
            "window.onclick = function(event) { console.log(modal['myModal217']);\n" +
            "    if (event.target.id != 'myBtn') { console.log('sitasmodalas');\n" +
            "        modal[event.target.id].style.display = \"none\";\n" +
            "    }\n" +
            "}");

        script.appendChild(scriptText);

        document.head.appendChild(script);
    }

    openModal(event, id) {
        console.log(id);
        let modal = document.getElementById('myModal' + id);
        modal.style.display = "block";
    }

    close(event, id) {
        let modal = document.getElementById('myModal' + id);
        modal.style.display = "none";
    }

    delete(event, id) {
        event.stopPropagation()

        const AuthStr = "Bearer " + this.props.token['Token'];

        fetch('http://freelancework.lt/Services/' + id, {
            method: 'DELETE',
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Authorization": AuthStr,
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
        })
            .then(function (response) {
                if (response['status'] === 400) {
                    alert("You can't delete this record");
                }
                return console.log(response['status']);
            });

        console.log(id);
    }

    renderServicesTable(servicesList) {
        return (
            <div>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price From</th>
                        <th>Price To</th>
                        <th>Employer Info</th>
                        {this.props.type === 'all' ? (<th>Delete</th>) : (false)}
                        {this.props.token['Role'] === 'FreeLancer' ? (<th></th>) : (false)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        servicesList.slice(this.props.page * 5, this.props.page * 5 + 5).map(service =>
                            <tr key={service.id}>
                                <td className={"services"}>{service.title}</td>
                                <td className={"services"}>{service.description}</td>
                                <td className={"services"}>{service.priceFrom}</td>
                                <td className={"services"}>{service.priceTo}</td>
                                <td className={"services"}>
                                    <button id="myBtn" onClick={(e) => this.openModal(e, service.id)}>Open Employer
                                    </button>
                                </td>
                                {this.props.type === "all" ? (
                                    <td className={"services"}>
                                        <button id="myBtn" onClick={(e) => this.delete(e, service.id)}>Delete</button>
                                    </td>) : (false)}
                                {this.props.token['Role'] === 'FreeLancer' ? (
                                    <td><Link to={"/service/apply/" + service.id}>Apply for this
                                        service</Link></td>
                                ) : (false)}
                            </tr>
                        )}
                    </tbody>
                </table>
                {
                    servicesList.slice(this.props.page * 25, this.props.page * 25 + 25).map(service =>
                        <div id={"myModal" + service.id} className="modal">
                            <div id={service.id} className="modal-content">
                                <span className="close"
                                      onClick={(event) => this.close(event, service.id)}>&times;</span>
                                <ul>
                                    <li>Employer name: <b>{service.employer.name}</b></li>
                                    <li>Employer surname: <b>{service.employer.surname}</b></li>
                                    <li>Employer company name: <b>{service.employer.companyName}</b></li>
                                    <li>Employer work phone: <b>{service.employer.workPhone}</b></li>
                                </ul>
                            </div>
                        </div>)}
            </div>
        );
    }

    render() {
        const {servicesList, page} = this.props;
        return (
            <div>
                <h1>All services</h1>
                {this.renderServicesTable(servicesList)}
            </div>
        );
    }
}

export default Service;