// import routes from './module'
import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './common/404';
import Login from './module/login'
import Frame from './frame'
export default class RouterCenter extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/" component={Frame} /> 
              {/* <Route path="/app" component={App} /> */}
              <Route path="/404" component={NotFound} />
              <Route path="/login" component={Login(Loadable)[0].component} />
              <Route component={NotFound} />
          </Switch>
      </Router>
    )
  }
}