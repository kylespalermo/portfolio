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
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }

    render() {
        return createPortal(this.props.children, this.element);
    }
}

export default DetailModal;