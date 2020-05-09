import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import PrivateRoute from './utils/PrivateRoute'
import StoreProvider from './store'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

function App() {



  return (
    <StoreProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
