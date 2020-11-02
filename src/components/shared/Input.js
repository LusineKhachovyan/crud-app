import React from 'react';
import { Field, ErrorMessage } from 'formik';

function Input(props) {
    const { label, name, invalid, ...rest } = props;
    return (
        <div className="form-element">
            <label htmlFor={name} dangerouslySetInnerHTML={{ __html: label }} />
            <Field
                id={name}
                name={name}
                className={invalid ? 'invalid' : ''}
                autoComplete="off"
                {...rest}
            />
            <ErrorMessage name={name} render={(msg) => <p className="error-msg">{msg}</p>} />
        </div>
    );
}

export default Input;
