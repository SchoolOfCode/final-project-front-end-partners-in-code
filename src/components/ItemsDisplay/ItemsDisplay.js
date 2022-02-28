import Logo from '../Global/Logo/Logo.js';
import H1 from '../Global/H1/H1.js';
import AddNewItem from '../AddNewItem/AddNewItem.js';
import ListItem from '../ListItem/ListItem.js';
import css from './ItemsDisplay.module.css';

export default function ItemsDisplay({ items, onAddNewItem }) {
  return (
    <div className={css.displayContainer} data-testid="list-item">
      <div className={css.box}>
        <Logo />
      </div>
      <div className={css.browse}>
        <H1 text="Browse..." />
      </div>
      <div className={css.itemDisplayContainer}>
        <div className={css.listItemContainer}>
          <ListItem items={items} />
        </div>
      </div>
      <div className={css.buttonContainer}>
        <div className={css.plusButton}>
          <AddNewItem onAddNewItem={onAddNewItem} />
        </div>
      </div>
    </div>
  );
}
