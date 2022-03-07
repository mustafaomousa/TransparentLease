import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import dealReducer from "./deals";
import notificationsReducer from "./notifications";
import session from "./session";
import brokerReducer from "./broker";
import utilsReducer from "./utils";
import inquiryReducer from "./inquiries";

export const rootReducer = combineReducers({
  deals: dealReducer,
  session,
  notifications: notificationsReducer,
  broker: brokerReducer,
  utils: utilsReducer,
  inquiry: inquiryReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
