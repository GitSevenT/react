import React , {Component}from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import { Router, Route, Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div style={{paddingTop:"5%",backgroundColor:"#fff"}}>
                <Grid>
                    <Row>
                        <Col xs={3} md={3}>
                            <Link to={{ pathname: '/shop/biscuit',
                                        search: '?type=饼干',
                                        hash: '#the-hash',
                                        state: { headerC: "饼干" }}}>
                                <Image src={require('../images/bg_03.png')} responsive />
                                <p className="text-center">饼干</p>
                            </Link>
                        </Col>
                        <Col xs={3} md={3}>
                            <Link to={{ pathname: '/shop/bread',
                                state: { headerC: "面包" }}}>
                                <Image src={require('../images/cd_03.png')} responsive />
                                <p className="text-center">面包</p>
                            </Link>
                        </Col>
                        <Col xs={3} md={3}>
                            <Link to={{ pathname: '/shop/tea',
                                state: { headerC: "茶点" }}}>
                                <Image src={require('../images/dg_03.png')} responsive />
                                <p className="text-center">茶点</p>
                            </Link>
                        </Col>
                        <Col xs={3} md={3}>
                            <Link to={{ pathname: '/shop/pastry',
                                state: { headerC: "点心" }}}>
                                <Image src={require('../images/mb_03.png')} responsive />
                                <p className="text-center">点心</p>
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Nav