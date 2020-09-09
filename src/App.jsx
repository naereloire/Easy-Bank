import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login/login';
import Home from './pages/home/home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/"
          exact >
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch >
    </Router>
  )
}

export default App;