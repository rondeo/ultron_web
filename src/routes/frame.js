import React from 'react'
import Frame from 'components/frame/frame'
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/404'
import routers from './module'
/**
 * @author: etongfu
 * @description: 生成主要组件
 * @param {type}  {*}
 * @returns:  {*}
 */
export const FrameRouter = (
  <Frame> 
    <Switch>
        {/* <Route exact path="/" component={Demo} /> */}
        {
          routers.filter(route => !route.noFrame).map(route => {
            //todo 在这里同样可以进行鉴权相关的操作
            return <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
          })
        }
        <Route component={NotFound} />
    </Switch>
  </Frame>
)
