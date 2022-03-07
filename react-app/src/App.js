import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomePageComponent from "./components/HomePageComponent";
import Nav from "./components/Nav";
import { authenticate } from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact={true}>
          <HomePageComponent />
        </Route>
        {/* <Route path="/make/:makeName" exact={true}>
          <MakeDealsComponent />
        </Route>
        <Route exact path="/deal/inquiries">
          <DealInquiriesComponent />
        </Route> */}
        {/* <Route exact path="/deal/manage">
          <DealManageComponent />
        </Route>
        <Route exact path="/deal/create">
          <DealCreateComponent />
        </Route>
        <Route exact path="/deal">
          <DealManagerComponent />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setUser={setUser}
            setWelcomeOpen={setWelcomeOpen}
          />
        </Route> */}
        {/* <Route path="/sign-up" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setLoaded={setLoaded}
          />
        </Route>
        <Route path="/locate">
          <LocateComponent />
        </Route>
        <Route path="/portfolio" exact={true}>
          <PortfiolioComponent />
        </Route>
        <Route path="/:brokerUsername" exact={true}>
          <BrokerPageComponent />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
