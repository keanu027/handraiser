import React, {useState} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/try'

function App() {


  return (
         <Switch>
            <Route path='/api/login'
              render={ props=>  <Login  {...props} /> } />
         </Switch>
  );
}

export default App;
