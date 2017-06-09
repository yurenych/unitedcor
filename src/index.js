import 'normalize.css/normalize.css'
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'

// Render the main component into the dom
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),document.getElementById('app'));
