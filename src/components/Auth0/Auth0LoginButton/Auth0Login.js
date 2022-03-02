import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth0LoginButton = ({text}) => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>{text}</button>; //Log in is hard coded at the moment
};

export default Auth0LoginButton;
