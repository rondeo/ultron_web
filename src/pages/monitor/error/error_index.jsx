/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-27 15:45:47
 * @LastEditors: etongfu
 * @LastEditTime: 2019-06-05 15:51:23
 * @Description: 错误数据的监控页面
 * @youWant: add you want info here
 */
import React from 'react'
import { SearchTitle, SearchItem } from 'components/search_title'
import { Input, Button, Tooltip, Table, Tag } from 'antd'
import { getErrorList } from 'api/monitor/error'
let types = ['script', 'ajax', 'resource', 'vue']
export default class ErrorIndex extends React.Component {

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

  componentDidMount() {
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
      let result = await getErrorList(para)
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
      title: '错误平台',
      dataIndex: 'platformId',
    },
    {
      title: '错误类型',
      key: 'type',
      render (text, record, index) {
        return <Tag key={index}>
                {types[Number(text.type)]}
              </Tag>
      }
    },
    {
      title: '发生页面',
      dataIndex: "ePage"
    },
    {
      title: '相关信息',
      dataIndex: 'eInfo'
    },
    {
      title: '操作系统',
      dataIndex: 'os'
    },
    {
      title: '错误位置',
      render: (record) => (
        <span>{record.lineno}行{record.colno}列 </span>
      ),
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