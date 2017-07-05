import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link, hashHistory,HashRouter,browserHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import './app/css/index.css';

import Mock from './app/mock/mock.js';
import App from  './app/pub.js';
import Index from  './app/component/index/index.js';
import Cir from  './app/component/cir/cir.js';
import Shop from  './app/component/shop/shop.js';
import My from  './app/component/my/my.js';


render(
    (<Router history={browserHistory} >
        <App>
            <Route exact path="/" component={Index}/>
            <Route path="/cir" component={Cir}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/my" component={My}/>
        </App>
    </Router>)
    ,document.getElementById("app"));