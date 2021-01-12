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
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }

    getRefRect(){
        var rect = document.getElementById("refRect").getBoundingClientRect(); //rect.top, rect.left
        var windowWidth = document.getElementById("refRect").offsetWidth;
        document.documentElement.style.setProperty('--detailTextLeft', ((rect.left/windowWidth) * 100)+ "%");
    }

    render() {
        return createPortal(this.props.children, this.element);
    }
}

export default DetailModal;
