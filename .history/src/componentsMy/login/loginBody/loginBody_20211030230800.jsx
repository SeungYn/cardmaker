import React from 'react';
import styles from './loginBody.module.css';
const loginBody = (props) => (
  <section>
    <h1 className={styles.title}>Login</h1>
    <div className='menu'>Google</div>
    <div className='menu'>Github</div>
  </section>
);

export default loginBody;
