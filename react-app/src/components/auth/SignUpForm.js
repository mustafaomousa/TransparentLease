import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Form, TextInput } from "grommet";
import { signUp } from '../../services/auth';

import "./signup.css";
import { Stepper, Step, StepLabel, Input, Button, Grid, Checkbox, TextField } from "@material-ui/core";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState(null);
  const [broker, setBroker] = useState(false);
  const [dealer, setDealer] = useState(false);
  const [header, setHeader] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(
        username,
        email,
        password,
        address,
        bio,
        broker,
        city,
        dealer,
        header,
        name,
        profileImage,
        state,
        zipcode
      );
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value)
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateState = (e) => {
    setState(e.target.value);
  };

  const updateZipcode = (e) => {
    setZipcode(e.target.value);
  };

  const updateBroker = (e) => {
    setBroker(!broker);
  };

  const updateDealer = (e) => {
    setDealer(!dealer);
  };

  const updateHeader = (e) => {
    setHeader(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updateProfileImage = (e) => {
    setProfileImage("testimagepath")
  };


  if (authenticated) {
    return <Redirect to="/" />;
  };

  return (
    <div className="signup-page-body">
      <div className="signup-module">
        <form className="signup-form">
          {activeStep === 0 && (
            <Grid container spacing={4} >
              <Grid item xs={6} className="signup-grid-left">
                <label>Create a username</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <Input value={username} onChange={updateUsername}></Input>
              </Grid>
              <Grid item xs={6} className="signup-grid-left">
                <label>Enter your email</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <Input value={email} onChange={updateEmail}></Input>
              </Grid>
              <Grid item xs={6} className="signup-grid-left">
                <label>Create a password</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <Input value={password} onChange={updatePassword} type="password"></Input>
              </Grid>
              <Grid item xs={6} className="signup-grid-left">
                <label>Confirm password</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <Input value={repeatPassword} onChange={updateRepeatPassword} type="password"></Input>
              </Grid>
            </Grid>
          )}
          {activeStep === 1 && (
            <Grid container spacing={4}>
              <Grid item xs={6} className="signup-grid-left">
                <label>What's your name?</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <Input></Input>
              </Grid>
              <Grid item xs={6} className="signup-grid-left">
                <label>Where are you located?</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Input placeholder="address"></Input>
                  <Input placeholder="city"></Input>
                  <Input placeholder="state"></Input>
                  <Input placeholder="zip"></Input>
                </div>
              </Grid>
              <Grid item xs={6} className="signup-grid-left">
                <label>Are you a broker?</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <Checkbox />
              </Grid>
              <Grid item xs={6} className="signup-grid-left">
                <label>Are you a dealer?</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <Checkbox />
              </Grid>
            </Grid>
          )}
          {activeStep === 2 && (
            <Grid container spacing={4}>
              <Grid item xs={6} className="signup-grid-left">
                <label>Create a header for your portfolio</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <TextField />
              </Grid>
              <Grid item xs={6} className="signup-grid-left">
                <label>Create a bio for your portfolio</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <TextField />
              </Grid>
              <Grid item xs={6} className="signup-grid-left">
                <label>Upload a profile picture</label>
              </Grid>
              <Grid item xs={6} className="signup-grid-right">
                <Input type="file" />
              </Grid>
              <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Button>Sign up</Button>
              </Grid>
            </Grid>
          )}
        </form>
        <div className="stepper-container">
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>Account info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Personal info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Profile info</StepLabel>
            </Step>
          </Stepper>
          <div className="signup-button-container">
            <Button onClick={() => setActiveStep(activeStep - 1)} disabled={activeStep === 0}>Back</Button>
            <Button onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SignUpForm;
