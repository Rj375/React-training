
import React from 'react';

import PropTypes from 'prop-types';


const propTypes = {};

const defaultProps = {};


class Button extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        var {click,clear} = this.props
        return <div>
            <button onClick={click}>Submit</button>
            <button onClick={clear}>Clear</button>
        </div>;
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
// #endregion

export default Button;