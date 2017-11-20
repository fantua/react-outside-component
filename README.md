# react-outside-component
React component for handling outside clicks. Inspired by [reactstrap](https://github.com/reactstrap/reactstrap). 

[![npm version](https://img.shields.io/npm/v/react-outside-component.svg?style=flat-square)](https://www.npmjs.com/package/react-outside-component)

## Installation

```sh
yarn add react-outside-component
```

## Api

### Properties

```js
OutsideComponent.propTypes = {
    tag: PropTypes.string, // default 'div'
    isOpen: PropTypes.bool, // default true
    children: PropTypes.node,
    onClickOutside: PropTypes.func.isRequired,
};
```

## Example

```js
import React, { Component } from 'react';
import Outside from 'react-outside-component';

export default class CustomDropdown extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    
    handleOutsideClick(e) {
        // ...
    }
    
    render() {
        return (
            <Outside tag="ul" className="dropdown-menu" onClickOutside={this.handleOutsideClick}>
                <li>Items..</li>
            </Outside>
        );
    }
}
``` 

## License

MIT

