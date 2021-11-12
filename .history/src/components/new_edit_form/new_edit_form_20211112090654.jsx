import React, { useRef } from 'react';
import styles from './new_edit_form.module.css';
import Button from '../button/button';

const NewEditForm = ({ FileInput, addCard }) => {
  const name = useRef();
  const company = useRef();
  const theme = useRef();
  const title = useRef();
  const email = useRef();
  const message = useRef();
  const form = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const test = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: name.current.value || '',
      company: company.current.value || '',
      theme: theme.current.value || '',
      title: title.current.value || '',
      email: email.current.value || '',
      message: message.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    form.current.reset();
    addCard(card);
  };

  const onClick = () => {};
  return (
    <form ref={form} className={styles.form}>
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
      <select ref={theme} className={styles.select} name='theme'>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
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
        <FileInput onFileChange={onFileChange} />
      </div>
      <Button name='Add' onClick={test} />
    </form>
  );
};

export default NewEditForm;
