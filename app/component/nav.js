import React , {Component}from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

class Nav extends Component {
    render() {
        return (
            <div style={{paddingTop:"5%",backgroundColor:"#fff"}}>
                <Grid>
                    <Row>
                        <Col xs={3} md={3}>
                            <Image src="./app/images/bg_03.png" responsive />
                            <p className="text-center">饼干</p>
                        </Col>
                        <Col xs={3} md={3}>
                            <Image src="./app/images/cd_03.png" responsive />
                            <p className="text-center">面包</p>
                        </Col>
                        <Col xs={3} md={3}>
                            <Image src="./app/images/dg_03.png" responsive />
                            <p className="text-center">茶点</p>
                        </Col>
                        <Col xs={3} md={3}>
                            <Image src="./app/images/mb_03.png" responsive />
                            <p className="text-center">点心</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Nav