import React, { useRef } from 'react';
import styles from './new_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
const NewEditForm = (props) => {
  const name = useRef();
  const company = useRef();
  const theem = useRef();
  const title = useRef();
  const email = useRef();
  const message = useRef();

  const test = () => {
    console.log(name.current.value);
  };

  return (
    <form className={styles.form}>
      <input
        ref={name}
        className={styles.input}
        type='text'
        name='name'
        placeholder='Name'
      />
      <input
        ref={company}
        className={styles.input}
        type='text'
        name='company'
        placeholder='Company'
      />
      <select ref={theem} className={styles.select} name='theem'>
        <option value='light'>light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        ref={title}
        className={styles.input}
        type='text'
        name='title'
        placeholder='Title'
      />
      <input
        ref={email}
        className={styles.input}
        type='text'
        name='email'
        placeholder='Email'
      />
      <textarea
        ref={message}
        className={styles.textarea}
        name='message'
        placeholder='Message'
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Add' />
    </form>
  );
};

export default NewEditForm;
