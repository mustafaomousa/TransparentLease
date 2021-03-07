import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxReset from "redux-reset";
import dealReducer from "./deals";
import notificationsReducer from "./notifications";
import userReducer from "./user";

export const appReducer = combineReducers({
    deals: dealReducer,
    user: userReducer,
    notifications: notificationsReducer,
});


const rootReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
        state = undefined;
    }
    return rootReducer(state, action)
}

export let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const resetEnhancer = rootReducer => (state, action) => {
        if (action.type !== 'RESET') return rootReducer(state, action);

        const newState = rootReducer(undefined, {});
        newState.router = state.router;
        return newState
    }
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger), reduxReset());
}

// const configureStore = (preloadedState) => {
//     return createStore(rootReducer, preloadedState, enhancer);
// };

// const configureStore = (preloadedState) => {
//     return createStore(rootReducer, preloadedState, enhancer);
// };

// export default configureStore;
