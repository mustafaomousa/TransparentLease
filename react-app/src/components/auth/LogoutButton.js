import React from "react";
import { Button } from "grommet";
import { logout } from "../../services/auth";

const LogoutButton = ({ setAuthenticated }) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <Button id="logout-button" style={{ width: "70px", height: "30px", textAlign: "center" }} onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
