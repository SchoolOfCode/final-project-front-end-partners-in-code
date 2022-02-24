import React from 'react';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc';
import Button from '../Global/Button/Button';
import items from '../../libs/items';

export default function ContactPage({ phone, email }) {
  return (
    <div>
      <Link to="/">
        <Button text={<VscArrowLeft />} />
      </Link>

      <p>{items[0].phone}</p>
      <p>{items[0].email}</p>
    </div>
  );
}
