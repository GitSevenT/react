import React , {Component}from 'react';
import {Carousel} from 'react-bootstrap';
class Carouse extends Component {
    render() {
        return (
                <Carousel>
                    <Carousel.Item>
                        <img alt="banner" src={require('../../images/1.jpg')}/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="banner" src={require('../../images/2.jpg')}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="banner" src={require('../../images/3.jpg')}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        );
    }
}

export default Carouse
