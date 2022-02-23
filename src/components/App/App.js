import './App.css';
import Homepage from '../Homepage/Homepage.js';
import ContactPage from '../ContactPage/ContactPage';

import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

import ItemsDisplay from '../ItemsDisplay/ItemsDisplay.js';
import items from '../../libs/items.js';

import AddItemPopUp from '../AddNewItem/AddNewItem';

function App() {
  //this state keeps whole array of items
  const [updatedListItems, setupdatedListItems] = useState(items);

  //this function on click of the button, adds new item to the old item array
  function handleClick(newItem) {
    console.log(`handleClick run!`);
    console.log(updatedListItems);
    setupdatedListItems([newItem, ...updatedListItems]);
  }

  return (
    <div className="App">
      <AddItemPopUp onAddNewItem={handleClick} />
      <ItemsDisplay items={updatedListItems} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/newitems" element={<AddItemPopUp />} />
      </Routes>
    </div>
  );
}

export default App;
