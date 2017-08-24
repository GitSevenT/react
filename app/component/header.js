import React , {Component}from 'react';
import { Link } from 'react-router-dom';

import TransToTop from './transToTop.js';
import TransToLeft from './transToLeft.js';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerL : this.props.headerL,
            headerC : this.props.headerC,
            isTop : false,
            isLeft : false
        };
    }
    render() {
        // console.log(this.props.headerR);
        var HR = '<i class="glyphicon glyphicon-align-left"></i>';
        if(this.props.headerR!==HR){
            return (
                <div className="header">
                    <ul className="container">
                        <li dangerouslySetInnerHTML={{__html:this.props.headerL}}>
                        </li>
                        <li className="liCenter">{this.state.headerC}</li>
                        <li>
                            <Link to='/cir/commit'>
                                <span style={{color:'#fff'}} dangerouslySetInnerHTML={{__html:this.props.headerR}}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}else{
            return(
                <div className="head">
                    <div className="header">
                        <ul className="container">
                            <li dangerouslySetInnerHTML={{__html:this.props.headerL}}>
                            </li>
                            <li className="liCenter">{this.state.headerC}</li>
                            <li onClick={this.isShow.bind(this)}>
                                    <span dangerouslySetInnerHTML={{__html:this.props.headerR}}></span>
                                <ul className="munUl" style={{height:this.state.isShow ? "101px" : "0"}}>
                                    <li onClick={this.isTop.bind(this)}>
                                        <i className="glyphicon glyphicon-sort-by-attributes"></i>筛选</li>
                                    <li onClick={this.isLeft.bind(this)}>
                                        <i className="glyphicon glyphicon-search"></i>搜索</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <TransToTop isTop={this.state.isTop} isToP={this.isTop.bind(this)}/>
                    <TransToLeft isLeft={this.state.isLeft} isLeFt={this.isLeft.bind(this)}/>
                </div>
            )
        }

    }
    isShow(){
        // let ele = this.refs.rp.childNodes[0].nodeName;
        // if(ele==="A"){
        //     // window.location
        //     return;
        // }
        this.setState({
            isShow : !this.state.isShow
        })
    }
    isTop(){
        console.log(11111);
        this.setState({
            isTop : !this.state.isTop
        })
    }
    isLeft(){
        console.log(2222);
        this.setState({
            isLeft : !this.state.isLeft
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            alert("已经跳转了！")
        }
    }
}

export default Header