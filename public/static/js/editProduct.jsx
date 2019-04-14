import React from 'react';

export default class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            product: []
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
                                    <h6 className='header-pretitle'>Product Details</h6>
                                    <h1 className='header-title'>{this.props.params.product ? `Edit ${this.state.product.name}` : 'New Product'}</h1>
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