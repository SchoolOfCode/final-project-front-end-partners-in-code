import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

// import `ChakraProvider` component
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
// wrap ChakraProvider at the root of your app

//Extend the theme to include custom colors, fonts, etc
const colors = {
  color: {
    beige: '#fcefdb', //for popup additem background
    pink: '#e6998d', //for the buttons
    almostblack: '#37332f', //for the p tag texts
    olivegreen: '#767e65', //for the location text
    mintgreen: '#a4ccae', //for homepage buttons
    dustygreen: '#64847c', //for logo and header in popup additem
  },
};

const fonts = {
  font: {
    heading: 'Abril Fatface',
    body: 'Montserrat',
  },
};

const theme = extendTheme({ colors, fonts });

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-f39gzy2t.eu.auth0.com"
        clientId="bNfd19UTo8TdI3MaomRZscw1aw2DhrJF"
        redirectUri={window.location.origin} //original redirect code
        //redirectUri="http://localhost:3000/items" // this rediredcts to localhost once logged in
        // redirectUri="https://reloved.netlify.app/items/"
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </ChakraProvider>,

  document.getElementById('root') || document.createElement('div') // for testing purposes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
