import React, { Component } from "react";
import './NameBanner.css';
import RotateComponent from './rotateComponent'

class NameBanner extends Component {
    
render() {
    return (
        <div id = "squaresWrapper" >
            <RotateComponent />
            <RotateComponent />
            <RotateComponent />
            <RotateComponent />
            <RotateComponent />
            <RotateComponent />
        </div>    
        );
    }
};

export default NameBanner;