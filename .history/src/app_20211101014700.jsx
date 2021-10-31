import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
//import Login from './componentsMy/login/login';
import Login from './components/login/login';
import Maker from './components/maker/maker';
function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Login authService={authService} />
          </Route>
          <Route path='/maker'>
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
