import React from 'react';

export default class EditOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: []
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
                                    <h6 className='header-pretitle'>Order Details</h6>
                                    <h1 className='header-title'>{this.props.params.order ? `Edit ${this.state.order.name}` : 'New Order'}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                </div>
            </div>
        );
    }

}