import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';
import  Header from '../header.js';
import Nav from  '../nav.js';
import List from  '../list.js';

class Shop extends Component{
    constructor(props) {
        super(props);
        this.state = {
            headerC : "商店"
        };
    }
    render() {
        return (
            <div>
                <Header headerC={this.state.headerC}/>
                <Nav/>
                <List/>
            </div>
        );
    }
}

export default Shop