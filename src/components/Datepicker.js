import React from 'react';
import PropTypes from 'prop-types';
import OldDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = ( props ) => {
    const { name, values, onChange, placeholder, icon } = props;

    return (
        <div className="form-group row input-group mb-2 mb-sm-3 mx-0">
            <div className="col-sm-5 px-0">
                <div className="bg-light input-group-text col-form-label">
                    <i className="material-icons">{ icon }</i>
                    <label className="px-2">{ placeholder }</label>
                </div>
            </div>
            <div className="col-sm-7 px-0 datepicker-container">
                <OldDatePicker 
                    name={name}
                    selected={values[name]} 
                    onChange={onChange}
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
        </div>
    )
}

Datepicker.defaultProps = {
    name: "",
    values: [],
    onChange: () => {},
    placeholder: "",
    icon: "event_note",
}

Datepicker.propTypes = {
    name: PropTypes.string,
    values: PropTypes.object,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
}

export default Datepicker;
            