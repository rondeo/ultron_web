import React from 'react'
import Demo from '../pages/demo/demo';
import { Route } from 'react-router-dom';
import Content from 'pages/frame/frame'

export default function Frame ({ match }){
    return (
      <div>
        <Content />
        <Route path="/demo" component={Demo} />
        <Route
          exact
          path={match.path}
          render={() => <h3>
            这个时候没匹配上
          </h3>}
        />
      </div>
    )
}