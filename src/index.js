import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './store';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
document.getElementById('root'));
