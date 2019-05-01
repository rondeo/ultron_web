import React from 'react'
/**
 * 路由
 * @param {*} Loadable 
 */
export default function(Loadable){
  return [
    {
      name: "登陆页面",
      path: '/login',
      exact: true,
      noDrop: true,
      component: Loadable({
        loader: () => import('@/pages/login/login'),
        loading: () => <div>这是个啥</div>
      })
    }
  ]
}