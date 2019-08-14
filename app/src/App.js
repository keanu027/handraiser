import React, { Component } from 'react'
import Mentor from './components/mentor/mentor'
import MentorAppbar from './components/mentor/Feat/frontendMentorappbar'
import Student from './components/student'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {

  render() {
    //<Route path="/" component={Mentor} />
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"
             render ={props => <Mentor {...props} /> } />

             <Route path="/frontend_mentor"
                render ={props => <MentorAppbar {...props} /> } />


          <Route path="/student"
             render ={props => <Student {...props} /> } />
        </Switch>
      </BrowserRouter>
    )
  }
}
