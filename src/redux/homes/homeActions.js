import axios from 'axios';
import { SET_HOMES, SET_HOMES_ERROR, CLEAR_HOMES } from '../actionTypes';

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
