import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";

const store = configureStore();

const render = () => {
  const App = require("./App").default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
render();
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}
