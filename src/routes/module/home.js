import Loadable from 'react-loadable'
import PageLoading from 'components/loading'
/**
 * 路由
 * @param {*} Loadable 
 */
export default [
    {
      name: "首页",
      path: '/',
      exact: true,
      noDrop: true,
      requiresAuth: false,
      component: Loadable({
        loader: () => import('@/pages/home/home'),
        loading: PageLoading,
        delay: 300
      })
    }
]