import React from 'react';
import styles from './card.module.css';
const DEFAULT_IMAGE = '/imags/default_logo.png';
const Card = ({ card }) => {
  const { name, title, company, email, message, theme, fileName, fileURL } =
    card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <l1>
      <img src={url} alt='profil photo' />
      <div>
        <h1>{name}</h1>
        <p>{company}</p>
        <p>{title}</p>
        <p>{email}</p>
        <p>{message}</p>
      </div>
    </l1>
  );
};

export default Card;
