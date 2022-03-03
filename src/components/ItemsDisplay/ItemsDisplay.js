import Logo from '../Global/Logo/Logo.js';
import H1 from '../Global/H1/H1.js';
import AddNewItem from '../AddNewItem/AddNewItem.js';
import ListItem from '../ListItem/ListItem.js';
import css from './ItemsDisplay.module.css';
import AuthenticationButton from '../Auth0/Auth0InOutButton/Auth0InOut.js';
import SignupButton from '../Auth0/Auth0SignUpButton/Auth0SignUp.js';
import { Link } from 'react-router-dom';

export default function ItemsDisplay({ items, onAddNewItem }) {
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
            {/* <Button text="Log In" /> */}
            <AuthenticationButton />
          </div>
          <div className={css.signUpButton}>
            {/* <Button text="Sign Up" /> */}
            <SignupButton />
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
