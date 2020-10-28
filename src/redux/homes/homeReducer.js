import { SET_HOMES, SET_HOMES_ERROR, CLEAR_HOMES } from '../actionTypes';

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
        default:
            return state;
    }
};

export default homeReducer;
