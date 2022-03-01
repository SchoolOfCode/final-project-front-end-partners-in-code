import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Global/Button/Button';
import css from './ContactPage.module.css';

export default function ContactPage() {
  const location = useLocation();
  const { from } = location.state;
  return (
    <div className={css.contactContainer}>
      <Link to="/items">
        <Button text="Back to Browse" />
      </Link>
      {/* <Logo className={css.contactPageLogo} /> */}
      <div className={css.informationContainer}>
        <p>{from.phone}</p>
        <p>{from.email}</p>
        <p>{from.location}</p>
      </div>
    </div>
  );
}
