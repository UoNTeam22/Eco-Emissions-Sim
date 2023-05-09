import React from "react";
import FactorsList from "./FactorsList.jsx";
import "../styles/Sidebar.css";

/**
 * Sidebar component containing Factors list and Apply button.
 * @param {*} sliderStates
 * @param {*} onApply 
 * @returns 
 */
function Sidebar({ sliderStates, onApply, factorListStates }) {
    return (
        <div className="sidebar">
            <div className="body">
                <FactorsList sliderStates={sliderStates} factorListStates={factorListStates}/>
                <div className="overlay">
                    <button className="button" onClick={onApply}>Apply</button>
                </div>
            </div>
        </div >

    );
}

export default Sidebar;