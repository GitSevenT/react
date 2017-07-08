import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';

import Footer from  './component/footer.js';
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                {this.props.children}
                <div><Footer/></div>
            </div>
        );
    }
}

export default App
