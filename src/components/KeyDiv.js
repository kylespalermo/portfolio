import React, {Component} from 'react';

class KeyDiv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bodyWidthOnRender: document.body.offsetWidth,
            transMax: document.body.offsetWidth
        }
      }
    
    componentDidMount() {
        window.addEventListener('resize', this.updateSize);
    }

    updateSize = () => {
        var widthReduction = (this.state.bodyWidthOnRender - document.body.clientWidth) 
        this.setState((prevState) => ({ transMax: prevState.transMax - widthReduction }));
        this.setState({bodyWidthOnRender: document.body.offsetWidth})
    }

    render() {
        const char = this.props.char;
        const isSkewed = this.props.isSkewed;
        const closeSkew = this.props.closeSkew;

        return (
        <div className="key-div" style={{transform: isSkewed ? `rotate3d(.25, .1, 0, .125turn) translateX(${Math.floor(Math.random()*this.state.transMax)}%)` : `rotate3d(0, 0, 0, 0) translateX(0px)`}} onMouseEnter={closeSkew} >
            <div className="top">{char}</div> 
            <div className="bottom"></div> 
        </div>
        );
      }
    }


export default KeyDiv; 