import React , {Component}from 'react';
import  Header from '../header.js';
import {Media, Image, Row, Col} from 'react-bootstrap';
class My extends Component{
    constructor(props) {
        super(props);
        this.state = {
            headerC : "我的",
            headerL : '<span class="glyphicon glyphicon-envelope"></span>',
            headerR : '<i class="glyphicon glyphicon-align-left"></i>'
        };
    }
    render() {
        return (
            <div>
                <Header headerC={this.state.headerC} headerL={this.state.headerL} headerR={this.state.headerR}/>
                <div className="container" style={{paddingTop:"5%",backgroundColor:"#fff"}}>
                    <Media.List>
                        <Media.ListItem>
                            <Media.Left>
                                <Image width={60} height={60} src="/assets/thumbnail.png" alt="Image" circle/>
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading style={{fontSize:"1.2rem"}}>
                                    浮动
                                    <span style={{float:"right",fontSize:"1rem"}}>已签到</span>
                                </Media.Heading>
                                <div style={{margin:"1rem 0"}}>
                                    <span style={{marginRight:"1.2rem"}}><i className="glyphicon glyphicon-heart-empty marginL"></i>喜欢</span>
                                    <span><i className="glyphicon glyphicon-thumbs-up marginL"></i>点赞</span>
                                </div>
                                <p className="glyphicon glyphicon-phone">普通会员</p>
                            </Media.Body>
                        </Media.ListItem>
                    </Media.List>
                </div>
                <Row className="show-grid myItem text-center container">
                    <Col xs={4} md={4}>关注(52)</Col>
                    <Col xs={4} md={4} style={{borderLeft:"1px solid #e7e7e7",borderRight:"1px solid #e7e7e7"}}>粉丝(52)</Col>
                    <Col xs={4} md={4}>收藏(52)</Col>
                </Row>
                <ul className="myItem clearfix">
                    <li className="firstLi text-right"><i className="glyphicon glyphicon-duplicate"></i></li>
                    <li className="secondLi">我的订单</li>
                    <li className="lastLi"><i className="glyphicon glyphicon-menu-right"></i></li>
                </ul>
                <ul className="myItem clearfix">
                    <li className="firstLi text-right"><i className="glyphicon glyphicon-shopping-cart"></i></li>
                    <li className="secondLi">购物车</li>
                    <li className="lastLi"><i className="glyphicon glyphicon-menu-right"></i></li>
                </ul>
                <ul className="myItem clearfix">
                    <li className="firstLi text-right"><i className="glyphicon glyphicon-map-marker"></i></li>
                    <li className="secondLi">收货地址</li>
                    <li className="lastLi"><i className="glyphicon glyphicon-menu-right"></i></li>
                </ul>
                <ul className="myItem clearfix">
                    <li className="firstLi text-right"><i className="glyphicon glyphicon-star-empty"></i></li>
                    <li className="secondLi">我的活动</li>
                    <li className="lastLi"><i className="glyphicon glyphicon-menu-right"></i></li>
                </ul>
                <ul className="myItem clearfix">
                    <li className="firstLi text-right"><i className="glyphicon glyphicon-bookmark"></i></li>
                    <li className="secondLi">会员俱乐部</li>
                    <li className="lastLi"><i className="glyphicon glyphicon-menu-right"></i></li>
                </ul>
                <ul className="myItem clearfix">
                    <li className="firstLi text-right"><i className="glyphicon glyphicon-cog"></i></li>
                    <li className="secondLi">设置</li>
                    <li className="lastLi"><i className="glyphicon glyphicon-menu-right"></i></li>
                </ul>
            </div>
        );
    }
}

export default My