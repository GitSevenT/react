import React , {Component}from 'react';


import {Tabs, Tab} from 'react-bootstrap';
import New from './new.js'
import Hot from './hot.js'
import Care from './care.js'
import  Header from '../header.js';

class Cir extends Component{
    constructor(props) {
        super(props);
        this.state = {
            headerC : "烘焙圈",
            headerL : '<span class="glyphicon glyphicon-envelope"></span>',
            headerR : '<i class="glyphicon glyphicon-plus"></i>'
        };
    }
    render() {
        return (
            <div>
                <Header headerC={this.state.headerC} headerL={this.state.headerL} headerR={this.state.headerR}/>

                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="container-full">
                    <Tab eventKey={1} title="最新">
                        <New/>
                    </Tab>
                    <Tab eventKey={2} title="热门">
                        <Hot/>
                    </Tab>
                    <Tab eventKey={3} title="关注">
                        <Care/>
                    </Tab>
                </Tabs>


            </div>
        );
    }
}

export default Cir