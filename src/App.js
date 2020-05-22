import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import PrivateRoute from './utils/PrivateRoute'
import StoreProvider from './store'

import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'

import Toasts from './components/toasts/Toasts'
import ConfirmModal from './components/modal/ConfirmModal'

function App() {



  return (
    <StoreProvider>
      <Toasts />
      <ConfirmModal />
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Home}/>
          <Route exact path='/signin' component={Signin}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
