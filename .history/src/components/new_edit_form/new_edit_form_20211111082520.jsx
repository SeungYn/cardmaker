import React from 'react';
import styles from './new_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
const NewEditForm = (props) => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type='text' name='name' />
      <input className={styles.input} type='text' name='company' />
      <select className={styles.select} name='theem'>
        <option value='light'>light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input className={styles.input} type='text' name='title' />
      <input className={styles.input} type='text' name='email' />
      <textarea className={styles.textarea} name='message'></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Add' />
    </form>
  );
};

export default NewEditForm;
