/*
 * @Author: etongfu
 * @Version: 
 * @Email: 13583254085@163.com
 * @LastEditors: etongfu
 * @Description: 文档模块首页 
 * @youWant: add you want info here
 * @Date: 2019-06-02 22:06:21
 * @LastEditTime: 2019-06-04 14:23:45
 */
import React from 'react'
import MainWrap from 'components/main_wrap';
// 业务组件
import { Button } from 'antd'
export default class TodoIndex extends React.Component {
  render () {
    return <MainWrap headerName="DOCUMENT" widthHeader>
        <div className="doc-wrap">
          <Button onClick={() => {window.location.href= '/doc/write'}}> 去分享 </Button>
        </div>
    </MainWrap>
  }
}
