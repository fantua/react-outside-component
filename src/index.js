import omit from 'lodash/omit';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class OutsideComponent extends Component {

    constructor(props) {
        super(props);

        this.handleDocumentClick = this.handleDocumentClick.bind(this);
    }

    static propTypes = {
        tag: PropTypes.string,
        isOpen: PropTypes.bool,
        children: PropTypes.node,
        onClickOutside: PropTypes.func.isRequired,
    };

    static defaultProps = {
        tag: 'div',
        isOpen: true,
    };

    DOMEvents = ['click'];

    componentDidMount() {
        if (this.props.isOpen) {
            this.addEvents();
        }
    }

    componentDidUpdate({ isOpen }) {
        if (this.props.isOpen !== isOpen) {
            this.handleProps();
        }
    }

    componentWillUnmount() {
        this.removeEvents();
    }

    handleProps() {
        (this.props.isOpen) ? this.addEvents() : this.removeEvents();
    }

    handleDocumentClick(e) {
        const container = ReactDOM.findDOMNode(this);

        if (!container.contains(e.target)) {
            this.props.onClickOutside(e);
        }
    }

    addEvents() {
        this.DOMEvents.forEach(event =>
            document.addEventListener(event, this.handleDocumentClick, true)
        );
    }

    removeEvents() {
        this.DOMEvents.forEach(event =>
            document.removeEventListener(event, this.handleDocumentClick, true)
        );
    }

    render() {
        const { tag: Tag, children, ...props } = omit(this.props, ['isOpen', 'onClickOutside']);

        return <Tag {...props}>{children}</Tag>;

    }

}

export default OutsideComponent;