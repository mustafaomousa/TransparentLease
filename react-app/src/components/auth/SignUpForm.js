import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Form } from "semantic-ui-react";
import { signUp } from '../../services/auth';

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
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

  if (authenticated) {
    return <Redirect to="/" />;
  }

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
      <Form.Button type="submit">Sign Up</Form.Button>
    </Form>
  );
};

export default SignUpForm;
