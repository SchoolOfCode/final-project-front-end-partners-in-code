import React from 'react';
// import Mugs from '../../libs/images/mugs.jpeg';

export default function Item({ img, alt, title, location }) {
  return (
    <div >
      <div className='box'>
        <img src={img} alt={alt} />
      <p className='title'>{title}</p>
      <p className='location'>{location}</p>
      </div>
      
     
      
    </div>
  );
}
