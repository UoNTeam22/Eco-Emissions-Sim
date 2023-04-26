import React from 'react';
import ApplyButton from './ApplyButton.jsx';
import FactorsList from './FactorsList.jsx';
import '../styles/Sidebar.css';

// Sidebar component containing Factors list and Apply button.
function Sidebar({ sliderStates, onApply }) {
    return (
        <div className="sidebar">
            <div className="body">
                <FactorsList sliderStates={sliderStates} />
                <div className="overlay">
                    <ApplyButton onClick={onApply} text="Apply" />
                </div>
            </div>
        </div >

    );
}

export default Sidebar;