import React from 'react';
import styles from './card_edit_form.module.css';
const Card_edit_form = ({ card }) => {
  const { name, title, company, email, message, theme, fileName, fileURL } =
    card;

  return (
    <form>
      <input type='text' name='name' value={name} />
    </form>
  );
};

export default Card_edit_form;
