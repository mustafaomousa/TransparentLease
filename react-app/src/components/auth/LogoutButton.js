import React from "react";
import { Button } from "grommet";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../services/auth";
import { createNotification } from "../../store/notifications";

const LogoutButton = ({ setAuthenticated }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    dispatch(createNotification("Successfully logged out"))
    history.push('/')
    window.location.reload(true)
  };

  return <Button id="navlink" style={{ marginBottom: "-12px" }} onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
