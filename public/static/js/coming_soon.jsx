import React from 'react';

export default class ComingSoon extends React.Component {
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
                                <div className='col text-center'>
                                    <h6 className="header-pretitle">Feature coming soon</h6>
                                    <h1 className='header-title'>Coming Soon</h1>
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