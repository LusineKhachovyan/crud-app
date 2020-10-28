import { SET_HOMES, SET_HOMES_ERROR, CLEAR_HOMES, DELETE_HOME } from '../actionTypes';

const initialState = {
    homes: null,
    loading: true,
    error: '',
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOMES:
            return {
                homes: action.homes,
                loading: false,
                error: '',
            };
        case SET_HOMES_ERROR:
            return {
                homes: null,
                loading: false,
                error: action.error,
            };
        case CLEAR_HOMES:
            return {
                homes: null,
                loading: true,
                error: '',
            };
        case DELETE_HOME:
            let id = action.id;
            let homesClone = [...state.homes];
            homesClone = homesClone.filter((home) => home.id !== id);

            return {
                ...state,
                homes: homesClone,
            };
        default:
            return state;
    }
};

export default homeReducer;
