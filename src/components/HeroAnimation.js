import React, {Component} from 'react';
import KeyDiv from './KeyDiv';

class HeroAnimation extends Component {

    constructor() {
        super();
        this.state = {
            isSkewed: true
        }
        this.closeSkew = this.closeSkew.bind(this);
        this.openSkew = this.openSkew.bind(this);
      }
    
    closeSkew(){
        this.setState({ isSkewed: false})
        console.log("closeSkew")
    }

    openSkew(){
        this.setState({ isSkewed: true})
        console.log("openSkew")
    }
    

    render() {
        const name = "kylepalermo";
        const chars = [];
        for (let i = 0; i < name.length; i++) {
            chars.push(name.charAt(i));
        }
        return (
        <div class="hero-animation" onMouseLeave={this.openSkew}>
            <div class ="keys-wrapper">
                {chars.map((char, index) => <KeyDiv key={index} char={char} isSkewed={this.state.isSkewed} closeSkew={this.closeSkew}/>)}
            </div>
        </div>
        );
      }
    }


export default HeroAnimation; 