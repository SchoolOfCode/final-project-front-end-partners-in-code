import Item from '../Item/Item.js';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// const { isAuthenticated } = useAuth0();
export default function ListItem({ items }) {
  function alertPopup() {
    console.log('alert');
    alert('hi');
  }
  console.log(items);
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {items.map(function (item) {
        if (isAuthenticated) {
          return (
            <div>
              <Link to="/contact" state={{ from: item }}>
                <Item
                  key={item.id}
                  img={item.image}
                  alt={item.product_name}
                  title={item.product_name}
                  location={item.location}
                />
              </Link>
            </div>
          );
        } else {
          return (
            <div onClick={alertPopup}>
              <Item
                key={item.id}
                img={item.image}
                alt={item.product_name}
                title={item.product_name}
                location={item.location}
              />
            </div>
          );
        }
      })}
    </>
  );
}
