import Item from '../Item/Item.js';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function ListItem({ items }) {
  const { isAuthenticated } = useAuth0();

  function handleAlert() {
    alert('Please Log In or Sign Up to see product details.');
  }
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
            <div onClick={handleAlert} style={{ cursor: 'pointer' }}>
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
