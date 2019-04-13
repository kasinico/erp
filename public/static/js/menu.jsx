import React from 'react';
import {browserHistory} from "react-router";
import {ClipLoader} from 'react-spinners';
// const feather = require('feather-icons')

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message: false,
            user: []
        }
    }

    componentDidMount() {
        document.title = 'Dashboard';
        // this.fetchUser();
    }

    // handleNavigation(path, e) {
    //     e.preventDefault();
    //     browserHistory.push(`${env.dir}`+path)
    // }

    fetchUser() {
        $.ajax({
            url: `${env.public_url}api/self`,
            method: 'get',
            dataType: 'json',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('erp_token')
            },
            error: function (xhr, status, error) {
                let response;
                switch (status) {
                    case 400:
                        response = xhr['responseJSON']['detail'];
                        break;
                    case 500:
                        response = error;
                        break;
                    default:
                        response = xhr['responseText']
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

    toggleSidebar = (event) => {
        event.preventDefault();
        $('.sidebar, .content').toggleClass('active');

    };

    static handleNavigation(path, e) {
      e.preventDefault();
      browserHistory.push(`${env.dir}${path}`)
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

                    {/*Sidebaar*/}
                    <nav className='sidebar'>
                        <div className='navbar-brand'>
                            <h3>Laravel ERP</h3>
                        </div>

                        <ul className='list-unstyled components'>
                            <li>
                                <a href={`${env.dir}`} onClick={Menu.handleNavigation.bind(this, '')}>
                                    <i data-feather="home" />Dashboard
                                </a>
                            </li>
                            <li>
                                <a href={`${env.dir}/orders`} onClick={Menu.handleNavigation.bind(this, '/orders')}>
                                    <i data-feather='file' /> Orders
                                </a>
                            </li>
                            <li>
                                <a href={`${env.dir}/products`} onClick={Menu.handleNavigation.bind(this, '/products')}>
                                    <i data-feather='shopping-cart' /> Products
                                </a>
                            </li>
                            <li>
                                <a href={`${env.dir}/customers`} onClick={Menu.handleNavigation.bind(this, '/customers')}>
                                    <i data-feather='users' /> Customers
                                </a>
                            </li>
                            <li>
                                <a href={`${env.dir}/reports`} onClick={Menu.handleNavigation.bind(this, '/reports')}>
                                    <i data-feather='bar-chart' /> Reports
                                </a>
                            </li>
                            <li>
                                <a href={`${env.dir}/integrations`} onClick={Menu.handleNavigation.bind(this, '/integrations')}>
                                    <i data-feather='layers' /> Integrations
                                </a>
                            </li>
                            <li>
                                <a href={`#reports`} data-toggle='collapse' aria-expanded='false' className='dropdown-toggle'>Saved Reports</a>
                                <ul className='collapse list-unstyled' id='reports'>
                                    <li>
                                        <a href={`${env.dir}`} onClick={Menu.handleNavigation.bind(this, '')}>
                                            <i data-feather='file-text' /> Current month
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`${env.dir}`} onClick={Menu.handleNavigation.bind(this, '')}>
                                            <i data-feather='file-text' /> Last quarter
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`${env.dir}`} onClick={Menu.handleNavigation.bind(this, '')}>
                                            <i data-feather='file-text' /> Social
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    {/*Page Content*/}
                    <div className='content'>
                        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                            <div className='container-fluid'>
                                <button type='button' id='sidebarCollapse' className='btn btn-default' onClick={this.toggleSidebar}>
                                    <i className='fas fa-align-left' />
                                </button>
                            </div>
                        </nav>
                        <div className='header'>
                            <div className='container-fluid'>
                                <div className='header-body'>
                                    <h2>Dashboard</h2>
                                </div>
                            </div>
                        </div>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 col-lg-6 col-xl'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='row align-items-center'>
                                                <div className='col'>
                                                    <h6 className='card-title text-uppercase text-muted mb-2'>Total Sales</h6>
                                                    <span className='h2 mb-0'>Kshs 24,500 </span>
                                                    <span className='badge badge-soft-success mt-n1'>
                                                    +3.5%
                                                </span>
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='h2 fa fa-dollar-sign text-muted mb-0' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 col-xl'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='row align-items-center'>
                                                <div className='col'>
                                                    <h6 className='card-title text-uppercase text-muted mb-2'>
                                                        Complete Orders
                                                    </h6>
                                                    <span className='h2 mb-0'>763</span>
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='h2 fa fa-shopping-cart text-muted mb-0' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 col-xl'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='row align-items-center'>
                                                <div className='col'>
                                                    <h6 className='card-title text-uppercase text-muted mb-2'>
                                                        Shipped
                                                    </h6>
                                                    <div className='row align-items-center no-gutters'>
                                                        <div className='col-auto'>
                                                            <span className='h2 mr-2 mb-0'>84 </span>
                                                        </div>
                                                        {/*<div className='col'>*/}
                                                        {/*    <div className='progress progress-sm'>*/}
                                                        {/*        <div className='progress-bar' role='progressbar' style={{width: '85%'}} aria-valuenow='85' aria-valuemin='0' aria-valuemax='100' />*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='h2 fa fa-shipping-fast text-muted mb-0' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 col-xl'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='row align-items-center'>
                                                <div className='col'>
                                                    <h6 className='card-title text-uppercase text-muted mb-2'>
                                                        Total Customers
                                                    </h6>
                                                    <span className='h2 mb-0'>654</span>
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='h2 fa fa-users text-muted mb-0' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
    }

}