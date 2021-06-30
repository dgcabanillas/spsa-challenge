import {
    SET_USERS_LIST,
    SET_USER,
} from './peopledata.types';

const peopledataReducer = (state, action) => {
    switch( action.type ) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case SET_USERS_LIST:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
}

export default peopledataReducer;