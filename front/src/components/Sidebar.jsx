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
                        <a href="#"><h1>Apply</h1></a>
                    </div>
                </div>
            </div >

        );
    }
}

export default Sidebar;