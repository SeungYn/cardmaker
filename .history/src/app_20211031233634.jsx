import react from 'react';
import styles from './app.module.css';
//import Login from './componentsMy/login/login';
import Login from './components/login/login';
function App({ authService }) {
  return (
    <>
      <Login authService={authService} />
    </>
  );
}

export default App;
