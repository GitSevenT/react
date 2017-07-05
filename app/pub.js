import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';
import  Header from './component/header.js';
import Footer from  './component/footer.js';
class App extends Component{
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <div><Footer/></div>
            </div>
        );
    }
}

export default App
