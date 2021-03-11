import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal } from "@material-ui/core";
import './components/NavBarComponent/navbar.css'
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import HomePageComponent from "./components/HomePageComponent";
import NavBarComponent from "./components/NavBarComponent";
import MakeDealsComponent from "./components/MakeDealsComponent";
import DealCreateComponent from "./components/DealComponent/DealCreateComponent";
import { getCurrentUser } from "./store/user";
import BrokerPageComponent from "./components/BrokerPageComponent";
import DealManageComponent from "./components/DealComponent/DealManageComponent";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [currentUser, setUser] = useState({});
  const [welcomeOpen, setWelcomeOpen] = useState(false);

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
      <NavBarComponent user={currentUser} setAuthenticated={setAuthenticated} authenticated={authenticated} setWelcomeOpen={setWelcomeOpen} >
      </NavBarComponent>
      <Modal open={welcomeOpen} onClose={() => setWelcomeOpen(false)} children={<span><LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setWelcomeOpen={setWelcomeOpen} /></span>} />
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
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <HomePageComponent />
          </div>

        </Route>
      </Switch>
      {/* <Footer className="nav-footer" pad="small">
            test
          </Footer> */}
    </BrowserRouter>
  );
}

export default App;
