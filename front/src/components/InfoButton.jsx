import React, {  useState } from 'react';
import '../styles/InfoButton.css';

const InfoButton = ({text}) => {
    const[isVisible, setIsVisible] = useState(false);

    return (
        <div className="toolkit-container"
            onMouseEnter = {() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
        <h1>placeholder</h1> 
        {isVisible && <div className='toolkit-text'>{text}</div>}
        </div>
    );
};

export default InfoButton;