import React from 'react';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
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