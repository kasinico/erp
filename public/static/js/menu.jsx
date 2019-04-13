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
        $('#sidebar').toggleClass('active');
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
                            <li>
                                <a href='#home' data-toggle='collapse' aria-expanded='false' className='dropdown-toggle'>
                                    <i className='fa fa-home' /> Home
                                </a>
                                <ul className='collapse list-unstyled' id='home'>
                                    <li>
                                        <a href='#'>Home 1 <i className='fa fa-home' /></a>
                                    </li>
                                    <li>
                                        <a href='#'>Home 2</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href='#'>About</a>
                            </li>
                            <li>
                                <a href='#page' data-toggle='collapse' aria-expanded='false' className='dropdown-toggle'>Pages</a>
                                <ul className='collapse list-unstyled' id='page'>
                                    <li>
                                        <a href='#'>Page 1</a>
                                    </li>
                                    <li>
                                        <a href='#'>Page 2</a>
                                    </li>
                                    <li>
                                        <a href='#'>Page 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href='#'>Portfolio</a>
                            </li>
                            <li>
                                <a href='#'>Contacts</a>
                            </li>
                        </ul>
                    </nav>

                    {/*Page Content*/}
                    <div id='content'>
                        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                            <div className='container-fluid'>
                                <button type='button' id='sidebarCollapse' className='btn btn-default' onClick={this.toggleSidebar}>
                                    <i className='fas fa-align-left' />
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </React.Fragment>
            );
    }

}