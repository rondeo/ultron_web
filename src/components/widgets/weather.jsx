/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-21 16:38:48
 * @LastEditors: etongfu
 * @LastEditTime: 2019-05-21 17:26:46
 * @Description: 日期/天气组件
 * @youWant: add you want info here
 */
import React from 'react'
import Util from 'utils/util'
export default class Weather extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      time: Util.getCurrentDate()
    }
  }
  // 挂载组件
  componentDidMount(){
    // 定义临时变量
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }
  // 销毁组件之后
  componentWillUnmount() {
    // 清空定时器
    clearInterval(this.timer)
  }
  // 时间修改计时器
  tick = () => {
    this.setState({
      time: Util.getCurrentDate()
    })
  }
  render() {
    return (
      <div className="nav-box radius-border-box weather-box">
        <div className="weather-item">
          {this.state.time}
        </div>
      </div>
    )
  }
}