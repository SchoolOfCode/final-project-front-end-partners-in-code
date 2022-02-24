import React from 'react';
// import Mugs from '../../libs/images/mugs.jpeg';
import css from './Item.module.css';

export default function Item({ img, alt, title, location }) {
  return (
    <div className={css.box} >
      
      <img src={img} alt={alt} />
      <div class={css.productContent}>
        
      <p className={css.title}>{title}</p>
      <p className={css.location}>{location}</p>
      </div>
      
     
      
    </div>
  );
}
