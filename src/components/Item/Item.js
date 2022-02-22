import React from 'react';
// import Mugs from '../../libs/images/mugs.jpeg';

export default function Item({ img, alt, title, location }) {
  return (
    <div>
      <div>
        <img src={img} alt={alt} />
      </div>
      <p>{title}</p>
      <p>{location}</p>
    </div>
  );
}
