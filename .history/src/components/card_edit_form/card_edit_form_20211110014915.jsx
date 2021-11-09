import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';
const Card_edit_form = ({ card }) => {
  const { name, title, company, email, message, theme, fileName, fileURL } =
    card;
  const onSubmit = () => {};
  return (
    <form>
      <input type='text' name='name' value={name} />
      <input type='text' name='company' value={company} />
      <select name='theem' value={theme}>
        <option value='light'>light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input type='text' name='title' value={title} />
      <input type='text' name='email' value={email} />
      <textarea name='message' value={message}></textarea>
      <ImageFileInput />
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default Card_edit_form;
