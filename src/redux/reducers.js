import { combineReducers } from 'redux';
import userReducer from './users/userReducer';
import homeReducer from './homes/homeReducer';

const rootReducer = combineReducers({
    users: userReducer,
    homes: homeReducer,
});

export default rootReducer;
