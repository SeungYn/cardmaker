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
  const text = useRef();

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='Name'
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        placeholder='Company'
      />
      <select className={styles.select} name='theem'>
        <option value='light'>light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        placeholder='Title'
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        placeholder='Email'
      />
      <textarea
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
