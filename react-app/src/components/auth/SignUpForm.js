import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { Form } from "grommet";
import { signUp } from '../../services/auth';

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
    <Form onSubmit={onSignUp}>
      <Form.Field>
        <label>User Name</label>
        <Form.Input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>Name</label>
        <Form.Input
          type="text"
          name="name"
          onChange={updateName}
          value={name}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <Form.Input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Form.Input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>Repeat Password</label>
        <Form.Input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>Address</label>
        <Form.Input
          type="text"
          name="address"
          onChange={updateAddress}
          value={address}
          required={false}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>City</label>
        <Form.Input
          type="text"
          name="city"
          onChange={updateCity}
          value={city}
          required={false}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>State</label>
        <Form.Input
          type="text"
          name="state"
          onChange={updateState}
          value={state}
          required={false}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>Zip Code</label>
        <Form.Input
          type="number"
          name="zipcode"
          onChange={updateZipcode}
          value={zipcode}
          required={false}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>Are you a broker?</label>
        <Form.Checkbox
          name="broker"
          onChange={updateBroker}
          defaultChecked={broker}
        ></Form.Checkbox>
      </Form.Field>
      {broker && (
        <Form.Field>
          <label>Are you a dealer?</label>
          <Form.Checkbox
            name="dealer"
            onChange={updateDealer}
            defaultChecked={dealer}
          ></Form.Checkbox>
        </Form.Field>
      )}
      <Form.Field>
        <label>Header</label>
        <Form.Input
          type="text"
          name="header"
          onChange={updateHeader}
          value={header}
          required={false}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>Bio</label>
        <Form.Input
          type="text"
          name="bio"
          onChange={updateBio}
          value={bio}
          required={false}
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>Profile Picture</label>
        <Form.Input
          type="file"
          name="profileImage"
          onChange={updateProfileImage}
          value={profileImage}
          required={false}
        ></Form.Input>
      </Form.Field>
      <Form.Button type="submit">Sign Up</Form.Button>
    </Form>
  );
};

export default SignUpForm;
