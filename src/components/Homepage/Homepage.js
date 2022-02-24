import React from 'react';
import Logo from '../Global/Logo/Logo.js';
import H1 from '../Global/H1/H1.js';
import H2 from '../Global/H2/H2.js';
import Button from '../Global/Button/Button.js';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import AddItemPopUp from '../AddNewItem/AddNewItem.js';

function Homepage() {
  const { onOpen } = useDisclosure();
  return (
    <div>
      <Logo />
      <Button text="Log In" />
      <Button text="Sign Up" />
      <H1 text="Exchange and Share" />
      <H2 text="Give new life to objects, share what you have, love what others have loved." />
      <Link to="items">
        <Button text="+ Give" onClick={<AddItemPopUp onOpen={onOpen} />} />
      </Link>
      <Link to="items">
        <Button text="Browse >>" />
      </Link>
    </div>
  );
}

export default Homepage;
