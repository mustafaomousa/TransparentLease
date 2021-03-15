import { combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxReset from "redux-reset";
import dealReducer from "./deals";
import notificationsReducer from "./notifications";
import userReducer from "./user";
import brokerReducer from "./broker";
import utilsReducer from "./utils";
import inquiryReducer from "./inquiries";

export const appReducer = combineReducers({
    deals: dealReducer,
    user: userReducer,
    notifications: notificationsReducer,
    broker: brokerReducer,
    utils: utilsReducer,
    inquiry: inquiryReducer
});

export let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;

    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger), reduxReset());

}
