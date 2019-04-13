import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div className='header'>
                    <div className='container-fluid'>
                        <div className='header-body'>
                            <h2>Dashboard</h2>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 col-xl'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center'>
                                        <div className='col'>
                                            <h6 className='card-title text-uppercase text-muted mb-2'>Total Sales</h6>
                                            <span className='h2 mb-0'>Kshs 24,500 </span>
                                            <span className='badge badge-soft-success mt-n1'>
                                                    +3.5%
                                                </span>
                                        </div>
                                        <div className='col-auto'>
                                            <span className='h2 fa fa-dollar-sign text-muted mb-0' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 col-xl'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center'>
                                        <div className='col'>
                                            <h6 className='card-title text-uppercase text-muted mb-2'>
                                                Complete Orders
                                            </h6>
                                            <span className='h2 mb-0'>763</span>
                                        </div>
                                        <div className='col-auto'>
                                            <span className='h2 fa fa-shopping-cart text-muted mb-0' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 col-xl'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center'>
                                        <div className='col'>
                                            <h6 className='card-title text-uppercase text-muted mb-2'>
                                                Shipped
                                            </h6>
                                            <div className='row align-items-center no-gutters'>
                                                <div className='col-auto'>
                                                    <span className='h2 mr-2 mb-0'>84 </span>
                                                </div>
                                                {/*<div className='col'>*/}
                                                {/*    <div className='progress progress-sm'>*/}
                                                {/*        <div className='progress-bar' role='progressbar' style={{width: '85%'}} aria-valuenow='85' aria-valuemin='0' aria-valuemax='100' />*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                        <div className='col-auto'>
                                            <span className='h2 fa fa-shipping-fast text-muted mb-0' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 col-xl'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center'>
                                        <div className='col'>
                                            <h6 className='card-title text-uppercase text-muted mb-2'>
                                                Total Customers
                                            </h6>
                                            <span className='h2 mb-0'>654</span>
                                        </div>
                                        <div className='col-auto'>
                                            <span className='h2 fa fa-users text-muted mb-0' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}