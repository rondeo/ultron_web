/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-30 16:49:59
 * @LastEditors: etongfu
 * @LastEditTime: 2019-06-05 15:13:46
 * @Description: 错误日志部分
 * @youWant: add you want info here
 */
import http from '@/utils/http'
/**
 * 分页获取资源列表
 * @param {*} data 
 */
export async function getErrorList(data) {
  return http({
    data,
    method: 'post',
    url: '/error/getListByPage'
  })
}
