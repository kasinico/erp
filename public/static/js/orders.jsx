import React from 'react';

export default class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return (

            <div className='card'>
                <div className='header'>
                    <div className='container-fluid'>
                        <div className='header-body'>
                            <div className='row align-items-end'>
                                <div className='col'>
                                    <h6 className="header-pretitle">Orders Listing</h6>
                                    <h1 className='header-title'>Orders</h1>
                                </div>
                                <div className='col-auto'>
                                    <a href='#' className='btn btn-primary'>
                                        New Order
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