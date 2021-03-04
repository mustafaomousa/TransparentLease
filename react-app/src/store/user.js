import { authenticate } from "../services/auth";

const LOAD = "spot/getUser";

export const getUser = (user) => {
    return {
        type: LOAD,
        payload: user,
    };
};

export const getCurrentUser = () => async dispatch => {
    const user = await authenticate();
    dispatch(getUser(user));
    return user;
};

const initialState = {};

const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { ...action.payload });
            return newState;
        default:
            return state;
    }
};

export default userReducer;
