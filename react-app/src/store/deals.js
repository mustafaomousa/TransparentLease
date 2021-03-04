const LOAD = "spot/getDeals";

const getDeals = (deals) => {
    return {
        type: LOAD,
        payload: deals,
    };
};

export const createNewDeal = (newDeal) => async (dispatch) => {
    const response = await fetch("/api/deals", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...newDeal

        })
    });
    return await response.json()
    // const new_deal = await response.json();
    // return dispatch(getDeals(new_deal));
}

export const getAllLatestDeals = () => async (dispatch) => {
    const response = await fetch("/api/deals/create");
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
