import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link, hashHistory,HashRouter,browserHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import App from  './app/component/main.js';
import Index from  './app/component/index.js';
import My from  './app/component/my.js';


render(
    (<Router history={browserHistory} >
        <App>
            <Route exact path="/" component={Index}/>
            <Route path="/my" component={My}/>
        </App>
    </Router>)
    ,document.getElementById("app"));