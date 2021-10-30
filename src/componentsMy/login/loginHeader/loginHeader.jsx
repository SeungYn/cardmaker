import React from 'react';
import styles from './loginHeader.module.css';

const LoginHeader = (props) => (
  <header className={styles.headers}>
    <img className={styles.img} src='/images/logo.png' />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default LoginHeader;
