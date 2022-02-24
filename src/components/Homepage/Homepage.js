import React from 'react';
import Logo from '../Global/Logo/Logo.js';
import H1 from '../Global/H1/H1.js';
import H2 from '../Global/H2/H2.js';
import Button from '../Global/Button/Button.js';
import { Link } from 'react-router-dom';

import css from './Homepage.module.css'

function Homepage() {
  return (
    <div>
      <div className={css.logo}>
        <Logo />
      </div>
      <Button text="Log In" />
      <Button text="Sign Up" />
      <div className={css.h1}>
      <H1 text="Exchange and Share" />
      </div>
      <div className={css.h2}>
      <H2 text="Give new life to objects, share what you have, love what others have loved." />
      </div>
      <div className={css.greenButtons}>
      <Link to="items">
      <div className={css.giveButton}>
        <Button text="+ Give" />
        </div>
      </Link>
      <Link to="items">
      <div className={css.browseButton}>
        <Button text="Browse >>" />
        </div>
      </Link>
      </div>
    </div>
  );
}

export default Homepage;
