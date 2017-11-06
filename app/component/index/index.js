import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { withRouter, Route, Link } from 'react-router-dom';

import Carousel from  './carousel.js';
import Nav from  '../nav.js';
import List from  '../list.js';
import  Header from '../header.js';
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            headerC : "REACT",
            headerL : '<span class="glyphicon glyphicon-envelope"></span>',
            headerR : '<i class="glyphicon glyphicon-align-left"></i>'
        };
    }
    render() {
        return (
            <div className="container-full">
                <Header headerC={this.state.headerC} headerL={this.state.headerL}
                        headerR={this.state.headerR}/>
                <Carousel/>
                <Nav/>
                <List/>
            </div>
        );
    }
    componentWillUnmount(){
        alert("我要销毁了")
    }
}

export default Index