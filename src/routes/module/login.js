import React from 'react'
import Loadable from 'react-loadable'
/**
 * 登陆部分
 * @param {*} Loadable 
 */
export default [
    {
      name: "登陆页面",
      path: '/login',
      exact: true, //　精准匹配
      noDrop: true,
      requiresAuth: false,
      noFrame: true, // 取消使用外部frame
      component: Loadable({
        loader: () => import('@/pages/login/login'),
        loading: () => <div>loading</div>
      })
    }
  ]