import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Menu, Notification as AlertIcon } from "grommet-icons"
import { Grommet, Button, Heading } from 'grommet';

import configureStore from "./store";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import HomePageComponent from "./components/HomePageComponent";
import NavBarComponent from "./components/NavBarComponent";
import User from "./components/User";
import { authenticate } from "./services/auth";
import MakeDealsComponent from "./components/MakeDealsComponent";
import SideBarComponent from "./components/NavBarComponent/SideBarComponent";


function App() {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [currentUser, setUser] = useState({});
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
            <Button icon={<Menu />} onClick={(e) => {
              setVisible(!visible)
            }} />
            <Heading level="3">TransparentLease</Heading>
            <Button icon={<AlertIcon />} />
          </NavBarComponent>
          <SideBarComponent visible={visible} user={currentUser} setAuthenticated={setAuthenticated} />
          <Switch>
            <Route path="/make/:makeName" exact={true}>
              <MakeDealsComponent />
            </Route>
            <Route path="/login" exact={true}>
              <LoginForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                setUser={setUser}
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
          {/* <Footer className="nav-footer" pad="small">
            test
          </Footer> */}
        </Grommet>
      </BrowserRouter>
    </ReduxProvider >
  );
}

export default App;
