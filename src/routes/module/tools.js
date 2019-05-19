import PageLoading from 'components/loading'
import Loadable from 'react-loadable'
/**
 * 路由
 * @param {*} Loadable 
 */
export default [
    {
      name: "Tools",
      path: '/tools',
      exact: true,
      requiresAuth: false,
      noDrop: true,
      component: Loadable({
        loader: () => import('@/pages/tools/tools_index'),
        loading: PageLoading,
        delay: 300
      })
    }
]