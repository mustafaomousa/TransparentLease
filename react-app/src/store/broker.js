const LOAD = "spot/getBroker";

const getBroker = (broker) => {
    return {
        type: LOAD,
        payload: broker,
    };
};


export const getBrokerInformation = (brokerUsername) => async (dispatch) => {
    const response = await fetch(`/api/users/broker/${brokerUsername}`);
    const broker_user = await response.json()
    dispatch(getBroker(broker_user))
    return broker_user
};

const initialState = {};

const brokerReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { ...action.payload });
            return newState;
        default:
            return state;
    }
};

export default brokerReducer;
