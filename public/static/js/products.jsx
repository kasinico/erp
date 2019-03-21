import React from 'react';
import {ClipLoader} from "react-spinners";

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            message: false,
            products: []
        }
    }

    componentDidMount() {
        this.fetchProducts();
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

    render() {
        if (this.state.loading)
            return (
                <div className="text-center">
                    <ClipLoader color={'#cf2027'} />
                </div>
            );
        return (
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <h4>Products</h4>
                        </div>
                        <div className="col-6">
                            <button className="float-right btn btn-lg btn-outline-dark">New Product</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">

                </div>
            </div>
        );
    }

}