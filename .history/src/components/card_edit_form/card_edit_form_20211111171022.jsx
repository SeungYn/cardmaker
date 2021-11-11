import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';
const Card_edit_form = ({ card }) => {
  const { name, title, company, email, message, theme, fileName, fileURL } =
    card;
  const name = useRef();
  const company = useRef();
  const theme = useRef();
  const title = useRef();
  const email = useRef();
  const message = useRef();
  const form = useRef();
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type='text' name='name' value={name} />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
      />
      <select className={styles.select} name='theme' value={theme}>
        <option value='light'>light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input className={styles.input} type='text' name='title' value={title} />
      <input className={styles.input} type='text' name='email' value={email} />
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default Card_edit_form;