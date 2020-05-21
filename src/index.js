import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/normalize.css'
import "../node_modules/react-toggle-switch/dist/css/switch.min.css" 
import './Style.css'

import FirebaseProvider from './utils/firebase'

ReactDOM.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
  document.getElementById('root')
);
