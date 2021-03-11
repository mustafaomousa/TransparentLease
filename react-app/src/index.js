import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import getStore from "./store/persist";

import './index.css';

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
