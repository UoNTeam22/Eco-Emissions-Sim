// Body component
import React, { Component } from 'react';

// Local components
import TemperatureMap from './TemperatureMap';
import Timescale from './Timescale';

// CSS
import '../styles/View.css';

class View extends Component {
    state = {}
    time = React.createRef();

    getTimeRef() {
        return this.time.current; // Why is this returning undefined?
    }

    render() {
        return (
            <div className="view">
                <div className="map">
                    <TemperatureMap />
                </div>
                <div className="timescale">
                    <Timescale ref={this.time}/>
                </div>
            </div>
        );
    }
}

export default View;