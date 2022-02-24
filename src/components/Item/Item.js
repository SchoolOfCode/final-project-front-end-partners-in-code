import React from 'react';
// import Mugs from '../../libs/images/mugs.jpeg';

export default function Item({ img, alt, title, location }) {
  return (
    <div className='box' >
      
      <img src={img} alt={alt} />
      <div class="product-content">
        
      <p className='title'>{title}</p>
      <p className='location'>{location}</p>
      </div>
      
     
      
    </div>
  );
}
