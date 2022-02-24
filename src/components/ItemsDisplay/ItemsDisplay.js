import Logo from '../Global/Logo/Logo.js';
import H1 from '../Global/H1/H1.js';
import AddNewItem from "../AddNewItem/AddNewItem.js"
import ListItem from '../ListItem/ListItem.js';
import AddNewItem from '../AddNewItem/AddNewItem.js';

export default function ItemsDisplay({ items, onAddNewItem }) {
  return (

    <div className="display-container">
      <AddNewItem onAddNewItem={onAddNewItem}/>
      <div className="box">
        <Logo />
      </div>
      <div className="browse">

        <H1 text="Browse..." />
      </div>
      <div className='title'>
        <ListItem items={items} />
      </div>

      <div className='plus-button'>
        <AddNewItem className='plus-button'/>
      </div>
     

    </div>
    
   
  );
}
