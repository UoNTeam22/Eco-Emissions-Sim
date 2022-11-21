// Sidebar component

import React, { Component } from 'react';
import '../styles/Sidebar.css';

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <div className="sidebar">
                <div className="body">
                    {/* TODO add a button component */}
                    <div className="button apply">
                        <a href="#"><h1>Apply</h1></a>
                    </div>
                </div>
            </div >

        );
    }
}

export default Sidebar;