import Item from '../Item/Item.js';
import { Link } from 'react-router-dom';

export default function ListItem({ items }) {
  return (
    <div data-testid="item-list">
      {items.map(function (item) {
        return (
          <div>
            <Link to="/contact" state={{ from: item }}>
              <Item
                key={item.itemId}
                img={item.image.img}
                alt={item.alt}
                title={item.title}
                location={item.location}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
