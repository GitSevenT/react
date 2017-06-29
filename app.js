import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, hashHistory,HashRouter } from 'react-router-dom';

import App from  './app/component/main.js';
import Index from  './app/component/index.js';
import My from  './app/component/my.js';


render(
    (<HashRouter history={hashHistory} >
        <App>
            <Route exact path="/" component={Index}/>
            <Route path="/my" component={My}/>
        </App>
    </HashRouter>)
    ,document.getElementById("index"));