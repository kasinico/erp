import React from 'react';

export default class OrdersList extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.props.status}
            </div>
        );
    }

}