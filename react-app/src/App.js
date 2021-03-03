import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import HomePageComponent from "./components/HomePageComponent";
import NavBarComponent from "./components/NavBarComponent";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { authenticate } from "./services/auth";
import 'semantic-ui-css/semantic.min.css'
import MakeDealsComponent from "./components/MakeDealsComponent";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const store = configureStore();

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <NavBarComponent setAuthenticated={setAuthenticated} loaded={loaded} />
        <Switch>
          <Route path="/make/:makeName" exact={true}>
            <MakeDealsComponent />
          </Route>
          <Route path="/login" exact={true}>
            <LoginForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
          </Route>
          <Route path="/:userId" exact={true}>
            <User />
          </Route>
          <Route path="/" exact={true} >
            <HomePageComponent />
          </Route>
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
