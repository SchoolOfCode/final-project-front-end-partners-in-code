import React from 'react';
import H1 from '../Global/H1/H1.js';
import H2 from '../Global/H2/H2.js';
import AboutUs from '../AboutUs/AboutUs.js';
import css from './AboutUsDisplay.module.css';
import AuthenticationButton from '../Auth0/Auth0InOutButton/Auth0InOut.js';
import SignupButton from '../Auth0/Auth0SignUpButton/Auth0SignUp.js';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import Logo from '../Global/Logo/Logo.js';

export default function AboutUsDisplay() {
  return (
    <div className={css.displayContainer}>
      <div className={css.box}>
        <div className={css.logoItem}>
          <div className={css.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </div>
        <div className={css.pinkButtons}>
          <div className={css.logInButton}>
            <AuthenticationButton />
          </div>
          <div className={css.signUpButton}>
            <SignupButton />
          </div>
          <div className={css.navBar}>
            <NavBar />
          </div>
        </div>
      </div>

      <div className={css.browse}>
        <H1 text="About Us" />
      </div>
      <div className={css.background}>
        <div className={css.p}>
          <p>
            We live in a throwaway society, which adds a great deal of burden to
            the environment. Additionally, the current situation world wide is
            leaving a lot of people in need of help, even for the most basic
            things like clothing.<br></br>
            <br></br> In light of this, Reloved is a platform that has been
            created to aid sustainability and help local communities in the UK.
          </p>
        </div>
      </div>
      <div className={css.team}>
        <H2 text="Our Founders" />
      </div>
      <div className={css.section}>
        <div className={css.itemDisplayContainer}>
          <AboutUs />
        </div>
      </div>
    </div>
  );
}
