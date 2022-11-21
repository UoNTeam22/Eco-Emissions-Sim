// Sidebar component

import React, { Component } from 'react';
import '../styles/Sidebar.css';

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar_body">
                    <div className="apply_button">
                        <h1>Apply</h1>
                    </div>
                </div>
            </div >

        );
    }
}

export default Sidebar;