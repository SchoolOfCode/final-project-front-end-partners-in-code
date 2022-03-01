import Item from '../Item/Item.js';
import css from './ListItem.module.css';
export default function ListItem({ items }) {
  return (
    <div className={css.parentContainer} data-testid="item-list">
      <div className={css.container}>
        {items.map(function (item) {
          console.log(item.itemId);
          return (
            <div className={css.responsiveContainer}>
              <Item
                key={item.itemId}
                img={item.image.img}
                alt={item.image.alt}
                title={item.title}
                location={item.location}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
