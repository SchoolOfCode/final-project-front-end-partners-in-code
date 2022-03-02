import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log in</button>; //Log in is hard coded at the moment
};

export default Auth0LoginButton;
