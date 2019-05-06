/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @LastEditors: etongfu
 * @Description: 系统
 * @youWant: add you want info here
 * @Date: 2019-05-05 15:34:47
 * @LastEditTime: 2019-05-06 17:05:38
 */
import React from 'react'
import AppSide from './side'
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
          {this.props.children}
        </main>
        {/* 右侧nav */}
        <nav className="app-right-nav">
          右边nav
        </nav>
      </div>
    )
  }
}