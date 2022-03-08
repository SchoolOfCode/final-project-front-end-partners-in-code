import Logo from '../Global/Logo/Logo.js';
import H1 from '../Global/H1/H1.js';
import AddNewItem from '../AddNewItem/AddNewItem.js';
import ListItem from '../ListItem/ListItem.js';
import css from './ItemsDisplay.module.css';
import AuthenticationButton from '../Auth0/Auth0InOutButton/Auth0InOut.js';
import SignupButton from '../Auth0/Auth0SignUpButton/Auth0SignUp.js';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import { useAuth0 } from '@auth0/auth0-react';

export default function ItemsDisplay({ items, onAddNewItem }) {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className={css.displayContainer} data-testid="list-item">
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
            {/* <div className={css.signUpButton}>
            <SignupButton />
          </div> */}
            <div className={css.navBar}>
              <NavBar />
            </div>
          </div>
        </div>
        <div className={css.browse}>
          <H1 text="Browse..." />
        </div>
        <div className={css.section}>
          <div className={css.itemDisplayContainer}>
            <ListItem items={items} />
          </div>
        </div>
        <div className={css.buttonContainer}>
          <AddNewItem onAddNewItem={onAddNewItem} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={css.displayContainer} data-testid="list-item">
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
          <H1 text="Browse..." />
        </div>
        <div className={css.section}>
          <div className={css.itemDisplayContainer}>
            <ListItem items={items} />
          </div>
        </div>
        <div className={css.buttonContainer}>
          <AddNewItem onAddNewItem={onAddNewItem} />
        </div>
      </div>
    );
  }
}
