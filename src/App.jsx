import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
