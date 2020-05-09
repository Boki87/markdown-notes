import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/normalize.css'

import FirebaseProvider from './utils/firebase'

ReactDOM.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
  document.getElementById('root')
);
