// import routes from './module'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './module/login'
import {FrameRouter} from './frame'
export default class RouterCenter extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/login" component={Login[0].component} />
              <Route path="/" render= { props => FrameRouter } /> 
          </Switch>
      </Router>
    )
  }
}