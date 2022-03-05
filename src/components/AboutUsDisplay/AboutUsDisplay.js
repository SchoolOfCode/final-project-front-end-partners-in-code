import React from 'react'
import H1 from '../Global/H1/H1.js';
import AboutUs from "../AboutUs/AboutUs.js"
import css from './AboutUsDisplay.module.css';
export default function AboutUsDisplay() {
  return (
    <div className={css.displayContainer} >
    
      <div className={css.browse}>
        <H1 text="About Us" />
      </div>
      <div className={css.section}>
        <div className={css.itemDisplayContainer}>
          <AboutUs  />
        </div>
      </div>
    </div>
  )
}
