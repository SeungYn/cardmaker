import React from 'react';
import styles from './loginBody.module.css';
const loginBody = (props) => (
  <section className={styles.loginBody}>
    <h1 className={styles.title}>Login</h1>
    <div className={styles.menu}>Google</div>
    <div className={styles.menu}>Github</div>
  </section>
);

export default loginBody;
