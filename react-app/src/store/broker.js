import { omit } from "lodash";
import { createNotification } from "./notifications";
import { brokerRemoveInquiry } from "./user";

const LOAD = "broker/getBroker";
const ADD_COMMENT = "broker/addComment"
const REMOVE_COMMENT = "broker/removeComment"

const getBroker = (broker) => {
    return {
        type: LOAD,
        payload: broker,
    };
};

const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    };
};

const removeComment = (comment) => {
    return {
        type: REMOVE_COMMENT,
        payload: comment
    };
}

export const brokerDeleteInquiry = (inquiry_id) => async dispatch => {
    const response = await fetch(`/api/inquiry/delete/${inquiry_id}`, {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    return dispatch(brokerRemoveInquiry(inquiry_id))
};

export const getBrokerInformation = (brokerUsername) => async (dispatch) => {
    const response = await fetch(`/api/users/broker/${brokerUsername}`);
    const broker_user = await response.json()
    dispatch(getBroker(broker_user))
    return broker_user
};

export const createUserComment = (brokerId, comment, userId) => async (dispatch) => {
    const response = await fetch(`/api/comments/user_comment/${brokerId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "comment": comment, "user_id": userId })
    });
    const { new_comment } = await response.json();
    return dispatch(addComment(new_comment))
};

export const deleteUserComment = (commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/user_comment/comment/${commentId}`, {
        method: "DELETE"
    });
    const result = await response.json();
    if (result.errors) {
        result.errors.forEach((error) => dispatch(createNotification(error)))
    } else {
        dispatch(createNotification("Comment deleted!"))
        return dispatch(removeComment(result.comment_deleted));
    }
};

const initialState = { broker_comments: [], broker_deals: [], broker_information: {} };

const brokerReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { ...action.payload });
            return newState;
        case ADD_COMMENT:
            newState = Object.assign({}, state);
            newState.broker_comments[action.payload.id] = action.payload
            return newState;
        case REMOVE_COMMENT:
            return { ...state, broker_comments: omit(state.broker_comments, action.payload.id) };
        default:
            return state;
    }
};

export default brokerReducer;
