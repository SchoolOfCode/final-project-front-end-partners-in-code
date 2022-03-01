import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Global/Logo/Logo.js';
import Button from '../Global/Button/Button';
import items from '../../libs/items';
import css from './ContactPage.module.css';

export default function ContactPage({ phone, email }) {
  return (
    <div className={css.contactContainer}>
      <div className={css.backButton}>
        <Link to="/items">
          <Button text="Back to Browse" />
        </Link>
      </div>
      {/* <Logo className={css.contactPageLogo} /> */}

      <div className={css.background}>
        <div className={css.headingContainer}>
          <div className={css.heading}>
            <h2>Contact Information</h2>
          </div>
          <div className={css.boxContainer}>
            <div className={css.box}>
              <div className={css.title}>
                <div className={css.titleContainer}>
                  <h3>Product Name</h3>
                  <p>{items[0].title}</p>
                </div>
              </div>
              <div className={css.location}>
                <div className={css.locationContainer}>
                  <h3>Location</h3>
                  <p>{items[0].location}</p>
                </div>
              </div>
              <div className={css.phone}>
                <div className={css.phoneContainer}>
                  <h3>Phone Number</h3>
                  <p>{items[0].phone}</p>
                </div>
              </div>
              <div className={css.email}>
                <div className={css.emailContainer}>
                  <h3>E-mail</h3>
                  <p>{items[0].email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
