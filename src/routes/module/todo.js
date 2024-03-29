import PageLoading from 'components/loading'
import Loadable from 'react-loadable'
/**
 * 路由
 * @param {*} Loadable 
 */
export default [
    {
      name: "Todo",
      path: '/todo',
      exact: true,
      requiresAuth: false,
      noDrop: true,
      component: Loadable({
        loader: () => import('@/pages/todo/todo_index'),
        loading: PageLoading,
        delay: 300
      })
    }
]