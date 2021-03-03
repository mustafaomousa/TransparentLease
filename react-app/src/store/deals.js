const LOAD = "spot/getDeals";

const getDeals = (deals) => {
    return {
        type: LOAD,
        payload: deals,
    };
};

export const getAllLatestDeals = () => async (dispatch) => {
    const response = await fetch("/api/deals");
    const deals = await response.json();
    return dispatch(getDeals(deals));
};

export const getMakeDeals = (makeName) => async (dispatch) => {
    const response = await fetch(`/api/deals/make/${makeName}`);
    const deals = await response.json();
    return dispatch(getDeals(deals));
}

const initialState = {};

const dealReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { ...action.payload });
            return newState;
        default:
            return state;
    }
};

export default dealReducer;
