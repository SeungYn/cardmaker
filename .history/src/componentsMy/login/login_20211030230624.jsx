import React from 'react';
import LoginBody from './loginBody/loginBody';
import LoginFooter from './loginFooter/loginFooter';
import LoginHeader from './loginHeader/loginHeader';

const Login = (props) => (
  <section>
    <LoginHeader />
    <LoginBody />
    <LoginFooter />
  </section>
);

export default Login;
