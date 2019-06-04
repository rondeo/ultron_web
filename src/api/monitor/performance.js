import http from '@/utils/http'
/**
 * 分页获取性能列表
 * @param {*} data 
 */
export async function getPerformanceList(data) {
  return http({
    data,
    method: 'post',
    url: '/performance/getListByPage'
  })
}