/*
 * @Author: etongfu
 * @Version: 
 * @Email: 13583254085@163.com
 * @LastEditors: etongfu
 * @Description: 内容包裹层
 * @youWant: add you want info here
 * @Date: 2019-05-08 20:55:40
 * @LastEditTime: 2019-05-08 20:59:43
 */
import React from 'react'
import HomeHeader from './home_header';

class MainWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <main className="app-content-wrap">
        <HomeHeader name="主页" />
      </main>
    )
  }
}

export default MainWrap