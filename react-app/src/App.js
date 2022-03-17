import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./components/Home";
import Nav from "./components/Nav";
import { authenticate } from "./store/session";
import Footer from "./components/Footer";
import Discover from "./components/Discover";

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
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/discover" element={<Discover />} exact={true} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
