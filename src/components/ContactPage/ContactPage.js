import React from 'react';
import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
import Button from '../Global/Button/Button';

export default function ContactPage({phone,email}) {
  
    return (
    <div>
        <Link to="/">
        <Button text={<VscArrowLeft/>}/>
        </Link>
        
        <p>{phone}</p>
        <p>{email}</p>
    </div>
  )
}

