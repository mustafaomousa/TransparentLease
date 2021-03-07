import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { Button, CheckBox, Form, TextArea, TextInput } from "grommet";
import { signUp } from '../../services/auth';

const SignUpForm = ({ authenticated, setAuthenticated, setLoaded }) => {
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
    <Form onSubmit={onSignUp} style={{ backgroundColor: "whitesmoke" }}>
      <div>
        <label>User Name</label>
        <TextInput
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></TextInput>
      </div>
      <div>
        <label>Name</label>
        <TextInput
          type="text"
          name="name"
          onChange={updateName}
          value={name}
        ></TextInput>
      </div>
      <div>
        <label>Email</label>
        <TextInput
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></TextInput>
      </div>
      <div>
        <label>Password</label>
        <TextInput
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></TextInput>
      </div>
      <div>
        <label>Repeat Password</label>
        <TextInput
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></TextInput>
      </div>
      <div>
        <label>Address</label>
        <TextInput
          type="text"
          name="address"
          onChange={updateAddress}
          value={address}
          required={false}
        ></TextInput>
      </div>
      <div>
        <label>City</label>
        <TextInput
          type="text"
          name="city"
          onChange={updateCity}
          value={city}
          required={false}
        ></TextInput>
      </div>
      <div>
        <label>State</label>
        <TextInput
          type="text"
          name="state"
          onChange={updateState}
          value={state}
          required={false}
        ></TextInput>
      </div>
      <div>
        <label>Zip Code</label>
        <TextInput
          type="number"
          name="zipcode"
          onChange={updateZipcode}
          value={zipcode}
          required={false}
        ></TextInput>
      </div>
      <div>
        <label>Are you a broker?</label>
        <CheckBox
          name="broker"
          onChange={updateBroker}
          defaultChecked={broker}
        ></CheckBox>
      </div>
      {broker && (
        <div>
          <label>Are you a dealer?</label>
          <CheckBox
            name="dealer"
            onChange={updateDealer}
            defaultChecked={dealer}
          ></CheckBox>
        </div>
      )}
      <div>
        <label>Header</label>
        <TextInput
          type="text"
          name="header"
          onChange={updateHeader}
          value={header}
          required={false}
        ></TextInput>
      </div>
      <div>
        <label>Bio</label>
        <TextArea
          type="text"
          name="bio"
          onChange={updateBio}
          value={bio}
          required={false}
        ></TextArea>
      </div>
      <div>
        <label>Profile Picture</label>
        <TextInput
          type="file"
          name="profileImage"
          onChange={updateProfileImage}
          value={profileImage}
          required={false}
        ></TextInput>
      </div>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default SignUpForm;
