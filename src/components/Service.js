import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Service extends Component {
    constructor(props) {
        super(props);
    }

    renderServicesTable(servicesList) {
        return (
            <table className='table'>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price From</th>
                    <th>Price To</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    servicesList.slice(this.props.page*25,this.props.page*25+25).map(service =>
                    <tr key={service.id}>
                        <td>{service.title}</td>
                        <td>{service.description}</td>
                        <td>{service.priceFrom}</td>
                        <td>{service.priceTo}</td>
                        <td><Link to={"/service/apply/"+service.id}>Apply for this service</Link></td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
    render() {
        const { servicesList, page } = this.props;
        console.log(page);
        return (
            <div>
                <h1>All services</h1>
                {this.renderServicesTable(servicesList)}
            </div>
        );
    }
}

export default Service;