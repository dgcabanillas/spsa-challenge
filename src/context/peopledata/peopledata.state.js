import React, { useReducer } from 'react';
import PeopledataContext from './peopledata.context';
import PeopledataReducer from './peopledata.reducer';

import {
    SET_USERS_LIST,
    SET_USER,
} from './peopledata.types';

const PeopledataState = props => {
    
    const initialState = {
        user: null,
        users: [],
    };

    const [state, dispatch] = useReducer( PeopledataReducer, initialState );

    const setUsersList  = (users) => { dispatch({ type: SET_USERS_LIST, payload: users }) }
    const setUser = (user) => { dispatch({ type: SET_USER, payload: user }) }

    return (
        <PeopledataContext.Provider
            value={{
                user: state.user,
                users: state.users,
                setUsersList,
                setUser,
            }}
        >
            { props.children }
        </PeopledataContext.Provider>
    )
}

export default PeopledataState;