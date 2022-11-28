// Body component

import React, { Component } from 'react';
import '../styles/View.css';
import Map from './Map';

class View extends Component {
    state = {}
    render() {
        return (
            <div className="view">
                <div className="body">
                    <Map />
                </div>
            </div>
        );
    }
}

export default View;