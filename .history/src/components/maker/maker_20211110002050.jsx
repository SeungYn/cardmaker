import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },
    {
      id: '2',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },
    {
      id: '3',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
