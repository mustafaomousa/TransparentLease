import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from "./store";
import { Provider as ReduxProvider } from "react-redux";
import getStore from "./store/persist";
import { PersistGate } from 'redux-persist/integration/react';

export const { store, persistor } = getStore();

const render = () => {
  const App = require("./App").default;
  ReactDOM.render(
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ReduxProvider>,
    document.getElementById("root")
  );
};
render();
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}
