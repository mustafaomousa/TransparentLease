import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./components/Home";
import Nav from "./components/Nav";
import { authenticate } from "./store/session";
import Footer from "./components/Footer";
import Discover from "./components/Discover";
import { Box, Container } from "@mui/material";
import Account from "./components/Account";
import Broker from "./components/Broker";

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
      <Box
        sx={{
          paddingY: { xs: 9, sm: 10 },
          backgroundColor: "white",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/discover" element={<Discover />} exact={true} />
          <Route path="/account" element={<Account />} exact={true} />
          <Route path="/broker" element={<Broker />} exact={true} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
