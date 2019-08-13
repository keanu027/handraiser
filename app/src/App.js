import React, { Component } from 'react'
import Mentor from './components/mentor/mentor'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {

  render() {
    //<Route path="/" component={Mentor} />
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/"
             render ={props => <Mentor {...props} /> } />
             
        </Switch>
      </BrowserRouter>
    )
  }
}
