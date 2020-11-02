import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import FormElement from '../shared/FormElement';
import { addUser } from '../../redux/users/userActions';

function AddUser(props) {
    const dispatch = useDispatch();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('This field is mandatory'),
        lastName: Yup.string().required('This field is mandatory'),
        email: Yup.string().email('Invalid email format').required('This field is mandatory'),
        age: Yup.number()
            .typeError('Please eter a valid number')
            .integer('Please eter a valid number')
            .positive('Please eter a positive number')
            .required('This field is mandatory'),
        password: Yup.string().required('This field is mandatory'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), ''], 'Passwords must match')
            .required('This field is mandatory'),
    });

    const onAddUser = (values) => {
        console.log('Form data', values);
        const { firstName, lastName, email, age } = values;
        const data = { firstName, lastName, email, age };
        dispatch(addUser(data, props.history));
    };

    return (
        <div className="container sm">
            <div className="form-wrap card">
                <h2>Add User</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onAddUser}
                >
                    {(formik) => {
                        return (
                            <Form>
                                <FormElement
                                    control="input"
                                    type="text"
                                    label="First Name"
                                    name="firstName"
                                    invalid={formik.touched.firstName && formik.errors.firstName}
                                />
                                <FormElement
                                    control="input"
                                    type="text"
                                    label="Last Name"
                                    name="lastName"
                                    invalid={formik.touched.lastName && formik.errors.lastName}
                                />
                                <FormElement
                                    control="input"
                                    type="email"
                                    label="Email"
                                    name="email"
                                    invalid={formik.touched.email && formik.errors.email}
                                />
                                <FormElement
                                    control="input"
                                    type="text"
                                    label="Age"
                                    name="age"
                                    invalid={formik.touched.age && formik.errors.age}
                                />
                                <FormElement
                                    control="input"
                                    type="password"
                                    label="Password"
                                    name="password"
                                    invalid={formik.touched.password && formik.errors.password}
                                />
                                <FormElement
                                    control="input"
                                    type="password"
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    invalid={
                                        formik.touched.confirmPassword &&
                                        formik.errors.confirmPassword
                                    }
                                />
                                <div className="form-actions">
                                    <Link to="/" className="btn outline">
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        className="btn primary"
                                        disabled={!formik.isValid || formik.isSubmitting}
                                    >
                                        Add
                                    </button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default AddUser;
