import React , {Component}from 'react';
import ReactDom, { render } from 'react-dom';
import { Router, Route, NavLink } from 'react-router-dom';


class Footer extends Component{
    /*初始化状态*/
    constructor(props) {
        super(props);
        this.state = {
            indexColor : "#ffa6a6"
        };
    }
    render() {
        return (
                <nav className="navbar navbar-default navbar-fixed-bottom">
                    <div className="container-fluid footerText">
                        <div className="row">
                            <div className="col-lg-3 col-xs-3 text-center">
                                <NavLink exact to="/react-demo"  activeStyle={{color:'#ffa6a6'}}>
                                    首页
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-xs-3 text-center">
                                <NavLink exact to={{pathname:'/cir', search: '?sort=name'}}
                                         activeStyle={{color: '#ffa6a6'}}>
                                    圈子
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-xs-3 text-center">
                                <NavLink exact to="/shop" activeStyle={{color: '#ffa6a6'}}>
                                    商城
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-xs-3 text-center">
                                <NavLink to="/my" activeStyle={{color: '#ffa6a6'}}>
                                    我的
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Footer