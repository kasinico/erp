import React from  'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Login from './login';
import Menu from './menu';
import Home from './home'
import Products from './products';
import Orders from './orders';
import Customers from './customers';
import ComingSoon from './coming_soon';
import EditProduct from './editProduct';

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

                /* Products */
                <Route path={`${env.dir}/products`}                 component={Products}/>
                <Route path={`${env.dir}/products/new`}             component={EditProduct} />
                <Route path={`${env.dir}/products/:product/edit`}   component={EditProduct} />

                /* Orders */
                <Route path={`${env.dir}/orders`} component={Orders}/>
                <Route path={`${env.dir}/customers`} component={Customers}/>
                <Route path={`${env.dir}/*`} component={ComingSoon} />
            </Route>
        </Router>),
    document.getElementById('app'));