import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('detailModal');

class DetailModal extends Component {
    constructor(props) {
        super(props);

        this.element = document.createElement('DIV');
    }

    componentDidMount() {
        modalRoot.appendChild(this.element);
        this.getRefRect();
        window.addEventListener('resize', this.getRefRect());
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }

    getRefRect(){
        var rect = document.getElementById("refRectWidth").getBoundingClientRect(); //rect.top, rect.left
        var displayAreaWidth = document.getElementById("refRect").offsetWidth;
        var textDivWidth = document.getElementById("refRectWidth").offsetWidth;
        document.documentElement.style.setProperty('--detailTextLeft', ((rect.left/displayAreaWidth) * 100) + "vw");
        document.documentElement.style.setProperty('--fixedTextDivWidth', ((textDivWidth/displayAreaWidth) * 100) + "%");
    }

    render() {
        return createPortal(this.props.children, this.element);
    }
}

export default DetailModal;
