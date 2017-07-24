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
        // var components = this.props.children.map(function (child) {
        //     return child.props
        // });
        return (
            <div>
                {this.props.children}
                    {/*{this.props.children && React.cloneElement(this.props.children, {*/}
                        {/*someProp: "1"*/}
                    {/*})}*/}
                {/*{this.props.children.map((child,index)=>React.cloneElement(child,{key:index,ref:index,isTop:this.isTop}))}*/}
                <Footer/>
            </div>
        );
    }


}

export default App
