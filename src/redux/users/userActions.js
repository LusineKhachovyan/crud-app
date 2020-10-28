import axios from 'axios';
import { SET_USERS, SET_USERS_ERROR, CLEAR_USERS } from '../actionTypes';

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
