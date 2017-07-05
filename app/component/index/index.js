import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';

import Carousel from  './carousel.js';
import Nav from  '../nav.js';
import List from  '../list.js';

class Index extends Component{
    render() {
        return (
            <div className="container-full">
                <Carousel/>
                <Nav/>
                <List/>

            </div>

        );
    }
}

export default Index