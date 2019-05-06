/*
 * @Author: etongfu
 * @Version: 
 * @Email: 13583254085@163.com
 * @LastEditors: etongfu
 * @Description: 自定义webpack配置
 * @youWant: add you want info here
 * @Date: 2019-05-01 15:36:59
 * @LastEditTime: 2019-05-05 17:59:09
 */
const path = require('path')
const resolve = (file) => path.resolve(__dirname, '..', file)
// const Dotenv = require('dotenv-webpack');
// 基本配置
const BaseConfig = {
  // 别名配置
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      "@": resolve('src'),
      "api": resolve('src/api'),
      "assets": resolve('src/assets'),
      "components": resolve('src/components'),
      "pages": resolve('src/pages'),
      "reducers": resolve('src/reducers'),
      "routes": resolve('src/routes'),
      "styles": resolve('src/styles'),
      "utils": resolve('src/utils')
    }
  },
  plugins: [
    // 同步.env文件到web端 这个可以不用 env.js已经帮我们处理过了
    /* new Dotenv({
      path: resolve(`.env.${process.env.NODE_ENV}`),
    })  */
  ]
}
module.exports = BaseConfig