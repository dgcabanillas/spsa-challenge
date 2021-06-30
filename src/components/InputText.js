import React from 'react';
import PropTypes from 'prop-types';

const InputText = ( props ) => {
    const { name, values, onChange, placeholder, icon, disabled } = props;

    return (
        <div className="form-group row input-group mb-2 mb-sm-3 mx-0">
            <div className="col-sm-5 px-0">
                <div className="bg-light input-group-text col-form-label">
                    <i className="material-icons">{ icon }</i>
                    <label className="px-2">{ placeholder }</label>
                </div>
            </div>
            <div className="col-sm-7 px-0">
                <input
                    type="text"
                    name={name}
                    value={values[name]}
                    placeholder={placeholder}
                    className="form-control"
                    onChange={onChange}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}

InputText.defaultProps = {
    name: "",
    values: [],
    onChange: () => {},
    placeholder: "",
    icon: "help",
    disabled: false,
}

InputText.propTypes = {
    name: PropTypes.string,
    values: PropTypes.object,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
}

export default InputText;
