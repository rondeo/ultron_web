import React, {Component} from 'react'
import { Avatar, Icon } from 'antd'
import { Link } from 'react-router-dom'

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
                <Link to="/"> 
                  <Icon type="home" />  <span>主页</span>
                </Link>
              </li>
              
              <li>
                <Link to="/"> 
                  <Icon type="compass" />  <span>发现</span>
                </Link>
              </li>
              <li>
                <Link to="/"> 
                  <Icon type="alert" />  <span>监控</span>
                </Link>
              </li>

              <li>
                <Link to="/"> 
                  <Icon type="file-protect" />  <span>文档</span>
                </Link>
              </li>

              <li>
                <Link to="/"> 
                  <Icon type="database" /> <span>待办</span>
                </Link>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default AppSide