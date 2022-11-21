// Sidebar component

import React, { Component } from 'react';


import ApplyButton from './ApplyButton.jsx';
import '../styles/Sidebar.css';

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <div className="sidebar">
                <div className="body">
                    {/* TODO add a button component */}
                    <div className="overlay">
                        <ApplyButton onClick={this.applyChanges} text="Apply"/>
                    </div>
                </div>
            </div >

        );
    }

    /**
     * Triggered when the apply button is clicked
     */
    async applyChanges() {
        // TODO implement this
        console.log('apply changes');
    }
}

export default Sidebar;