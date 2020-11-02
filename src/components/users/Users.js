import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import Loader from '../shared/Loader';
import ConfirmationModal from '../shared/ConfirmationModal';
import { getUsers, clearUsers, removeUser } from '../../redux/users/userActions';

function Users() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentUserId, setCurrentUserId] = useState();

    useEffect(() => {
        dispatch(getUsers());
        return () => {
            dispatch(clearUsers());
            setCurrentUserId();
        };
    }, [dispatch]);

    const openModal = (userId) => {
        setModalIsOpen(true);
        setCurrentUserId(userId);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const deleteUser = () => {
        setModalIsOpen(false);
        dispatch(removeUser(currentUserId));
    };

    const usersList =
        users &&
        users.map((user) => (
            <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                    <div className="actions">
                        <button type="button" className="icon-btn edit-btn">
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                            type="button"
                            className="icon-btn delete-btn"
                            onClick={() => openModal(user.id)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </td>
            </tr>
        ));

    return (
        <div className="container">
            <div className="table-header">
                <h1>Users</h1>
                <Link to="/users/add" className="btn primary sm with-icon">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add User</span>
                </Link>
            </div>

            {loading ? (
                <Loader />
            ) : error ? (
                <p className="error">Something went wrong</p>
            ) : (
                users && (
                    <div className="table-content card">
                        <table>
                            <thead>
                                <tr>
                                    <th width="20%">First Name</th>
                                    <th width="20%">Last Name</th>
                                    <th width="40%">Email</th>
                                    <th width="10%">Age</th>
                                    <th width="10%" className="center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    usersList
                                ) : (
                                    <tr>
                                        <td colSpan="5">
                                            <p className="no-data">Nothing was found</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )
            )}

            {modalIsOpen && (
                <ConfirmationModal
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                    onConfirm={deleteUser}
                    title="Delete User"
                    bodyText="Are you sure you want to delete this user?"
                ></ConfirmationModal>
            )}
        </div>
    );
}

Users.propTypes = {
    // hideChangePassword: PropTypes.func,
    // changePassword: PropTypes.func,
    // setChangePasswordError: PropTypes.func,
    // changePasswordSuccess: PropTypes.bool,
    // changePasswordError: PropTypes.string,
};

export default Users;
