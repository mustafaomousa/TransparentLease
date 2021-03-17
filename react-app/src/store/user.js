import { omit } from "lodash";
import { authenticate } from "../services/auth";

const LOAD = "spot/getUser";
const BROKER_DELETE = 'broker/brokerRemoveInquiry'

export const getUser = (user) => {
    return {
        type: LOAD,
        payload: user,
    };
};

export const getUserByUserName = (user) => {
    return {
        type: LOAD,
        payload: user
    }
}

export const brokerRemoveInquiry = (inquiryId) => {
    return {
        type: BROKER_DELETE,
        payload: inquiryId
    }
};


export const getCurrentUser = () => async dispatch => {
    const user = await authenticate();
    dispatch(getUser(user));
    return user;
};

export const getUserByUsername = (brokerUsername) => async dispatch => {
    const response = await fetch(`/api/users/broker/${brokerUsername}`);
    const user = await response.json()
    dispatch(getUserByUserName(user))
    return user
};

const initialState = {};

const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, action.payload);
            return newState;
        case BROKER_DELETE:
            return { ...state, active_inquiries: omit(state.active_inquiries, action.payload) }
        default:
            return state;
    }
};

export default userReducer;
