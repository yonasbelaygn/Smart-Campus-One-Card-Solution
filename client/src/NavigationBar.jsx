import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Login'); // Navigate to About page
    };

    return (
        <button onClick={handleClick}>Login</button>
    );
};

export default NavigationBar;