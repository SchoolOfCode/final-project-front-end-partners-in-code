import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

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
      <App />
    </BrowserRouter>
  </ChakraProvider>,

  document.getElementById('root') || document.createElement('div') // for testing purposes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
