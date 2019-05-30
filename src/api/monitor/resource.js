/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-30 16:49:59
 * @LastEditors: etongfu
 * @LastEditTime: 2019-05-30 16:55:14
 * @Description: 资源加载部分
 * @youWant: add you want info here
 */
import http from '@/utils/http'
/**
 * 获取天气信息
 * @param {*} data 
 */
export async function getResourceList(data) {
  return http({
    data,
    method: 'post',
    url: '/resource/getResourcesByPage'
  })
}
