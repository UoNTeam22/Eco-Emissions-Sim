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
                    <div className="overlay">
                        <div className="button apply">
                            {/* TODO add JS click event */}
                            <h1>Apply</h1>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Sidebar;