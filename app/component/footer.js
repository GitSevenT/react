import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';

class Footer extends Component{
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">index</Link></li>
                    <li><Link to="/my">my</Link></li>
                </ul>

            </div>
        );
    }
}

export default Footer