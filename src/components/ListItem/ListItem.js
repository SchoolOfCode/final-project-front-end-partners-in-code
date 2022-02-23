import Item from '../Item/Item.js';
// import items from '../../libs/items.js';

export default function ListItem({ items }) {
  return (
    <div>
      {items.map(function (item) {
        return (
          <Item
            key={item.itemId}
            img={item.image.img}
            alt={item.image.alt}
            title={item.title}
            location={item.location}
          />
        );
      })}
    </div>
  );
}
