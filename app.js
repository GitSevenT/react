import React from 'react';
import {render} from 'react-dom';
import { Switch, BrowserRouter as Router, Route, Link, hashHistory,HashRouter,browserHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import './app/css/index.css';

import Mock from './app/mock/mock.js';
import App from  './app/public.js';
import Index from  './app/component/index/index.js';
import Cir from  './app/component/cir/cir.js';
import Shop from  './app/component/shop/shop.js';
import My from  './app/component/my/my.js';
import GoodType from  './app/component/shop/goodType.js';
import Commit from  './app/component/cir/commit.js';


render(
    (<Router history={browserHistory} >
        <App>
            {/*<Switch>*/}
            <Route exact path="/" component={Index}/>
            <Route exact path="/cir" component={Cir}/>
            <Route exact path="/shop" component={Shop}/>
            <Route path="/my" component={My}/>
            <Route path="/shop/:id" component={GoodType}/>
            <Route path="/cir/:id" component={Commit}/>
                {/*</Switch>*/}
        </App>
    </Router>)
    ,document.getElementById("app"));