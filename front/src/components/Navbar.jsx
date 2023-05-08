import React from "react";
import "../styles/Navbar.css";
import InfoButton from "./InfoButton.jsx";

// Navbar component containing 
function Navbar() {
    return (
        <div className="navbar">
            <h1>Climate Change Modelling</h1>
            <InfoButton text = {"This Eco Emissions Simulator explores the impact of different factors on global temperature, as shown on the world map."}></InfoButton>
        </div>
    );
}

export default Navbar;