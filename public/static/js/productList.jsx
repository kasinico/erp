import React from 'react';

export default class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.status
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            status: nextProps.status
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-6 col-xl'>
                        <div className='card bg-white'>
                            <div className='card-body'>
                                {
                                    (this.props.products.length > 0) ?
                                        this.state.status

                                        : <div className='row align-items-center'>
                                            <div className='col text-center'>
                                                {
                                                    this.state.status ?
                                                        <h6 className='card-title text-uppercase text-muted mb-2'>{`${this.state.status} Products`}</h6> : ''
                                                }
                                                <span className='h2 mb-0 text-capitalize'>{`0 Products Were Found`}</span>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}