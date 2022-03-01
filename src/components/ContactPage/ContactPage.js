import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Global/Logo/Logo.js';
import Button from '../Global/Button/Button';
import items from '../../libs/items';
import css from './ContactPage.module.css';
import Profile from '../Auth0/UserProfile/Profile.js'

export default function ContactPage({ phone, email }) {
  return (
    <div className={css.contactContainer}>
      <Link to="/items">
        <Button text="Back to Browse" />
      </Link>
      {/* <Logo className={css.contactPageLogo} /> */}
      <div className={css.informationContainer}>
        <p>{items[0].phone}</p>
        <p>{items[0].email}</p>
      </div>
      <Profile/>
    </div>
  );
}
