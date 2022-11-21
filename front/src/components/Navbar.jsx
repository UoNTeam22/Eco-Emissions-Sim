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
                <div className="navbar_links">
                    <div>
                        <a href="#">Graphs</a>
                    </div>
                    <div>
                        <a href="#">Share</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;