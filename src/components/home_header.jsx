/*
 * @Author: etongfu
 * @Version: 
 * @Email: 13583254085@163.com
 * @LastEditors: etongfu
 * @Description: 标题组件： 无状态组件
 * @youWant: add you want info here
 * @Date: 2019-05-08 20:43:04
 * @LastEditTime: 2019-05-08 21:00:38
 */
import React from 'react'

class HomeHeader extends React.Component {
  render() {
    return (
      <header className="main-header">
        <h2>
          {this.props.name}
        </h2>
      </header>
    )
  }
}

export default HomeHeader