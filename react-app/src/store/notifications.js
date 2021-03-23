const LOAD = "spot/getNotifications";
const CLEAR = "spot/clearNotifications"

const addNotification = (notification) => {
    return {
        type: LOAD,
        payload: notification,
    };
};

const clearNotifications = () => {
    return {
        type: CLEAR
    };
};

export const deleteNotifications = () => async dispatch => {
    await dispatch(clearNotifications());
};

export const createNotification = (notification) => async dispatch => {
    dispatch(addNotification(notification))
    return notification;
};

const initialState = { sucessful: [] };

const notificationsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state)
            newState.sucessful = [...newState.sucessful, action.payload]
            return newState;
        case CLEAR:
            newState = Object.assign({}, state)
            return { ...newState, sucessful: newState.sucessful.slice(1) };
        default:
            return state;
    }
};

export default notificationsReducer;
