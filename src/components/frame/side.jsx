import React, {Component} from 'react'
import { Avatar, Icon } from 'antd'
import { NavLink } from 'react-router-dom'

class AppSide extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="app-side-content">
        <div className="app-side-inner">
          {/* 侧边用户信息部分 */}
          <div className="side-user">
            <div className="user-avatar">
              <Avatar size="64" />
            </div>
            <div className="user-info">
              <div className="username">Etongfu</div>
              <div className="remarks">@FE</div>
            </div>
            <div className="user-arrow">
              <Icon type="down" />
            </div>
          </div>
          {/* 菜单部分 */}
          <nav className="side-menu-wrap">
            <ul className="side-menu">
              <li>
                <NavLink activeClassName="side-menu-active" to="/home"> 
                  <Icon type="home" />  <span>主页</span>
                </NavLink>
              </li>
              
              <li>
                <NavLink activeClassName="side-menu-active" to="/found"> 
                  <Icon type="compass" />  <span>发现</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="side-menu-active" to="/monitor"> 
                  <Icon type="alert" />  <span>监控</span>
                </NavLink>
              </li>

              <li>
                <NavLink activeClassName="side-menu-active" to="/file"> 
                  <Icon type="file-protect" />  <span>文档</span>
                </NavLink>
              </li>

              <li>
                <NavLink activeClassName="side-menu-active" to="/tools"> 
                  <Icon type="tool" />  <span>工具</span>
                </NavLink>
              </li>

              <li>
                <NavLink activeClassName="side-menu-active" to="/todo"> 
                  <Icon type="database" /> <span>待办</span>
                </NavLink>
              </li>

            </ul>
          </nav>
        </div>
        <div className="side-logo">
          <img src={require('assets/logo.png')} alt="" />
          <p className="copyright p-t-5">
            © 2019 Etongfu, Inc.
          </p>
        </div>
      </div>
    )
  }
}

export default AppSide