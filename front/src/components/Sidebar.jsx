// Sidebar component
import React from 'react';

// Local components
import ApplyButton from './ApplyButton.jsx';
import FactorsList from './FactorsList.jsx';

// CSS
import '../styles/Sidebar.css';
import '../styles/Slider.css';

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