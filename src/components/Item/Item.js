import React from 'react';
import { Link } from 'react-router-dom';
import css from './Item.module.css';

export default function Item({ img, alt, title, location }) {
  return (
    <div className={css.background}>
      <Link to="/contact">
      <div className={css.box} >
      
      <img src={img} alt={alt} />
      
      </div>
      
      <p className={css.title}>{title}</p>
      <p className={css.location}>{location}</p>
      </Link>
  
 
     
     
  
    </div>
   
  );
}


