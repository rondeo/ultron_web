/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-21 16:10:38
 * @LastEditors: etongfu
 * @LastEditTime: 2019-05-22 14:17:37
 * @Description: 天气/时间 组件
 * @youWant: add you want info here
 */
import http from '@/utils/http'
/**
 * 获取天气信息
 * @param {*} data 
 */
export async function getWeatherInfo() {
  return http({
    method: 'post',
    url: '/common/getWeatherData'
  })
}
