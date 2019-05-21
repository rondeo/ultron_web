/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @LastEditors: etongfu
 * @Description: 右边Nav组件
 * @youWant: add you want info here
 * @Date: 2019-05-07 15:44:22
 * @LastEditTime: 2019-05-21 16:52:47
 */
import React, { Component } from 'react';
import Weather from '../widgets/weather'

class NavRight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="right-nav-content">
        {/* 搜索部分 */}
        <div className="nav-search">
          Search
        </div>
        {/* 时间/天气部分 */}
        <Weather />
        {/* 信息栏 */}
        <div className="nav-box radius-border-box">
          Box
        </div>
      </nav>
    );
  }
}

export default NavRight