/*
 * @Author: etf
 * @Date: 2018-03-06 16:22:47
 * @Last Modified by: etongfu
 * @Last Modified time: 2018-12-20 14:00:54
 * base config for axios
 */
import axios from 'axios'
import Qs from 'qs'
import { notification } from 'antd'

// setting header
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;utf-8'
// axios.defaults.withCredentials = true // open cookie
// axios.defaults.xsrfCookieName = 'iatsSessionKey' // the name of the cookie to use as a value for xsrf token
let ignoreWarn = false // 是否忽略提醒
// create axios instance
const service = axios.create({
  mute: false,
  baseURL: process.env.REACT_APP_BASE_API, // base_url for api
  timeout: 4 * 5000 // request overtime time
})
// request intercept
service.interceptors.request.use(config => {
  config.ignoreWarn ? ignoreWarn = true : ignoreWarn = false
  // Do something before request is sent  add token for request
  // userId
  // config.headers["iats-session-key"] = ; // define token key you can use you customize key
  /* if (store.getters.userToken) {
    config.headers['key'] = store.getters.userToken // define token key you can use you customize key
  } */
  // deal get request
  if (config.method === 'get') {
    config.paramsSerializer = function (params) {
      return Qs.stringify(params, { arrayFormat: 'brackets' })
    }
  }
  // deal post request
  if (config.method === 'post') {
    config.transformRequest = [function (data) {
      // Do whatever you want to transform the data
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})
// respone intercept
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      // 登陆失效
      /* if (response.data.code === 10086) {
        // store.dispatch('SessionFailure')
      } else {
        
      } */
      if (response.data && !response.data.success) {
        // 启动全局播报异常
        !response.config.mute && notification['warning']({
                                    message: '系统异常',
                                    description: response.data.message,
                                  })
      }
    }
    // return real data entity
    return response.data
  },
  /**
  * error callback change callback by judge status code
  */
  error => {
    console.error('err' + error)// for debug
    if (!ignoreWarn) {
      notification['error']({
        message: '系统异常',
        description: '我们的系统可能出了点问题，请刷新试试或者耐心等待~',
      });
    }
    return Promise.reject(error)
  }
)

export default service
