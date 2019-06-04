// import routes from './module'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {FrameRouter} from './frame'
import routers from './module'
export default class RouterCenter extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
              {/* no frame routes */}
              {
                routers.filter(route => route.noFrame).map(route => {
                  //todo 进行鉴权相关操作
                  return <Route key={route.path} redirect={route.redirect} exact={route.exact} path={route.path} component={route.component} />
                })
              }
              {/* routes width frame */}
              <Route path="/" render= { props => FrameRouter } /> 
          </Switch>
      </Router>
    )
  }
}