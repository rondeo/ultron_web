import PageLoading from 'components/loading'
import Loadable from 'react-loadable'
/**
 * 路由
 * @param {*} Loadable 
 */
export default [
    {
      name: "Monitor",
      path: '/monitor',
      exact: true,
      requiresAuth: false,
      noDrop: true,
      component: Loadable({
        loader: () => import('@/pages/monitor/index'),
        loading: PageLoading,
        delay: 300
      })
    }
]