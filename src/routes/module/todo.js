import React from 'react'
/**
 * 路由
 * @param {*} Loadable 
 */
export default function(Loadable){
  return [
    {
      name: "Todo",
      path: '/todo',
      exact: true,
      noDrop: true,
      component: Loadable({
        loader: () => import('@/pages/todo/todo_index'),
        loading: () => <div>loading</div>
      })
    }
  ]
}