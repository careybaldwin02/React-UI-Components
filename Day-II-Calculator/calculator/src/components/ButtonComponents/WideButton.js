import React from 'react';
import './Button.css';


const WideButton = props => {
    return (
    <button className = {`w-btn-styles`}> {props.text}</button>
    );
    };
    
export default WideButton;