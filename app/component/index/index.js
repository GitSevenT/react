import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';

import Carousel from  './carousel.js';
import Nav from  '../nav.js';
import List from  '../list.js';
import  Header from '../header.js';
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            headerC : "REACT"
        };
    }
    render() {
        return (
            <div className="container-full">
                <Header headerC={this.state.headerC}/>
                <Carousel/>
                <Nav/>
                <List/>

            </div>

        );
    }
}

export default Index