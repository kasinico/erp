import React from 'react';
import {ClipLoader} from 'react-spinners';
import {browserHistory} from 'react-router';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            processing_form: false,
            message: false,
        }
    }

    componentDidMount() {
        document.title = 'Admin Login';
        localStorage.removeItem('erp_token')
    }

    handleLogin(e) {
        e.preventDefault();
        this.setState({processing_form: true, message: false});
        $.ajax({
            url: `${env.public_url}/api/login`,
            dataType: 'json',
            method: 'post',
            data: {
                'client_id'     : '2',
                'client_secret' : '4g6QnNg0J1XlYjmRi9dziy4BhfkomtnYhtWUgPP7',
                'grant_type'    : 'password',
                'username'      : this.refs.email.value,
                'password'      : this.refs.password.value,
            },
            error: function(xhr,status,error) {
                var response = error;
                try {
                    response = xhr['responseJSON']['detail'];
                } catch (e) {}
                this.setState({
                    message: true,
                    message_type: 'alert alert-danger',
                    response: response,
                    processing_form: false,
                })
            }.bind(this),
            success: function (res) {
                localStorage.setItem('erp_token', res.access_token);
                browserHistory.push({pathname: `${env.dir}`});
            }.bind(this)
        })
    }

    render() {
        var button = (
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
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
            <form className="form-signin" onSubmit={this.handleLogin.bind(this)}>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Laravel Inventory Management</h1>
                    <h6>Login to continue</h6>
                    {message}
                </div>

                <div className="form-label-group">
                    <input type="email" ref="email" className="form-control" placeholder="Email address"
                           autoFocus="" />
                    <label htmlFor="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                    <input type="password" ref="password" className="form-control" placeholder="Password"
                            />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                {button}
                <p className="mt-5 mb-3 text-muted text-center">© 2019</p>
            </form>

        );
    }

}