import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// import Modal from 'react-modal';
import Loader from '../shared/Loader';
import { getUsers, clearUsers } from '../../redux/users/userActions';

function Users() {
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());

        return () => {
            dispatch(clearUsers());
        };
    }, [dispatch]);

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
                        <button className="icon-btn edit-btn">
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button className="icon-btn delete-btn">
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
        </div>
    );
}

export default Users;
