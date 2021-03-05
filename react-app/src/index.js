import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from "./store";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

const render = () => {
  const App = require("./App").default;
  ReactDOM.render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    document.getElementById("root")
  );
};
render();
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}