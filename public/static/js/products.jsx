import React from 'react';
import {ClipLoader} from "react-spinners";
import {browserHistory} from "react-router";

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message: false,
            products: [],
            nav: {
                all:        `nav-link ${this.props.params.status ? '' : 'active'}`,
                popular:    `nav-link ${this.props.params.status === 'most-popular'     ? 'active' : ''}`,
                l_popular:  `nav-link ${this.props.params.status === 'least-popular'    ? 'active' : ''}`,
                outOfStock: `nav-link ${this.props.params.status === 'out-of-stock'     ? 'active' : ''}`
            }
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

    goToAll = (e) => {
        e.preventDefault();
        this.setState({
            nav: {
                all: 'nav-link active',
                popular: 'nav-link',
                l_popular: 'nav-link',
                outOfStock: 'nav-link'
            }
        });
        browserHistory.push(`${env.dir}/products`);
    };

    goToPopular = (e) => {
        e.preventDefault();
        this.setState({
            nav: {
                all: 'nav-link',
                popular: 'nav-link active',
                l_popular: 'nav-link',
                outOfStock: 'nav-link'
            }
        });
        browserHistory.push(`${env.dir}/products/most-popular`);
    };

    goToOutOfStock = (e) => {
      e.preventDefault();
      this.setState({
          nav: {
              all: 'nav-link',
              popular: 'nav-link',
              l_popular: 'nav-link',
              outOfStock: 'nav-link active'
          }
      });
      browserHistory.push(`${env.dir}/products/out-of-stock`)
    };

    goToLeastPopular = (e) => {
        e.preventDefault();
        this.setState({
            nav: {
                all: 'nav-link',
                popular: 'nav-link',
                l_popular: 'nav-link active',
                outOfStock: 'nav-link',
            }
        });
        browserHistory.push(`${env.dir}/products/least-popular`)
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
                <div className='header mt-md-1'>
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
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <ul className='nav nav-tabs nav-overflow header-tabs'>
                                        <li className='nav-item'>
                                            <a href={`${env.dir}/products`} className={this.state.nav.all} onClick={this.goToAll}>
                                                All <span className='badge badge-pill badge-soft-secondary'>0</span>
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a href={`${env.dir}/products/most-popular`} className={this.state.nav.popular} onClick={this.goToPopular}>
                                                Most Popular <span className='badge badge-pill badge-soft-secondary'>0</span>
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a href={`${env.dir}/products/least-popular`} className={this.state.nav.l_popular} onClick={this.goToLeastPopular}>
                                                Least Popular <span className='badge badge-pill badge-soft-secondary'>0</span>
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a href={`${env.dir}/products/out-of-stock`} className={this.state.nav.outOfStock} onClick={this.goToOutOfStock}>
                                                Out Of Stock <span className='badge badge-pill badge-soft-secondary'>0</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='row align-items-center'>
                        {React.cloneElement(this.props.children, {
                            status: this.props.params.status,
                            products: this.state.products
                        })}
                    </div>
                </div>
            </div>
        );
    }

}