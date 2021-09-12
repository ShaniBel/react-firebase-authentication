import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle'

import App from './App';

import { BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

