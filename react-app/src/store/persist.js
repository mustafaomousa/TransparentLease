import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { enhancer } from "./index";
import { appReducer } from "./index";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["notifications"]
}

const persistedReducer = persistReducer(persistConfig, appReducer);


export default () => {
    let store = createStore(persistedReducer, enhancer)
    let persistor = persistStore(store);
    return { store, persistor }
};