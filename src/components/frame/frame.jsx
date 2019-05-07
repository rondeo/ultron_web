/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @LastEditors: etongfu
 * @Description: 系统
 * @youWant: add you want info here
 * @Date: 2019-05-05 15:34:47
 * @LastEditTime: 2019-05-07 16:23:41
 */
import React from 'react'
import AppSide from './side'
import NavRight from './nav_right'
import 'styles/frame.scss'

export default class Frame extends React.Component {
  render() {
    return (
      <div className="app">
        {/* 左侧菜单 */}
        <div className="app-side">
          <AppSide />
        </div>
        {/* 核心页面内容 */}
        <main className="app-main">
          <h1>h2</h1>
          {this.props.children}
        </main>
        {/* 右侧nav */}
        <div className="app-right-nav">
          <NavRight />
        </div>
      </div>
    )
  }
}