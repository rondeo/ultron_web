/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-06-04 14:34:36
 * @LastEditors: etongfu
 * @LastEditTime: 2019-06-04 17:01:27
 * @Description: 性能监控信息
 * @youWant: add you want info here
 */
import React from 'react'
import { SearchTitle, SearchItem } from 'components/search_title'
import { Input, Button, Tooltip, Table } from 'antd'
import { getPerformanceList } from 'api/monitor/performance'

export default class PerformanceIndex extends React.Component {

  constructor () {
    super()
    this.state = {
      pageNo: 1,
      pageSize: 15,
      loading: false, // 加载状态
      list: [],
      totalCount: 0
    }
  }
  // 启动loading
  componentDidMount () {
    this.load()
  }

  load = async () => {
    let para = {
      pageNo: this.state.pageNo,
      pageSize: this.state.pageSize
    }
    try {
      this.setState({
        loading: true
      })
      let result = await getPerformanceList(para)
      if (result.success) {
        const data = result.result
        this.setState({
          totalCount: data.totalCount,
          list: data.list,
          loading: false
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  // table 配置column
  columns = [
    {
      title: '来源',
      dataIndex: 'platformId',
      key: 'platformId'
    },
    {
      title: '白屏时间',
      dataIndex: 'fpt',
      key: 'fpt'
    },
    {
      title: 'DNS耗时',
      dataIndex: 'dnsTime',
      key: 'dnsTime'
    },
    {
      title: 'TCP耗时',
      dataIndex: 'tcpTime',
      key:'tcpTime'
    },
    {
      title: 'DOMReady耗时',
      dataIndex: 'dTime',
      key: 'dTime'
    },
    {
      title: '资源加载时间',
      dataIndex: 'rTime',
      key: 'rTime'
    },
    {
      title: 'load事件耗时',
      dataIndex: 'lTime',
      key: 'lTime'
    },
    {
      title: ' DOM解析',
      dataIndex: 'domTime',
      key: 'domTime'
    },
    {
      title: '上报时间',
      dataIndex: 'logDate',
      key: 'logDate'
    }
  ]

  render() {
    return (
      <div className="error-index">
        {/* 查询表头部分 */}
        <SearchTitle rightButtons={
          <>
            <Tooltip placement="top" title="查询">
              <Button shape="circle" icon="search" />
            </Tooltip>
            <Tooltip placement="top" title="查看统计">
              <Button shape="circle" icon="pie-chart" />
            </Tooltip>
          </>
        }>
          <SearchItem tip="时间">
            <Input placeholder="请输入时间" />
          </SearchItem>
          <SearchItem tip="时间">
            <Input placeholder="请输入时间" />
          </SearchItem>
        </SearchTitle>
        {/* 表格部分 */}
        <Table 
          rowKey = {record => record.id}
          loading={this.state.loading} size="middle" columns={this.columns} dataSource={this.state.list} 
          pagination={
            {
              total: this.state.totalCount,
              pageSize: this.state.pageSize,
              pageSizeOptions: ['10', '15', "20", '50']
            }
          } />
      </div>
    )
  }
}