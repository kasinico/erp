import React from 'react';
import {browserHistory} from "react-router";
import {ClipLoader} from 'react-spinners';
// const feather = require('feather-icons')

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            message: false,
            user: []
        }
    }

    componentDidMount() {
        document.title = 'Dashboard';
        this.fetchUser();
    }

    handleNavigation(path, e) {
        e.preventDefault();
        browserHistory.push(`${env.dir}`+path)
    }

    fetchUser() {
        $.ajax({
            url: `${env.public_url}api/self`,
            method: 'get',
            dataType: 'json',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('erp_token')
            },
            error: function (xhr, status, error) {
                let response = "";
                switch (status) {
                    case 400:
                        response = xhr['responseJSON']['detail'];
                        break;
                    default:
                        response = xhr['responseJSON']['message']
                }
                this.setState({
                    message: true,
                    message_type: 'alert alert-danger',
                    loading: false,
                    response: response,
                })
            }.bind(this),
            success: function (res) {
                this.setState({
                    user: res,
                    loading: false,
                })
            }.bind(this)
        })
    }

    render() {
        if (this.state.loading)
            return (

                <div className="text-center mt-4">
                    <ClipLoader color={'#cf2027'} />
                </div>

            );
        else
            return (
                <React.Fragment>
                    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{this.state.user.tenant_name}</a>
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                <a className="nav-link" href="#">Sign out</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2">
                                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                                    <div className="sidebar-sticky">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link active" href={`${env.public_url}admin`} onClick={this.handleNavigation.bind(this, '')}>
                                                    <span data-feather="home" />
                                                    {/*{feather.icons.home.toSvg}*/}
                                                    Dashboard <span className="sr-only">(current)</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href={`${env.public_url}admin/orders`} onClick={this.handleNavigation.bind(this, '/orders')}>
                                                    <span data-feather="file" />
                                                    Orders
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href={`${env.public_url}admin/products`} onClick={this.handleNavigation.bind(this, '/products')}>
                                                    <span data-feather="shopping-cart" />
                                                    Products
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href={`${env.public_url}admin/customers`} onClick={this.handleNavigation.bind(this, '/customers')}>
                                                    <span data-feather="users" />
                                                    Customers
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href={`${env.public_url}admin/reports`} onClick={this.handleNavigation.bind(this, '/reports')}>
                                                    <span data-feather="bar-chart-2" />
                                                    Reports
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href={`${env.public_url}admin/integrations`} onClick={this.handleNavigation.bind(this, '/integrations')}>
                                                    <span data-feather="layers" />
                                                    Integrations
                                                </a>
                                            </li>
                                        </ul>

                                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                            <span>Saved reports</span>
                                            <a className="d-flex align-items-center text-muted" href="#">
                                                <span data-feather="plus-circle" />
                                            </a>
                                        </h6>
                                        <ul className="nav flex-column mb-2">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <span data-feather="file-text" />
                                                    Current month
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <span data-feather="file-text" />
                                                    Last quarter
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <span data-feather="file-text" />
                                                    Social engagement
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <span data-feather="file-text" />
                                                    Year-end sale
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-md-10 mt-5">
                                {React.cloneElement(this.props.children, {
                                    user: this.state.user,
                                })}
                            </div>

                            {/*<div className="col-5">*/}
                            {/*{React.cloneElement(this.props.children, {*/}
                            {/*user: this.state.user,*/}
                            {/*})}*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </React.Fragment>
            );
    }

}