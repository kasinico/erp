import React from 'react';
import {ClipLoader} from 'react-spinners';
import {browserHistory} from 'react-router';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: false,
            processing_form: false}
    }

    componentDidMount() {
        document.title = 'Admin Login';
        if (this.props.location.state !== "undefined")
            this.setState(this.props.location.state);
        localStorage.removeItem('erp_token')
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.setState({processing_form: true, message: false});
        $.ajax({
            url: `${env.public_url}api/login`,
            dataType: 'json',
            method: 'post',
            data: {
                'client_id'     : '2',
                'client_secret' : '4g6QnNg0J1XlYjmRi9dziy4BhfkomtnYhtWUgPP7',
                'grant_type'    : 'password',
                'username'      : this.refs.email.value,
                'password'      : this.refs.password.value,
            },
            error: function(xhr, status, error) {
                var response = error;
                switch (xhr.status) {
                    case 500:
                        response = xhr['responseJSON']['message']
                        break;
                    default:
                        response = xhr['responseJSON']['detail'];
                }
                this.setState({
                    message: true,
                    message_type: 'alert alert-danger',
                    response: response,
                    processing_form: false,
                });
            }.bind(this),
            success: function (res) {
                localStorage.setItem('erp_token', res.access_token);
                browserHistory.push({pathname: `${env.dir}`});
            }.bind(this)
        })
    };

    handleNavigation = (path, e) => {
        e.preventDefault();
        browserHistory.push(`${env.dir}${path}`);
    };

    showPassword = (e) => {
        let x = this.refs.password;
        x.type = 'text';
    };

    hidePassword = (e) => {
        let x = this.refs.password;
        x.type = 'password';
    };

    render() {
        var button = (
            <React.Fragment>
                <button className="btn btn-lg btn-block btn-primary mb-3">
                    Sign in
                </button>

                <div className="text-center">
                    <small className="text-muted text-center">
                        Don't have an account yet? <a href={`${env.dir}/signup`} onClick={this.handleNavigation.bind(this, '/signup')}>Sign up</a>.
                    </small>
                </div>
            </React.Fragment>
        );
        var message = (
            <p />
        );
        if (this.state.processing_form)
            button = (
                <ClipLoader color={'#cf2027'} />
            );
        if (this.state.message)
            message = (
                <div className={this.state.message_type}>
                    <p>{this.state.response}</p>
                </div>
            );

        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-5 col-xl-4 my-5'>

                        <h5 className="display-4 text-center mb-3">
                            Laravel
                        </h5>

                        <p className="text-muted text-center mb-5">
                            Free access to our dashboard.
                        </p>

                        <form onSubmit={this.handleLogin}>
                            {message}
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" ref='email' className="form-control" placeholder="name@address.com" />

                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label>Password</label>
                                    </div>
                                    <div className="col-auto">
                                        <a href={`${env.dir}/reset-password`} onClick={this.handleNavigation.bind(this, '/reset-password')}
                                           className="form-text small text-muted">
                                            Forgot password?
                                        </a>

                                    </div>
                                </div>
                                <div className="input-group input-group-merge">

                                    <input type="password" ref='password' className="form-control form-control-appended"
                                           placeholder="Enter your password" />

                                    <div className="input-group-append">
                                        <span className="input-group-text" onMouseDown={this.showPassword} onMouseUp={this.hidePassword} onMouseLeave={this.hidePassword}>
                                            <i className="fa fa-eye" />
                                        </span>
                                    </div>

                                </div>
                            </div>

                            {button}

                        </form>

                    </div>
                </div>
            </div>

        );
    }

}