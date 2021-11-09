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
    </l1>
  );
};

export default Card;
