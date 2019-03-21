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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title  text-sm-center">Sales</h6>
                                <h4 className="card-text text-lg-center">Kshs. 200, 350</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title text-sm-center">Orders</h6>
                                <h4 className="card-text text-lg-center">320</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title text-sm-center">Products</h6>
                                <h4 className="card-text text-lg-center">600</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title text-sm-center">Customers</h6>
                                <h4 className="card-text text-lg-center">64</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-lg-5">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Pending Orders</h4>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}