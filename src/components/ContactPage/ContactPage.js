import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Global/Button/Button';
import css from './ContactPage.module.css';

export default function ContactPage() {
  const location = useLocation();
  const { from } = location.state;
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
            <h2>Product Information</h2>
          </div>
          <div className={css.image}>
            <img src={from.image.img} alt={from.image.alt} />
          </div>
          <div className={css.description}>
            <h3>Product Description</h3>
            <p>{from.description}</p>
          </div>
          <div className={css.boxContainer}>
            <div className={css.title}>
              <h3>Product Name</h3>
              <p>{from.title}</p>
            </div>
            <div className={css.location}>
              <h3>Location</h3>
              <p>{from.location}</p>
            </div>
            <div className={css.phone}>
              <h3>Phone Number</h3>
              <p>{from.phone}</p>
            </div>
            <div className={css.email}>
              <h3>E-mail</h3>
              <p>{from.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
