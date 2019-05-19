/*
 * @Author: etongfu
 * @Version: 1.0.0
 * @Email: 13583254085@163.com
 * @LastEditors: etongfu
 * @Description: 工具页面
 * @youWant: add you want info here
 * @Date: 2019-05-19 11:07:15
 * @LastEditTime: 2019-05-19 11:08:25
 */
import React from 'react'
import MainWrap from 'components/main_wrap';
// 业务组件

export default class ToolsIndex extends React.Component {
  render () {
    return <MainWrap headerName="Tools" widthHeader>
        <div className="tools-wrap">
          tools
        </div>
    </MainWrap>
  }
}
