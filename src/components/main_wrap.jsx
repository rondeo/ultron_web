/*
 * @Author: etongfu
 * @Version: 
 * @Email: 13583254085@163.com
 * @LastEditors: etongfu
 * @Description: 网页主要内容的一个包裹层
 * @youWant: add you want info here
 * @Date: 2019-05-08 20:55:40
 * @LastEditTime: 2019-05-13 11:29:35
 */
import React from 'react'
import HomeHeader from './home_header';

class MainWrap extends React.Component {

  render() {
    return (
      <main className="app-content-wrap">
        {/* 是否渲染header */}
        {
          this.props.widthHeader ? <HomeHeader name={this.props.headerName || ""} /> : ''
        }
        {/* 主要内容 */}
        <section className={`app-content ${this.props.widthHeader ? 'app-content-with-header': ''}`} >
          {this.props.children}
        </section>
      </main>
    )
  }
}

export default MainWrap