import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';
import  Header from '../header.js';
import Nav from  '../nav.js';
import List from  '../list.js';
// import Biscuit from  './biscuit.js';
class Shop extends Component{
    constructor(props) {
        super(props);
        this.state = {
            headerC : "商店",
            headerL : '<span class="glyphicon glyphicon-envelope"></span>',
            headerR : '<i class="glyphicon glyphicon-align-left"></i>'
        };
    }
    render() {
        return (
            <div>
                <Header headerC={this.state.headerC} headerL={this.state.headerL} headerR={this.state.headerR}/>
                <Nav/>
                <List/>
                {/*<Route exact path="/shop/biscuit" component={Biscuit}/>*/}
            </div>
        );
    }
}

export default Shop