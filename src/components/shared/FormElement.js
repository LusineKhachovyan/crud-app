import React from 'react';
import Input from './Input';
import CustomSelect from './Select';

function FormElement(props) {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />;
        case 'select':
            return <CustomSelect {...rest} />;
        default:
            return null;
    }
}

export default FormElement;
