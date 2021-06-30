import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ children }) => {
    return (
        <button className="btn btn-primary btn-block" type="submit">
            { children }
        </button>
    )
}

SubmitButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.node
    ]).isRequired
}

export default SubmitButton;
