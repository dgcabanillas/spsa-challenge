import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
    return (
        <div className="alert alert-danger mt-2 mt-sm-3 mb-0" role="alert">
            { message }
        </div>
    )
}

ErrorMessage.defaultProps = {
    message: '',
}

ErrorMessage.propTypes = {
    message: PropTypes.string
}

export default ErrorMessage;
