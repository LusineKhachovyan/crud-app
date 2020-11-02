import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormElement from '../shared/FormElement';
import { addHome } from '../../redux/homes/homeActions';
import { getUsers } from '../../redux/users/userActions';

function AddHome(props) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    const usersList =
        users &&
        users.map((user) => {
            return {
                value: `${user.firstName} ${user.lastName}`,
                label: `${user.firstName} ${user.lastName}`,
            };
        });

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const initialValues = {
        user: '',
        title: '',
        location: '',
        land: '',
        place: '',
        bedrooms: '',
    };

    const validationSchema = Yup.object({
        user: Yup.string().required('This field is mandatory'),
        title: Yup.string().required('This field is mandatory'),
        location: Yup.string().required('This field is mandatory'),
        land: Yup.number()
            .typeError('Please eter a valid number')
            .positive('Please eter a positive number')
            .required('This field is mandatory'),
        place: Yup.number()
            .typeError('Please eter a valid number')
            .positive('Please eter a positive number')
            .required('This field is mandatory'),
        bedrooms: Yup.number()
            .typeError('Please eter a valid number')
            .integer('Please eter a valid number')
            .positive('Please eter a positive number')
            .required('This field is mandatory'),
    });

    const onAddHome = (values) => {
        console.log('Form data', values);
        const { user, title, location, land, place, bedrooms } = values;
        const data = { user, title, location, land, place, bedrooms };
        dispatch(addHome(data, props.history));
    };

    return (
        <div className="container sm">
            <div className="form-wrap card">
                <h2>Add Home</h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onAddHome}
                >
                    {(formik) => {
                        console.log(123, formik);
                        return (
                            <Form>
                                <FormElement
                                    control="select"
                                    label="User Id"
                                    name="user"
                                    invalid={formik.touched.user && formik.errors.user}
                                    options={usersList}
                                    setFieldValue={formik.setFieldValue}
                                    defaultValue={formik.values.user}
                                    placeholder=""
                                />

                                <FormElement
                                    control="input"
                                    type="text"
                                    label="Title"
                                    name="title"
                                    invalid={formik.touched.title && formik.errors.title}
                                />
                                <FormElement
                                    control="input"
                                    type="text"
                                    label="Location"
                                    name="location"
                                    invalid={formik.touched.location && formik.errors.location}
                                />
                                <FormElement
                                    control="input"
                                    type="text"
                                    label="Land (m<sup>2</sup>)"
                                    name="land"
                                    invalid={formik.touched.land && formik.errors.land}
                                />
                                <FormElement
                                    control="input"
                                    type="text"
                                    label="Place (m<sup>2</sup>)"
                                    name="place"
                                    invalid={formik.touched.place && formik.errors.place}
                                />
                                <FormElement
                                    control="input"
                                    type="text"
                                    label="No. of Bedrooms"
                                    name="bedrooms"
                                    invalid={formik.touched.bedrooms && formik.errors.bedrooms}
                                />

                                <div className="form-actions">
                                    <Link to="/homes" className="btn outline">
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        className="btn primary"
                                        // disabled={!formik.isValid || formik.isSubmitting}
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

export default AddHome;
