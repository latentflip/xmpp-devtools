import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

import store from './store';
import xmpp from './xmpp';

window.requestAnimationFrame(() => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
