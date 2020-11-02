import axios from 'axios';
import { SET_USERS, SET_USERS_ERROR, CLEAR_USERS, DELETE_USER } from '../actionTypes';

const apiUrl = process.env.REACT_APP_BASE_API_URL;

export const getUsers = () => {
    return (dispatch) => {
        axios
            .get(`${apiUrl}/users`)
            .then((response) => {
                const users = response.data;
                dispatch(setUsers(users));
            })
            .catch((error) => {
                dispatch(setUsersError(error));
            });
    };
};

export const setUsers = (users) => {
    return { type: SET_USERS, users };
};

export const setUsersError = (error) => {
    return { type: SET_USERS_ERROR, error };
};

export const clearUsers = () => {
    return { type: CLEAR_USERS };
};

export const removeUser = (userId) => {
    return (dispatch) => {
        axios
            .delete(`${apiUrl}/users/${userId}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(deleteUser(userId));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const deleteUser = (id) => {
    return { type: DELETE_USER, id };
};

export const addUser = (data, history) => {
    return (dispatch) => {
        axios
            .post(`${apiUrl}/users`, {
                ...data,
            })
            .then((response) => {
                history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
