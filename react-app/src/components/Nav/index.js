import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useSelector } from "react-redux";
import JoinModal from "../JoinModal";
import LoginModal from "../LoginModal";

const Nav = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            TransparentLease
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          {sessionUser ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="username">
                <IconButton>
                  <Avatar />
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <LoginModal />
              <JoinModal />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
