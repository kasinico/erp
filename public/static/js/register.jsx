import React from 'react';
import {ClipLoader} from "react-spinners";
import {browserHistory} from "react-router";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            processing_form: false,
            message: false,
        }
    }

    componentDidMount() {
    }

    handleNavigation = (path, e) => {
        e.preventDefault();
        browserHistory.push(`${env.dir}${path}`);
    };

    showPassword = (key_, e) => {
        let x = document.getElementById(key_);
        x.type = 'text';
    };

    hidePassword = (key_, e) => {
        let x = document.getElementById(key_);
        x.type = 'password';
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({processing_form: true, message: true});
        let formData = new FormData($('form#signup')[0]);
        $.ajax({
            url: `${env.public_url}api/register`,
            dataType: 'json',
            method: 'post',
            data: formData,
            processData: false,
            contentType: false,
            error: function (xhr, status, error) {
                switch (xhr.status) {
                    case 400:
                        error = '';
                            for (var key in xhr.responseJSON) {
                                error +=(xhr.responseJSON[key] + '. ');
                            }
                        break;
                    default:
                        error = xhr.responseText;
                }
                this.setState({
                    processing_form: false,
                    message: true,
                    message_type: 'alert alert-danger',
                    response: error
                })
            }.bind(this),
            success: function (res) {
                // this.setState({
                //     processing_form: false,
                //     message: true,
                //     message_type: 'alert alert-success',
                //     response: 'You have been registered successfully. Login to Continue'
                // });
                browserHistory.push({
                    pathname: `${env.dir}/login`,
                    state: {
                        message: true,
                        message_type: 'alert alert-success',
                        response: 'You have been registered successfully. Login to Continue'
                    }
                })
            }.bind(this)
        })
    };

    render() {
        var button = (
            <React.Fragment>
                <button className="btn btn-primary mb-3 float-left">
                    Sign Up
                </button>

                <div className="text-right">
                    <small className="text-muted text-center">
                        Have an account already? <a href={`${env.dir}/login`}
                                                    onClick={this.handleNavigation.bind(this, '/login')}>Sign in</a>.
                    </small>
                </div>
            </React.Fragment>
        );
        var message = (
            <p/>
        );
        if (this.state.processing_form)
            button = (
                <ClipLoader color={'#cf2027'}/>
            );
        if (this.state.message)
            message = (
                <div className={this.state.message_type}>
                    <p>{this.state.response}</p>

                </div>
            );

        return (
            <div className='container'>
                <div className='justify-content-center'>
                    <div className='card'>
                        <div className='header mt-md-1'>
                            <div className='container-fluid'>
                                <div className='header-body'>
                                    <div className='row align-items-center'>
                                        <div className='col'>
                                            <h6 className="header-pretitle">Free Access To Our Dashboard</h6>
                                            <h1 className='header-title'>Register</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='row align-items-center'>
                                <div className='container-fluid'>
                                    {message}

                                    <form onSubmit={this.handleSubmit} id='signup'>

                                        <div className='row'>
                                            <div className='col-6 form-group'>
                                                <label>Organization Name</label>
                                                <input type='text' name='tenant_name' className='form-control'/>
                                            </div>
                                            <div className='col-6 form-group'>
                                                <label>Address</label>
                                                <input type='text' name='tenant_address' className='form-control'/>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-6 form-group'>
                                                <label>First Name</label>
                                                <input type='text' name='first_name' className='form-control'/>
                                            </div>
                                            <div className='col-6 form-group'>
                                                <label>Last Name</label>
                                                <input type='text' name='last_name' className='form-control'/>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-6 form-group'>
                                                <label>Phone Number</label>
                                                <input type="text" name='phone_number' className="form-control" />
                                            </div>
                                            <div className='col-6 form-group'>
                                                <label>Email Address</label>
                                                <input type='email' name='email' className='form-control' />
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className="col-6 form-group">
                                                <label>Password</label>
                                                <div className="input-group input-group-merge">
                                                    <input type="password" name='password' id='password' className="form-control form-control-appended"/>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text" onMouseDown={this.showPassword.bind(this, 'password')}
                                                              onMouseUp={this.hidePassword.bind(this, 'password')} onMouseLeave={this.hidePassword.bind(this, 'password')}>
                                                            <i className="fa fa-eye"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6 form-group">
                                                <label>Confirm Password</label>
                                                <div className="input-group input-group-merge">
                                                    <input type="password" name='confirm_password' id='confirm_password' className="form-control form-control-appended"/>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text" onMouseDown={this.showPassword.bind(this, 'confirm_password')}
                                                              onMouseUp={this.hidePassword.bind(this, 'confirm_password')} onMouseLeave={this.hidePassword.bind(this, 'confirm_password')}>
                                                            <i className="fa fa-eye"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        {button}
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}