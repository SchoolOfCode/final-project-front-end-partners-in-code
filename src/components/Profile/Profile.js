import React from 'react';
import css from './Profile.module.css';

export default function Profile({ img, alt, name, github, linkedin }) {
  return (
    <div className={css.background}>
      <div className={css.box}>
        <img src={img} alt={alt} />
      </div>

      <p className={css.name}>{name}</p>
      <p className={css.github}>
        <a href={github} target="_blank" rel="noreferrer">
          Github
        </a>
      </p>
      <p className={css.linkedin}>
        <a href={linkedin} target="_blank" rel="noreferrer">
          Linkedin
        </a>
      </p>
    </div>
  );
}
