import React, { Component } from 'react';
import axios from 'axios';



class GetRequestSetHeaders extends Component {
    constructor (props) {
        super(props);
        this.state = {totalReactPackages: null, errorMassage: null }
    }

    componentDidMount() {
        const headers = {
            'Content-Type': 'applicatiion/json'
        };
        axios.get('https://api.npms.io/v2/search?q=headers', {headers})
        .then(response => this.setState({totalReactPackages: response.data.total}));
    }
    render() {
        const { totalReactPakages } = this.state;
        return(
            <div className='card text-center m-3'>
            <h5 className='card-header'>GET Request with Set Headers</h5>
            <div className='card-body'>Total packages: {'totalReactPackages'} </div>
        </div>
        );
    }
}

export default GetRequestSetHeaders;