import React from 'react';
import {ClipLoader} from "react-spinners";
import {browserHistory} from "react-router";

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message: false,
            products: []
        }
    }

    componentDidMount() {
        // this.fetchProducts();
    }

    fetchProducts() {
        $.ajax({
            url: `${env.public_url}api/product`,
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('erp_token')
            },
            error: function (xhr, status, error) {
                var response = error;
                switch (xhr.status) {
                    case 500:
                        response = xhr['responseJSON']['message'];
                        break;
                    default:
                        response = xhr['responseJSON']['detail'];
                }
                this.setState({
                    message: true,
                    message_type: 'alert alert-danger',
                    response: response,
                    loading: false,
                })
            }.bind(this),
            success: function (res) {
                this.setState({
                    products: res,
                    loading: false,
                })
            }.bind(this)
        })
    }

    handleNavigation = (path, e) => {
        e.preventDefault();
        browserHistory.push(`${env.dir}${path}`);
    };

    render() {
        if (this.state.loading)
            return (
                <div className="text-center">
                    <ClipLoader color={'#cf2027'} />
                </div>
            );
        return (

            <div className='card'>
                <div className='header'>
                    <div className='container-fluid'>
                        <div className='header-body'>
                            <div className='row align-items-end'>
                                <div className='col'>
                                    <h6 className="header-pretitle">Product Listing</h6>
                                    <h1 className='header-title'>Products</h1>
                                </div>
                                <div className='col-auto'>
                                    <a href={`${env.dir}/products/new`}
                                       onClick={this.handleNavigation.bind(this, '/products/new')}
                                       className='btn btn-primary'>
                                        New Product
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='row align-items-center'>
                    </div>
                </div>
            </div>
        );
    }

}