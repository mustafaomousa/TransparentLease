import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import { Button, TextInput } from "grommet"
import { useDispatch } from "react-redux";
import { getCurrentUser, getUser } from "../../store/user";
import { createNotification } from "../../store/notifications";

import "./login.css";

const LoginForm = ({ authenticated, setAuthenticated, setWelcomeOpen }) => {

  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      dispatch(getUser(user));
      dispatch(getCurrentUser());
      setWelcomeOpen(false);
      dispatch(createNotification("Logged in"))
    } else {
      setErrors(user.errors);
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") setWelcomeOpen(false)
  });

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page-body">
      <div className="login-page-card">
        <div className="login-card-left">
          <p>Welcome back.</p>
          <p id="sign-up-today">Need an account? <Button onClick={() => setShowSignup(true)}>Sign up</Button> today!</p>
        </div>
        <div className={showSignup ? "hidden" : "login-card-right"}>
          <form className="login-form" onSubmit={onLogin}>
            <div>
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <TextInput
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <TextInput
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
              />
            </div>
          </form>
          <div className="login-buttons-container">
            <Button onClick={onLogin} type="submit">Login</Button>
            <Button onClick={() => setWelcomeOpen(false)}>Close</Button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LoginForm;
