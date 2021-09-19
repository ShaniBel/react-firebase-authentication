import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle'

import App from './App';

import { BrowserRouter as Router} from 'react-router-dom'

import { Provider } from 'react-redux';

import store from './store';

import { auth } from './config/firebase';
import { isLoggedIn } from './actions/authActions';


auth.onAuthStateChanged((user) => {
  store.dispatch(isLoggedIn())
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

})

