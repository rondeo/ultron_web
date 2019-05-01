/*
 * @Author: etongfu
 * @Version: 
 * @Email: 13583254085@163.com
 * @LastEditors: etongfu
 * @Description: 借助webpack的能力完成自动化
 * @youWant: add you want info here
 * @Date: 2019-05-01 17:01:46
 * @LastEditTime: 2019-05-01 17:13:34
 */
const files = require.context('.', true, /\.js$/)
let routes = []
files.keys().forEach(key => {
  if (key === './index.js') return
  routes = routes.concat(files(key).default)
})
export default routes