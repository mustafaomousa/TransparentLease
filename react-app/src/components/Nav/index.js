import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  Link,
} from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
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
    <AppBar elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" underline="none" color="inherit" sx={{ flexGrow: 1 }}>
            TransparentLease
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          {sessionUser ? (
            <Box sx={{ flexGrow: 0, display: { xs: "none", sm: "flex" } }}>
              <Tooltip title={sessionUser.username}>
                <IconButton onClick={handleOpenUserMenu} size="small">
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
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <LoginModal />
              <JoinModal />
            </Stack>
          )}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton color="secondary">
              <MenuIcon />
            </IconButton>
            <Menu>
              <MenuItem></MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
