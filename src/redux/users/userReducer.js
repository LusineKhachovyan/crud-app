import { SET_USERS, SET_USERS_ERROR, CLEAR_USERS } from '../actionTypes';

const initialState = {
    users: null,
    loading: true,
    error: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                users: action.users,
                loading: false,
                error: '',
            };
        case SET_USERS_ERROR:
            return {
                users: null,
                loading: false,
                error: action.error,
            };
        case CLEAR_USERS:
            return {
                users: null,
                loading: true,
                error: '',
            };
        default:
            return state;
    }
};

export default userReducer;
