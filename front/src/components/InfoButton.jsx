import React, {  useState } from 'react';
import { CiCircleInfo } from "react-icons/ci";
import '../styles/InfoButton.css';

const InfoButton = ({text}) => {
    const[isVisible, setIsVisible] = useState(false);

    return (
        <div className="toolkit-container"
            onMouseEnter = {() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
        <CiCircleInfo />
        {isVisible && <div className='toolkit-text'>{text}</div>}
        </div>
    );
};

export default InfoButton;