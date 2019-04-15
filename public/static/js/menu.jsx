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
            url: `${env.public_url}api/self`,
            method: 'get',
            dataType: 'json',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('erp_token')
            },
            statusCode: {
                401: function (xhr, status, error) {
                    // browserHistory.push(`${env.dir}/login`)
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

    static handleNavigation(path, e) {
        e.preventDefault();
        browserHistory.push(`${env.dir}${path}`)
    }

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
                                        <a href={`${env.dir}/reports/monthly/${moment().format('MMMM-Y')}`}
                                           onClick={Menu.handleNavigation.bind(this, `/reports/monthly/${moment().format('MMMM-Y')}`)}>
                                            <i data-feather='file-text' /> Current month
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`${env.dir}/reports/quarterly/${moment().format('MMMM-Y')}`}
                                           onClick={Menu.handleNavigation.bind(this, `/reports/quarterly/${moment().format('MMMM-Y')}`)}>
                                            <i data-feather='file-text' /> Last quarter
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`${env.dir}/reports/yearly/${moment().format('Y')}`}
                                           onClick={Menu.handleNavigation.bind(this, `/reports/yearly/${moment().format('Y')}`)}>
                                            <i data-feather='file-text' /> Yearly
                                        </a>
                                    </li>
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