/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-30 15:44:23
 * @LastEditors: etongfu
 * @LastEditTime: 2019-05-30 18:04:59
 * @Description: 资源监控首页
 * @youWant: add you want info here
 */
import React from 'react'
import { SearchTitle, SearchItem } from 'components/search_title'
import { Input, Button, Tooltip, Table, Tag } from 'antd'
import { getResourceList } from 'api/monitor/resource'

export default class ResourceIndex extends React.Component {

  constructor () {
    super()
    this.state = {
      pageNo: 1,
      pageSize: 15
    }
  }

  componentDidMount () {
    this.load()
  }

  load = () => {
    let para = {
      pageNo: this.state.pageNo,
      pageSize: this.state.pageSize
    }
    getResourceList(para).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.error(err)
    })
  }

  columns = [
    {
      title: '信息来源',
      dataIndex: 'name',
      key: 'name',
      render: text => <span>{text}</span>,
    },
    {
      title: '资源名称',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '资源类型',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '资源大小（KB）',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: '响应时间',
      key: 'action',
      render: (text, record) => (
        <span>
          {/* <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a> */}
          操作
        </span>
      ),
    },
    {
      title: '协议类型',
      key: 'action2',
      render: (text, record) => (
        <span>
          {/* <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a> */}
          操作
        </span>
      ),
    },
    {
      title: 'URL',
      key: 'action3',
      render: (text, record) => (
        <span>
          {/* <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a> */}
          操作
        </span>
      ),
    },
    {
      title: '请求时间',
      key: 'action4',
      render: (text, record) => (
        <span>
          {/* <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a> */}
          操作
        </span>
      ),
    }
  ]



  render() {
    const data = []
    
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
        <Table size="middle" columns={this.columns} dataSource={data} />
      </div>
    )
  }
}