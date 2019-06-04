/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-25 19:53:25
 * @LastEditors: etongfu
 * @LastEditTime: 2019-06-04 14:35:52
 * @Description: 监控模块 
 * @youWant: add you want info here
 */

import React from 'react'
import MainWrap from 'components/main_wrap'
import ErrorIndex from './error/error_index'
import ResourceIndex from './resource/resource_index'
import PerformanceIndex from './performance';

import { Tabs } from 'antd'
const TabPane = Tabs.TabPane
// 业务组件
export default class MonitorIndex extends React.Component {
  render () {
    return <MainWrap headerName="Monitor" widthHeader>
        <div className="monitor-wrap">
          <Tabs defaultActiveKey="1" tabBarStyle={{
            display: "flex"
          }}>
            <TabPane tab="错误监控" key="1">
              <ErrorIndex />
            </TabPane>
            <TabPane tab="资源监控" key="2">
              <ResourceIndex />
            </TabPane>
            <TabPane tab="性能监控" key="3">
              <PerformanceIndex />
            </TabPane>
          </Tabs>
        </div>
    </MainWrap>
  }
}
