// Navbar component

import React, { Component } from 'react';
import '../styles/Navbar.css';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="navbar">
                <h1>Eco Emissions Sim</h1>
                {/* <div class="navbar_logo"></div> */}
            </div>
        );
    }
}

export default Navbar;