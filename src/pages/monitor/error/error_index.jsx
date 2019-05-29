/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-27 15:45:47
 * @LastEditors: etongfu
 * @LastEditTime: 2019-05-29 16:49:24
 * @Description: 错误数据的监控页面
 * @youWant: add you want info here
 */
import React from 'react'
import { SearchTitle, SearchItem } from 'components/search_title'
import { Input, Button, Tooltip, Table, Tag } from 'antd'


export default class ErrorIndex extends React.Component {

  columns = [
    {
      title: '错误平台',
      dataIndex: 'name',
      key: 'name',
      render: text => <span>{text}</span>,
    },
    {
      title: '错误信息',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '操作系统',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '错误类型',
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
      title: '错误位置',
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
      title: '错误位置',
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
  ]



  render() {
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
    
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