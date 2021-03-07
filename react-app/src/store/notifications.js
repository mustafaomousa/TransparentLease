const LOAD = "spot/getNotifications";

const addNotification = (notification) => {
    return {
        type: LOAD,
        payload: notification,
    };
};


export const createNotification = (notification) => async dispatch => {
    dispatch(addNotification(notification))
    return notification;
}

const initialState = {};

const notificationsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { notifications: [{ new_deal: action.payload }] });
            return newState;
        default:
            return state;
    }
};

export default notificationsReducer;
