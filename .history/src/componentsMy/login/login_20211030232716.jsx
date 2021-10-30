import React from 'react';
import LoginBody from './loginBody/loginBody';
import LoginFooter from './loginFooter/loginFooter';
import LoginHeader from './loginHeader/loginHeader';
import styles from './login.module.css';

const Login = (props) => (
  <section className={styles.broad}>
    <LoginHeader />
    <LoginBody />
    <LoginFooter />
  </section>
);

export default Login;
