import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
//import Login from './componentsMy/login/login';
import Login from './components/login/login';
function App({ authService }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <div className={styles.app}>
            <Login authService={authService} />
          </div>
        </Route>
        <Route path='/maker'>
          <Maker />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
