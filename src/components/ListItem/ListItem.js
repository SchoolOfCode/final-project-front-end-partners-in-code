import Item from '../Item/Item.js';
import items from '../../libs/items.js';
import { Link } from "react-router-dom";
export default function ListItem() {
  return (
    <div className='container'>
      {items.map(function (item) {
        return (
          <Link to="/contact">
           <Item
            key={item.itemId}
            img={item.image.img}
            alt={item.image.alt}
            title={item.title}
            location={item.location}
          /></Link>
         
        );
      })}
    </div>
  );
}
