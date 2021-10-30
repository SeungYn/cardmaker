import React from 'react';
import styles from './loginHeader.module.css';

const LoginHeader = (props) => (
  <footer>
    <img className={styles.img} src='/images/logo.png' />
    <h1 className={styles.title}>Business Card Maker</h1>
  </footer>
);

export default LoginHeader;
