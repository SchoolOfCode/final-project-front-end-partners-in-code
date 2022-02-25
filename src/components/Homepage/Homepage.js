import React from 'react';
import Logo from '../Global/Logo/Logo.js';
import H1 from '../Global/H1/H1.js';
import H2 from '../Global/H2/H2.js';
import Button from '../Global/Button/Button.js';
import { Link } from 'react-router-dom';

import css from './Homepage.module.css';

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
            <Button text="Log In" />
          </div>
          <div className={css.signUpButton}>
            <Button text="Sign Up" />
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
              <Button text="+ Give" />
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
