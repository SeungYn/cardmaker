import React from 'react';
import styles from './new_edit_form.module.css';
const NewEditForm = (props) => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type='text' name='name' value={name} />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
      />
      <select className={styles.select} name='theem' value={theme}>
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

export default NewEditForm;
