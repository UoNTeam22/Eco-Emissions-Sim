// Body component

import React, { Component } from 'react';
import '../styles/View.css';
import TemperatureMap from './TemperatureMap';

class View extends Component {
    state = {}
    render() {
        return (
            <div className="view">
                <div className="body">
                    <TemperatureMap />
                </div>
            </div>
        );
    }
}

export default View;