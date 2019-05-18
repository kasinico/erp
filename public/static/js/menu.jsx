import React from 'react';
import {browserHistory} from "react-router";
import {ClipLoader} from 'react-spinners';
import moment from 'moment';

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

    fetchUser() {
        $.ajax({
            url: `${window.location.origin}/api/self`,
            method: 'get',
            dataType: 'json',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('erp_token')
            },
            statusCode: {
                401: function (xhr, status, error) {
                    browserHistory.push(`${env.dir}/login`)
                }
            },
            // error: function (xhr, status, error) {
            //     let response;
            //     switch (status) {
            //         case 400:
            //             response = xhr['responseJSON']['detail'];
            //             break;
            //         case 401:
            //             console.log('anauthorised')
            //             browserHistory.push(`${env.dir}/login`);
            //             break;
            //         case 500:
            //             response = error;
            //             break;
            //         default:
            //             response = xhr['responseText']
            //     }
            //     this.setState({
            //         message: true,
            //         message_type: 'alert alert-danger',
            //         loading: false,
            //         response: response,
            //     })
            // }.bind(this),
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

    handleNavigation = (path, e) => {
        e.preventDefault();
        if (path === 'login') {
            localStorage.removeItem('erp_token');
        }
        browserHistory.push(`${env.dir}${path}`)
    };

    render() {
        if (this.state.loading)
            return (
                <div className='container'>
                    <div className='row justify-content-center'>
                        <ClipLoader color={'#cf2027'} />
                    </div>
                </div>

            );
        else
            return (

                <React.Fragment>

                    {/*Sidebaar*/}
                    <nav className='sidebar'>
                        <div className='navbar-brand'>
                            <div className='container-fluid'>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <h3>Laravel ERP</h3>
                                    </div>
                                    <div className='col-auto min-toggle'>
                                        <button type='button' id='sidebarCollapse' className='btn btn-default' onClick={this.toggleSidebar}>
                                            <i className='fas fa-align-left' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className='list-unstyled components'>
                            <li>
                                <a href={`${env.dir}`} onClick={this.handleNavigation.bind(this, '')}>
                                    <i className='fa fa-home' /> Dashboard
                                </a>
                            </li>
                            <li>
                                <a href={`${env.dir}/orders`} onClick={this.handleNavigation.bind(this, '/orders')}>
                                    <i className='fa fa-shopping-cart' /> Orders
                                </a>
                            </li>
                            <li>
                                <a href={`${env.dir}/products`} onClick={this.handleNavigation.bind(this, '/products')}>
                                    <i className='fa fa-warehouse' /> Products
                                </a>
                            </li>
                            <li>
                                <a href={`${env.dir}/customers`} onClick={this.handleNavigation.bind(this, '/customers')}>
                                    <i className='fa fa-users' /> Customers
                                </a>
                            </li>
                            <li>
                                <a href={`${env.dir}/reports`} onClick={this.handleNavigation.bind(this, '/reports')}>
                                    <i className='fa fa-book-open' /> Reports
                                </a>
                            </li>
                            <li>
                                <a href={`${env.dir}/integrations`} onClick={this.handleNavigation.bind(this, '/integrations')}>
                                    <i className='fa fa-layer-group' /> Integrations
                                </a>
                            </li>
                            <li>
                                <a href={`#reports`} data-toggle='collapse' aria-expanded='false' className='dropdown-toggle'><i className='fa fa-file-csv' /> Saved Reports</a>
                                <ul className='collapse list-unstyled' id='reports'>
                                    <li>
                                        <a href={`${env.dir}/reports/monthly/${moment().format('MMMM-Y')}`}
                                           onClick={this.handleNavigation.bind(this, `/reports/monthly/${moment().format('MMMM-Y')}`)}>
                                            <i data-feather='file-text' /> Current month
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`${env.dir}/reports/quarterly/${moment().format('MMMM-Y')}`}
                                           onClick={this.handleNavigation.bind(this, `/reports/quarterly/${moment().format('MMMM-Y')}`)}>
                                            <i data-feather='file-text' /> Last quarter
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`${env.dir}/reports/yearly/${moment().format('Y')}`}
                                           onClick={this.handleNavigation.bind(this, `/reports/yearly/${moment().format('Y')}`)}>
                                            <i data-feather='file-text' /> Yearly
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href={'#profile'} data-toggle='collapse' aria-expanded='false' className='dropdown-toggle'><i className='fa fa-user' /> User </a>
                                <ul className='collapse list-unstyled' id='profile'>
                                    <li>
                                        <a href={`${env.dir}/user/profile`}
                                           onClick={this.handleNavigation.bind(this, '/user/profile')}><i className='fa fa-user-tie' /> Profile </a>
                                    </li>
                                    <li>
                                        <a href={`${env.dir}/login`} onClick={this.handleNavigation.bind(this, '/login')}><i className='fa fa-user-lock' /> Logout </a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    {/*Page Content*/}
                    <div className='content'>
                        <nav className='navbar navbar-expand-lg navbar-light'>
                            <div className='container-fluid'>
                                <button type='button' id='sidebarCollapse' className='btn btn-default' onClick={this.toggleSidebar}>
                                    <i className='fas fa-align-left' />
                                </button>
                            </div>
                        </nav>
                        <div className='container-fluid'>
                            <div className='row justify-content-center'>
                                <div className='col-12'>
                                    {React.cloneElement(this.props.children, {

                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
    }

}