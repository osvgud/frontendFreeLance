import {Col, Grid, Row} from 'react-bootstrap';
import Content from './Content';
import Footer from "./Footer";
import Header from "./Header";

import React, {Component} from 'react';

class Layout extends Component {
    constructor(props) {
        super(props);
        console.log('layoutprops');
        console.log(props);
        console.log('layoutprops');
    }
    render() {
        const {token} = this.props;
        return (
            <div>
                <Content token={token}/>
                <Footer token={token}/>
            </div>
        );
    }
}

export default Layout;