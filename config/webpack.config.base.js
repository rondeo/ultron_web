/*
 * @Author: etongfu
 * @Version: 
 * @Email: 13583254085@163.com
 * @LastEditors: etongfu
 * @Description: 自定义webpack配置
 * @youWant: add you want info here
 * @Date: 2019-05-01 15:36:59
 * @LastEditTime: 2019-05-01 16:38:49
 */
const path = require('path')
const resolve = (file) => path.resolve(__dirname, '..', file)
// 基本配置
const BaseConfig = {
  // 别名配置
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      "@": resolve('src'),
      "api": resolve('src/api'),
      "assets": resolve('src/assets'),
      "pages": resolve('src/pages'),
      "reducers": resolve('src/reducers'),
      "routes": resolve('src/routes'),
      "styles": resolve('src/styles'),
      "utils": resolve('src/utils')
    }
  }
}
module.exports = BaseConfig