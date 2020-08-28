import React from 'react';
import './navbar.css';


const Navbar = () => {
    return (
        <div className = "navbar">
            <div className = "navbar-content-wrapper">
                <div className = "navbar-header">
                    <a href="/">Kyle Palermo</a>
                </div>
                <div className = "navbar-links">
                    <span>1/2/3/4</span>
                </div>
            </div>
        </div>
    );
};
export default Navbar;