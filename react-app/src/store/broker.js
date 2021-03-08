const LOAD = "broker/getBroker";
const ADD_COMMENT = "broker/addComment"

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

const initialState = { broker_comments: [], broker_deals: [], broker_information: {} };

const brokerReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { ...action.payload });
            return newState;
        case ADD_COMMENT:
            newState = Object.assign({}, state);
            newState.broker_comments.push(action.payload)
            return newState;
        default:
            return state;
    }
};

export default brokerReducer;
