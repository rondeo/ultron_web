/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 1.0
 * @LastEditors: etongfu
 * @Description: Todo list 
 * @youWant: add you want info here
 * @Date: 2019-05-05 15:52:48
 * @LastEditTime: 2019-05-17 19:50:58
 */
import React from 'react'
import MainWrap from 'components/main_wrap';
// 业务组件

export default class TodoIndex extends React.Component {
  render () {
    return <MainWrap headerName="TODO" widthHeader>
        <div className="todo-wrap">
          tabs
        </div>
    </MainWrap>
  }
}
