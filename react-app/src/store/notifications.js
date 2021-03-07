const LOAD = "spot/getNotifications";
const CLEAR = "spot/clearNotification"

const addNotification = (notification) => {
    return {
        type: LOAD,
        payload: notification,
    };
};

const clearNotification = (notification) => {
    return {
        type: CLEAR,
        payload: notification
    };
};

export const deleteNotification = (notification) => async dispatch => {
    dispatch(clearNotification(notification));
    return notification
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
        case CLEAR:
            newState = Object.assign({}, state)
            newState.notifications = [];
            return newState;
        default:
            return state;
    }
};

export default notificationsReducer;
