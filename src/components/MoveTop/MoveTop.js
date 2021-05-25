import React from 'react';
import { Link } from 'react-router-dom';

const MoveTop = () => {

    const handleButtonClicked = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Link onClick={handleButtonClicked} to="/" id="back-to-top" style={{ opacity: '1', visibility: 'visible' }}>
            <i className="fa fa-angle-up"></i>
            <h1>sdfsd</h1>
        </Link>
    );
};

export default MoveTop;