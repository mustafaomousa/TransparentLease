import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Menu, User as UserIcon } from "grommet-icons"
import { Avatar, Anchor, Nav, Grommet, Header, Box, Sidebar, Button, Collapsible, Heading } from 'grommet';
import { grommet } from "grommet";

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
import SideBarComponent from "./components/NavBarComponent/SideBarComponent";


function App() {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
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
        <Grommet full>
          <NavBarComponent>
            <Button icon={<Menu />} onClick={() => setVisible(!visible)} />
            <Heading level="3">TransparentLease</Heading>
            <Button icon={<UserIcon />} />
          </NavBarComponent>
          <Box direction="row" flex>
            <Collapsible direction="horizontal" open={visible}>
              <SideBarComponent />
            </Collapsible>
            <Box>
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
            </Box>

          </Box>
        </Grommet>
      </BrowserRouter>
    </ReduxProvider >
  );
}

export default App;
