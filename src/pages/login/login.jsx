/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @LastEditors: etongfu
 * @Description: 登陆页面
 * @youWant: add you want info here
 * @Date: 2019-04-30 15:57:50
 * @LastEditTime: 2019-05-31 17:50:35
 */
import React from 'react'

import './login.scss'
import Logo from 'assets/logo_line.png'
import { Button } from 'antd'

const initCanvas = () => {
  const canvas = document.getElementById('bg-line')
  let ctx = canvas.getContext('2d')
  ctx.lineWidth = 2
  ctx.strokeStyle = '#000'
  ctx.beginPath()
  ctx.stroke()

  // 设置线条颜色
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 1;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

}
export default class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      currentTab: 0
    }
  }
  componentDidMount() {
    initCanvas()
  }
  // 设置游标地址
  setCusorPosition = () => {
    const positions = ["4%", "21%" ,"93%"]
    return {
      left: positions[this.state.currentTab]
    }
  }
  
  // 切换当前tab
  changeTab = (index) => {
    this.setState({
      currentTab: index
    })
  }
  // 设置选中的状态
  setTabActive = (index) => {
    return index === this.state.currentTab ? 'login-tab-title-active' : ''
  }
  render () {
    return (
      <div className="login-wrap">
        <canvas id="bg-line" />
        <main className="login-content">
          <header className="login-logo">
            <img src={Logo} alt="Logo" height="20" /> <span className="logo-font">Ultron</span>
          </header>
          <div className="login-title">
            <h2>
              Sign In to Your Account
            </h2>
          </div>
          <content className="login-main">
            <div className="login-tabs">
              <div className="login-sign">
                <span className={'login-tab-title p-r-30 ' + this.setTabActive(0)} onClick={() => this.changeTab(0)}>
                  Sign in
                </span>
                <span className={`login-tab-title ${this.setTabActive(1)}`} onClick={() => this.changeTab(1)}>
                  Sign up
                </span>
              </div>
              <div className="login-forgot">
                <span className={`login-tab-title ${this.setTabActive(2)}`} onClick={() => this.changeTab(2)}>
                  Forgot
                </span>
              </div>
              <div className="tab-cursor" style={this.setCusorPosition()} />
            </div>
            <div className="login-form">
              <input className="login-input" placeholder="Email" size="large" />
              
              <input className="login-input m-t-10" placeholder="Email" size="large" />

              <input className="login-input m-t-10" placeholder="Email" size="large" />

              <input className="login-input m-t-10" placeholder="Email" size="large" />
            </div>
            <div className="login-btn m-t-10">
              <Button type="primary" block>Sign In</Button>
            </div>
          </content>
        </main>
        <footer className="login-footer">
          <p className="keywords">Intelligent, Monitor And Effectiveness</p>

          <p className="copyright">
            © 2019 Etongfu, Inc.
          </p>
        </footer>
      </div>
    )
  }
}