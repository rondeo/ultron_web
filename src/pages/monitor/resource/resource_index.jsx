/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-30 15:44:23
 * @LastEditors: etongfu
 * @LastEditTime: 2019-06-03 16:44:10
 * @Description: 资源监控首页
 * @youWant: add you want info here
 */
import React from 'react'
import { SearchTitle, SearchItem } from 'components/search_title'
import { Input, Button, Tooltip, Table } from 'antd'
import { getResourceList } from 'api/monitor/resource'

export default class ResourceIndex extends React.Component {

  constructor () {
    super()
    this.state = {
      pageNo: 1,
      pageSize: 5,
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
      let result = await getResourceList(para)
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

  columns = [
    {
      title: '信息来源',
      dataIndex: 'platformId'
    },
    {
      title: '资源名称',
      dataIndex: 'name',
      key: 'name',
      render (text, record, index) {
        return <Tooltip placement="top" title={text}>
          <span>{text.substring(text.lastIndexOf('/')+1)}</span>
        </Tooltip>
      }
    },
    {
      title: '资源类型',
      dataIndex: 'type',
    },
    {
      title: '资源大小',
      dataIndex: 'size',
      key:'size',
      render (text) {
        return <span>
          {(Number(text) / 1024) > 1024 ? `${(Number(text) / (1024*1024)).toFixed(2)}MB` : `${(Number(text) / 1024).toFixed(2)}KB`}
        </span>
      }
    },
    {
      title: '请求时间',
      dataIndex: 'resTime',
      render (text) {
        return <span>{text}ms</span>
      }
    },
    {
      title: '协议类型',
      dataIndex: 'protocol'
    },
    {
      title: 'URL',
      dataIndex: 'url'
    },
    {
      title: '请求时间',
      dataIndex: 'time'
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
        <Table loading={this.state.loading} size="middle" columns={this.columns} dataSource={this.state.list} 
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