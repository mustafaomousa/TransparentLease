import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import { Menu, Notification as AlertIcon } from "grommet-icons"
import { Grommet, Button, Heading } from 'grommet';
import './components/NavBarComponent/navbar.css'
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import HomePageComponent from "./components/HomePageComponent";
import NavBarComponent from "./components/NavBarComponent";
import User from "./components/User";
import { authenticate } from "./services/auth";
import MakeDealsComponent from "./components/MakeDealsComponent";
import SideBarComponent from "./components/NavBarComponent/SideBarComponent";
import DealCreateComponent from "./components/DealComponent/DealCreateComponent";
import { getCurrentUser } from "./store/user";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [currentUser, setUser] = useState({});


  // useEffect(() => {
  //   (async () => {
  //     const user = await authenticate();
  //     if (!user.errors) {
  //       setAuthenticated(true);
  //     }
  //     setLoaded(true);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      const user = await dispatch(getCurrentUser())
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Grommet full>
        <NavBarComponent>
          <Button icon={<Menu />} focusIndicator={false} id="sidebar-toggle" onClick={(e) => {
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
          <Route path="/deal/create">
            <DealCreateComponent />
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
  );
}

export default App;
