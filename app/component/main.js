import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';

import Footer from  './footer.js';
class App extends Component{
    render() {
        return (
            <div>
                <hr/>
                {this.props.children}
                <hr/>
                <div>App</div>
                <div><Footer/></div>
            </div>
        );
    }
}

export default App
