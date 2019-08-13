import React, { Component } from 'react'
import Mentor from './components/mentor/mentor'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Mentor} />
        </Switch>
      </BrowserRouter>
    )
  }
}
