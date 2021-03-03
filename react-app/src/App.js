import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Menu, Dropdown, Icon, Button, Form, Input, Search, Grid, Sidebar, Segment, Header, Image, HorizontalDivider, Label } from "semantic-ui-react";
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
        <NavBarComponent setAuthenticated={setAuthenticated} loaded={loaded} setVisible={setVisible} visible={visible} />
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' direction='left' icon='labeled' vertical visible={visible} width="large">
            <Menu.Item as="a">
              <h3>Home</h3>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>
            <Segment basic id="body">
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
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>


      </BrowserRouter>
    </ReduxProvider >
  );
}

export default App;
