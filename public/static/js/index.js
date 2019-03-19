import React from  'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Login from './login';
import Menu from './menu';
import Home from './home'
import ComingSoon from './coming_soon';

function requireAuth() {
    if (!localStorage.getItem('erp_token')) {
        browserHistory.push({pathname: `${env.dir}/login`, state: {nextPath: 'state' }});
    }
}

render(
    (
        <Router history={browserHistory} basename={'/KenyaBuzz/public/home'}>
            <Route path={`${env.dir}/login`} component={Login} />
            <Route component={Menu} onEnter={requireAuth()}>
                <Route path={`${env.dir}`} component={Home} />
                <Route path={`${env.dir}/*`} component={ComingSoon} />
            </Route>
        </Router>),
    document.getElementById('app'));