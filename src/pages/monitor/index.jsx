/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-25 19:53:25
 * @LastEditors: etongfu
 * @LastEditTime: 2019-05-25 19:55:59
 * @Description: 监控模块 
 * @youWant: add you want info here
 */

import React from 'react'
import MainWrap from 'components/main_wrap';
// 业务组件
export default class MonitorIndex extends React.Component {
  render () {
    return <MainWrap headerName="Monitor" widthHeader>
        <div className="monitor-wrap">
          监控页面
        </div>
    </MainWrap>
  }
}
