import Item from '../Item/Item.js';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// const { isAuthenticated } = useAuth0();
export default function ListItem({ items }) {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {items.map(function (item) {
        if (isAuthenticated) {
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
        } else {
          return (
            <div>
              <Item
                key={item.itemId}
                img={item.image.img}
                alt={item.alt}
                title={item.title}
                location={item.location}
              />
            </div>
          );
        }
      })}
    </>
  );
}
