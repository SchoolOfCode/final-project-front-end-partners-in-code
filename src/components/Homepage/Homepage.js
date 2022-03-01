import React from 'react';
import Logo from '../Global/Logo/Logo.js';
import H1 from '../Global/H1/H1.js';
import H2 from '../Global/H2/H2.js';
import Button from '../Global/Button/Button.js';
import { Link } from 'react-router-dom';
import Auth0LoginButton from '../Auth0/Auth0LoginButton/Auth0Login.js';
import Auth0LogoutButton from '../Auth0/Auth0LogoutButton/Auth0Logout.js';
import Auth0GiveButton from '../Auth0/Auth0GiveButton/Auth0Give.js';
import AuthenticationButton from '../Auth0/Auth0InOutButton/Auth0InOut.js';
import css from './Homepage.module.css';
import SignupButton from '../Auth0/Auth0SignUpButton/Auth0SignUp.js'

function Homepage() {
  return (
    <div className={css.homepageContainer}>
      <div className={css.logoContainer}>
        <div className={css.logoItem}>
          <div className={css.logo}>
            <Logo />
          </div>
        </div>
        <div className={css.pinkButtons}>
          <div className={css.logInButton}>
            {/* check to make sure button works, original button commented */}
            {/* <Button text="Log In" /> */}
            {/* <Auth0LoginButton />
            <Auth0LogoutButton /> */}
            {/* the login and log out buttons replaced by the line below */}
            <AuthenticationButton />
          </div>
          <div className={css.signUpButton}>
            {/* <Button text="Sign Up" /> */}
            <SignupButton/>
          </div>
        </div>
      </div>
      <div className={css.h1}>
        <H1 text="Exchange and Share" />
      </div>
      <div className={css.h2}>
        <H2 text="Give new life to objects, share what you have, love what others have loved." />
      </div>
      <div className={css.twoButtons}>
        <div className={css.greenButtons}>
          <Link to="items">
            <div className={css.giveButton}>
              {/* <Button text="+ Give" /> */}
              <Auth0GiveButton />
            </div>
          </Link>

          <p>or</p>
          <Link to="items">
            <div className={css.browseButton}>
              <Button text="Browse >>" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
