import React , {Component}from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';


class Footer extends Component{
    render() {
        return (

                <nav className="navbar navbar-default navbar-fixed-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3"><Link to="/">首页</Link></div>
                            <div className="col-lg-3"><Link to="/air">圈子</Link></div>
                            <div className="col-lg-3"><Link to="/shop">商城</Link></div>
                            <div className="col-lg-3"><Link to="/my">我的</Link></div>
                        </div>
                    </div>
                </nav>



        );
    }
}

export default Footer