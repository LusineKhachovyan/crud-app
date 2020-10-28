import axios from 'axios';
import { SET_HOMES, SET_HOMES_ERROR, CLEAR_HOMES, DELETE_HOME } from '../actionTypes';

const apiUrl = process.env.REACT_APP_BASE_API_URL;

export const getHomes = () => {
    return (dispatch) => {
        axios
            .get(`${apiUrl}/homes`)
            .then((response) => {
                const homes = response.data;
                dispatch(setHomes(homes));
            })
            .catch((error) => {
                dispatch(setHomesError(error));
            });
    };
};

export const setHomes = (homes) => {
    return { type: SET_HOMES, homes };
};

export const setHomesError = (error) => {
    return { type: SET_HOMES_ERROR, error };
};

export const clearHomes = () => {
    return { type: CLEAR_HOMES };
};

export const removeHome = (homeId) => {
    return (dispatch) => {
        axios
            .delete(`${apiUrl}/homes/${homeId}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(deleteHome(homeId));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const deleteHome = (id) => {
    return { type: DELETE_HOME, id };
};
