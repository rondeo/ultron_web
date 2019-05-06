/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @LastEditors: etongfu
 * @Description: 需鉴权路由
 * @youWant: add you want info here
 * @Date: 2019-05-06 14:23:37
 * @LastEditTime: 2019-05-06 14:25:04
 */
import React from 'react'
import { Route, Redirect, } from 'react-router-dom'
const isAuthenticated = false
const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
      isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
  )}/>
)

export default PrivateRoute