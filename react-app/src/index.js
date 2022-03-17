import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";

import "./index.css";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";

const store = configureStore();

let theme = createTheme({
  palette: {
    primary: {
      main: "#242582",
    },
    secondary: {
      main: "#F64C72",
    },
    background: {
      default: "#242582",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h6",
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

const render = () => {
  const App = require("./App").default;
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>,
    document.getElementById("root")
  );
};
render();
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}
