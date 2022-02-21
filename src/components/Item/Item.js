import React from 'react'

export default function Item({img, alt, title, location}) {
  return (
    <div>
        <div>
        <img src={img}  alt={alt}/>      
      </div>
        <p>{title}</p>
        <p>{location}</p>
    </div>
  )
}
