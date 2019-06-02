import PageLoading from 'components/loading'
import Loadable from 'react-loadable'
/**
 * 路由
 * @param {*} Loadable 
 */
export default [
    {
      name: "Document",
      path: '/doc',
      exact: true,
      requiresAuth: false,
      noDrop: true,
      component: Loadable({
        loader: () => import('@/pages/doc/doc_index'),
        loading: PageLoading,
        delay: 300
      })
    }
]