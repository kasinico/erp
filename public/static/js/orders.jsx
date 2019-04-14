import React from 'react';
import {browserHistory} from "react-router";

export default class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message: false,
            orders: [],
            nav: {
                all:        `nav-link ${this.props.params.status ? '': 'active'}`,
                complete:   `nav-link ${this.props.params.status === 'complete'     ? 'active': ''}`,
                pending:    `nav-link ${this.props.params.status === 'pending'      ? 'active' : ''}`,
                processing: `nav-link ${this.props.params.status === 'processing'   ? 'active' : ''}`,
                refunded:   `nav-link ${this.props.params.status === 'refunded'     ? 'active' : ''}`
            }
        };
    }

    componentDidMount() {
    }

    handleNavigation = (path, e) => {
        e.preventDefault();
        browserHistory.push(`${env.dir}${path}`)
    };

    gotToAll = (e) => {
        e.preventDefault();
        this.setState({
            nav: {
                all:        'nav-link active',
                complete:   'nav-link',
                pending:    'nav-link',
                processing: 'nav-link',
                refunded:   'nav-link'
            }
        });
        browserHistory.push(`${env.dir}/orders`);
    };

    goToComplete = (e) => {
        e.preventDefault();
        this.setState({
            nav: {
                all:        'nav-link',
                complete:   'nav-link active',
                pending:    'nav-link',
                processing: 'nav-link',
                refunded:   'nav-link'
            }
        });
        browserHistory.push(`${env.dir}/orders/complete`);
    };

    goToPending = (e) => {
        e.preventDefault();
        this.setState({
            nav: {
                all:        'nav-link',
                complete:   'nav-link',
                pending:    'nav-link active',
                processing: 'nav-link',
                refunded:   'nav-link'
            }
        });
        browserHistory.push(`${env.dir}/orders/pending`);
    };

    goToProcessing = (e) => {
        e.preventDefault();
        this.setState({
            nav: {
                all:        'nav-link',
                complete:   'nav-link',
                pending:    'nav-link',
                processing: 'nav-link active',
                refunded:   'nav-link'
            }
        });
        browserHistory.push(`${env.dir}/orders/processing`);
    };

    goToRefunded = (e) => {
        e.preventDefault();
        this.setState({
            nav: {
                all:        'nav-link',
                complete:   'nav-link',
                pending:    'nav-link',
                processing: 'nav-link',
                refunded:   'nav-link active'
            }
        });
        browserHistory.push(`${env.dir}/orders/refunded`);
    };

    render() {
        return (

            <div className='card'>
                <div className='header mt-md-5'>
                    <div className='container-fluid'>
                        <div className='header-body'>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <h6 className="header-pretitle">Orders Listing</h6>
                                    <h1 className='header-title'>Orders</h1>
                                </div>
                                <div className='col-auto'>
                                    <a href={`${env.dir}/orders/new`}
                                       onClick={this.handleNavigation.bind(this, '/orders/new')}
                                       className='btn btn-primary'>
                                        New Order
                                    </a>
                                </div>
                            </div>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <ul className='nav nav-tabs nav-overflow header-tabs'>
                                        <li className='nav-item'>
                                            <a href={'#'} className={this.state.nav.all} onClick={this.gotToAll}>
                                                All <span className='badge badge-pill badge-soft-secondary'>823</span>
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a href={'#'} className={this.state.nav.complete} onClick={this.goToComplete}>
                                                Complete <span className='badge badge-pill badge-soft-secondary'>72</span>
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a href={'#'} className={this.state.nav.pending} onClick={this.goToPending}>
                                                Pending <span className='badge badge-pill badge-soft-secondary'>24</span></a>
                                        </li>
                                        <li className='nav-item'>
                                            <a href={'#'} className={this.state.nav.processing} onClick={this.goToProcessing}>
                                                Processing <span className='badge badge-pill badge-soft-secondary'>3</span>
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a href={'#'} className={this.state.nav.refunded} onClick={this.goToRefunded}>
                                                Refunded <span className='badge badge-pill badge-soft-secondary'>71</span>
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

                        })}
                    </div>
                </div>
            </div>
        );
    }

}