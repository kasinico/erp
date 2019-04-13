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

    toggleSidebar = (event) => {
        $('.sidebar, .content').toggleClass('active');

    };

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
                            <li><a href='#'><i data-feather="home" />Dashboard</a></li>
                            <li><a href='#'><i data-feather='file' /> Orders</a></li>
                            <li><a href='#'><i data-feather='shopping-cart' /> Products</a> </li>
                            <li><a href='#'><i data-feather='users' /> Customers</a></li>
                            <li><a href='#'><i data-feather='bar-chart' /> Reports</a></li>
                            <li><a href='#'><i data-feather='layers' /> Integrations</a></li>
                            <li>
                                <a href='#reports' data-toggle='collapse' aria-expanded='false' className='dropdown-toggle'>Saved Reports</a>
                                <ul className='collapse list-unstyled' id='reports'>
                                    <li><a href='#'><i data-feather='file-text' /> Current month</a></li>
                                    <li><a href='#'><i data-feather='file-text' /> Last quarter</a></li>
                                    <li><a href='#'><i data-feather='file-text' /> Social</a></li>
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
                    </div>
                </React.Fragment>
            );
    }

}