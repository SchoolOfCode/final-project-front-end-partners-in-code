import React from 'react';
import Logo from '../Global/Logo/Logo.js';
import H1 from '../Global/H1/H1.js';
import H2 from '../Global/H2/H2.js';
import Button from '../Global/Button/Button.js';

function Homepage() {
  return (
    <div>
      <Logo />
      <Button text="test" />
      <Button text="test" />
      <H1 text="Exchange and Share" />
      <H2 text="Give new life to objects, share what you have, love what others have loved." />
      <Button text="test" />
      <Button text="test" />
    </div>
  );
}

export default Homepage;
