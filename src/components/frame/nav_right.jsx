/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @LastEditors: etongfu
 * @Description: 右边Nav组件
 * @youWant: add you want info here
 * @Date: 2019-05-07 15:44:22
 * @LastEditTime: 2019-05-07 16:21:27
 */
import React, { Component } from 'react';


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
        {/* 信息栏 */}
        <div className="nav-box radius-border-box">
          Box
        </div>
      </nav>
    );
  }
}

export default NavRight