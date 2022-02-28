import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth0GiveButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>+ Give</button>;
};

export default Auth0GiveButton;
