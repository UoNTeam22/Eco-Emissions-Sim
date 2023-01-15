// Body component

import React, { Component } from 'react';
import '../styles/View.css';
import Map from './Map';
import TempMap from './TempMap';

class View extends Component {
    state = {}
    render() {
        return (
            <div className="view">
                <div className="body">
                    <TempMap />
                </div>
            </div>
        );
    }
}

export default View;