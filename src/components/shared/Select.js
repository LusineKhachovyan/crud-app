import React from 'react';
import { ErrorMessage } from 'formik';
import Select from 'react-select';

function CustomSelect(props) {
    const { label, name, invalid, options, defaultValue, setFieldValue, ...rest } = props;

    return (
        <div className="form-element">
            <label htmlFor={name} dangerouslySetInnerHTML={{ __html: label }} />
            <Select
                options={options}
                className={`react-select-container ${invalid ? 'invalid' : ''}`}
                classNamePrefix="react-select"
                defaultValue={defaultValue}
                onChange={(value) => {
                    if (value) {
                        setFieldValue(name, value.value);
                    } else {
                        setFieldValue(name, '');
                    }
                }}
                {...rest}
            />
            <ErrorMessage name={name} render={(msg) => <p className="error-msg">{msg}</p>} />
        </div>
    );
}

export default CustomSelect;
