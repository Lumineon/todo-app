import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../components/todo/todo'
import About from '../components/about/about'

export default props => (
  <Router history={hashHistory}>
    <Route path='/tasks' component={Todo} />
    <Route path='/about' component={About} />
    <Redirect from='*' to='/tasks' />
  </Router>
)