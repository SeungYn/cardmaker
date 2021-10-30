import React from 'react';
import styles from './loginHeader.module.css';

const LoginHeader = (props) => (
  <div className={styles.header}>
    <img className={styles.img} src='/images/logo.png' />
    <h1 className={styles.title}>Business Card Maker</h1>
  </div>
);

export default LoginHeader;
