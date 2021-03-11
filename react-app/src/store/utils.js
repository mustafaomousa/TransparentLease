const LOAD = "utils/getUtils";

const getUtils = (utils) => {
    return {
        type: LOAD,
        payload: utils,
    };
};

export const getAllUtils = () => async (dispatch) => {
    const response = await fetch("/api/utils");
    const result = await response.json()
    console.log(result)
    if (result.errors) {

    } else {
        return dispatch(getUtils(result.utils))
    }
}

const initialState = {};

export const utilsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { ...action.payload });
            return newState;
        default:
            return state;
    }
};

export default utilsReducer;
