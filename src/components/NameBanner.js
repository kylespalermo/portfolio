import React, { Component } from "react";
import './NameBanner.css';

class NameBanner extends Component {
    constructor(props) {
        super(props);

        this.state = {

            rotVars: [0, 0, 0, 0, 0, 0]
            // rotVars: [
            //     {
            //         name: "rotVar1",
            //         rotNum: 0,
            //     },
            //     {
            //         name: "rotVar2",
            //         rotNum: 0,
            //     },
            //     {
            //         name: "rotVar3",
            //         rotNum: 0,
            //     },
            //     {
            //         name: "rotVar4",
            //         rotNum: 0,
            //     },
            //     {
            //         name: "rotVar5",
            //         rotNum: 0,
            //     },
            //     {
            //         name: "rotVar6",
            //         rotNum: 0,
            //     }
            // ]
            
        };
    }

    setRotation(rotVarNum) {
        this.state.rotVars[rotVarNum] = this.state.rotVars[rotVarNum] + 90;
        console.log(this.state.rotVars[rotVarNum]);
        document.documentElement.style.setProperty('--rotVar' + rotVarNum, this.state.rotVars[rotVarNum] + "deg");
      }

    
    render() {
        return (
                <div id = "squaresWrapper" >
                    <div className = "square" id = "rotate1" onMouseOver={() => this.setRotation(0) }></div>
                    <div className = "square" id = "rotate2" onMouseOver={() => this.setRotation(1) }></div>
                    <div className = "square" id = "rotate3" onMouseOver={() => this.setRotation(2) }></div>
                    <div className = "square" id = "rotate4" onMouseOver={() => this.setRotation(3) }></div>
                    <div className = "square" id = "rotate5" onMouseOver={() => this.setRotation(4) }></div>
                    <div className = "square" id = "rotate6" onMouseOver={() => this.setRotation(5) }></div>

                </div>
            
            );
        }
      };
      export default NameBanner;