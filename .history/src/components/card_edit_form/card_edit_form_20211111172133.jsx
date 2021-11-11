import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';
const Card_edit_form = ({ card, updateCard, deleteCard }) => {
  const { name, title, company, email, message, theme, fileName, fileURL } =
    card;
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();
  const onSubmit = () => {};
  const onChange = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.value);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
        ref={nameRef}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
        onChange={onChange}
        ref={companyRef}
      />
      <select
        className={styles.select}
        name='theme'
        value={theme}
        onChange={onChange}
        ref={themeRef}
      >
        <option value='light'>light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        value={title}
        onChange={onChange}
        ref={titleRef}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        value={email}
        onChange={onChange}
        ref={emailRef}
      />
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
        onChange={onChange}
        ref={messageRef}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default Card_edit_form;
