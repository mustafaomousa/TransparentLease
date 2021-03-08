import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider, useDispatch, useSelector } from "react-redux";
import { Menu, Notification as AlertIcon } from "grommet-icons"
import { Grommet, Button, Heading } from 'grommet';
import { grommet } from "grommet/themes"
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
import BrokerPageComponent from "./components/BrokerPageComponent";
import DealManageComponent from "./components/DealComponent/DealManageComponent";
import { deleteNotifications } from "./store/notifications";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [currentUser, setUser] = useState({});

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
        <NavBarComponent user={currentUser} setAuthenticated={setAuthenticated}>
        </NavBarComponent>
        {/* <SideBarComponent sideVisible={sideVisible} setSideVisible={setSideVisible} user={currentUser} setAuthenticated={setAuthenticated} /> */}
        <Switch>
          <Route path="/make/:makeName" exact={true}>
            <MakeDealsComponent />
          </Route>
          <Route exact path="/deal/manage">
            <DealManageComponent />
          </Route>
          <Route exact path="/deal/create">
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
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setLoaded={setLoaded} />
          </Route>
          <Route path="/:brokerUsername" exact={true}>
            <BrokerPageComponent />
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
