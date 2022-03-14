import Homepage from '../Homepage/Homepage.js';
import ContactPage from '../ContactPage/ContactPage';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ItemsDisplay from '../ItemsDisplay/ItemsDisplay.js';
import items from '../../libs/items.js';
import AboutUsDisplay from '../AboutUsDisplay/AboutUsDisplay.js';
import CommunityGuide from '../CommunityGuide/CommunityGuide.js';
import Sustainability from '../Sustainability/Sustainability.js';

function App() {
  //this state keeps whole array of items
  const [updatedListItems, setupdatedListItems] = useState(items);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const promise = await fetch(`https://reloved.herokuapp.com/items`);
      const data = await promise.json();
      setupdatedListItems(data.payload);
    }
    fetchData();
  }, [toggle]);

  function handleClick() {
    if (toggle) {
      setToggle(false);
    } else if (!toggle) {
      setToggle(true);
    }
    console.log('working');
  }

  //this function on click of the button, adds new item to the old item array
  // function handleClick(newItem) {
  //   console.log(`handleClick run!`);
  //   console.log(updatedListItems);
  //   setupdatedListItems([newItem, ...updatedListItems]);
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/community-guidelines" element={<CommunityGuide />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route
          path="/items"
          element={
            <ItemsDisplay
              items={updatedListItems.reverse()}
              onAddNewItem={handleClick}
            />
          }
        />
        <Route path="/about-us" element={<AboutUsDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
