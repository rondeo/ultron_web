import React from 'react'

// 查询标题
export class SearchTitle extends React.Component {

  render() {
    const {children, rightButtons} = this.props // 实现类似slot的分发功能
    return (
      <header className = "search-title">
        {/* 搜索选项 */}
        <div className="search-item-wrap">
          <React.Fragment>
            {children}
          </React.Fragment>
        </div>
        {/* 按钮和导航 */}
        <div className="search-buttons">
          {rightButtons}
        </div>
      </header>
    )
  }
}
// 查询选项
export class SearchItem extends React.Component {
  render() {
    const {tip} = this.props
    return (
      <div className="search-item">
        {
          tip === '' ? '' : <div className="search-tip">{tip}</div>
        }
        {this.props.children}
      </div>
    )
  }
}