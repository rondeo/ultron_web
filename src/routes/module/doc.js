import PageLoading from 'components/loading'
import Loadable from 'react-loadable'
/**
 * 路由
 * @param {*} Loadable 
 */
export default [
    // document部分
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
    },
    // 文档新增部分
    {
      name: "新增文档",
      path: '/doc/write',
      exact: true,
      requiresAuth: false,
      noDrop: true,
      noFrame: true,
      component: Loadable({
        loader: () => import('@/pages/doc/doc_add'),
        loading: PageLoading,
        delay: 300
      })
    },
]