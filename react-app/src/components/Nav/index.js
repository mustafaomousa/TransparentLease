import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useDispatch, useSelector } from "react-redux";
import JoinModal from "../JoinModal";
import LoginModal from "../LoginModal";
import { logout } from "../../store/session";

const Nav = () => {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await dispatch(logout());
  };

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
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          {sessionUser ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={sessionUser.username}>
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar
                    src={sessionUser.profile_image}
                    sx={{ width: 35, height: 35 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ top: 40 }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleLogout}>
                  <Typography>Log out</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Stack direction="row" spacing={2} sx={{ flexGrow: 0 }}>
              <LoginModal />
              <JoinModal />
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
