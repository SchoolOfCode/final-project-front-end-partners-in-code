import React from 'react';

import Auth0LoginButton from '../Auth0LoginButton/Auth0Login.js';
import Auth0LogoutButton from '../Auth0LogoutButton/Auth0Logout.js';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Auth0LogoutButton /> : <Auth0LoginButton />;
};

export default AuthenticationButton;
