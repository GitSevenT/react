import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';



class Index extends Component{
    render() {
        return (
            <ul className="nav nav-tabs">
                <li role="presentation" className="active"><a href="#">Home</a></li>
                <li role="presentation"><a href="#">Prodkkfile</a></li>
                <li role="presentation"><a href="#">Messdsages</a></li>
            </ul>
        );
    }
}

export default Index