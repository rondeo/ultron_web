/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-21 16:38:48
 * @LastEditors: etongfu
 * @LastEditTime: 2019-05-26 21:00:53
 * @Description: 日期/天气组件
 * @youWant: add you want info here
 */
import React from 'react'
import Util from 'utils/util'
import { Icon } from 'antd'
import { getWeatherInfo } from 'api/weather'
// 天气组件
export default class Weather extends React.Component {
  constructor (props) {
    console.log('初始化constructor')
    super(props)
    this.state = {
      time: Util.getCurrentDate("YYYY-MM-DD hh:mm:ss", true),
      hideWeather: false, // 隐藏天气信息
      tmp: "--" , // 天气温度指数
      condTxt: '--', // 天气描述
      windDir: '--', // 刮风描述
      city: "--", //城市名称
      icon: '', // 天气图标
      location: "" // 地理位置
    }
  }
  componentWillMount () {
    console.log('初始化componentWillMount')
  }
  // 挂载组件后
  componentDidMount(){
    // 定义临时变量
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
    // 加载数据
    this.getWeatherData()
  }
  // 销毁组件之后
  componentWillUnmount() {
    // 清空定时器
    clearInterval(this.timer)
  }
  // 时间修改计时器
  tick = () => {
    this.setState({
      time: Util.getCurrentDate("YYYY-MM-DD hh:mm:ss", true)
    })
  }
  /**
   * @description 定位之后加载位置信息
   * @deprecated 暂时废弃
   */
  initLocationAndLoad = () => {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          location: `${position.coords.latitude}, ${position.coords.longitude}`
        })
        this.getWeatherData()
      }, (error) => {
        this.getWeatherData()
        // 定位失败
        console.log(error)
      },{
        timeout : 5000 // 5 秒超时
      })
    } else {
      /* geolocation IS NOT available now we hide weather info*/
      this.setState({
        hideWeather: true
      })
    }
  } 
  // 获取用户信息
  getWeatherData = async () => {
    try {
      let result = await getWeatherInfo()
      if (result.success) {
        const _temp = result.result.data[0].now
        this.setState({
          tmp:  _temp.tmp, // 天气温度指数
          condTxt: _temp.cond_txt, // 天气描述
          windDir: _temp.wind_dir, // 刮风描述
          icon: _temp.icon, // 天气图标
          city: _temp.city
        })
      } else {
        // 请求失败就隐藏天气
        this.setState({
          hideWeather: true
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    return (
      <div className="nav-box radius-border-box weather-box">
        {/* 时钟 */}
        <div className="weather-item">
          <Icon className="item-icon" type="clock-circle" /> 
          <span className="item-font">
            {this.state.time}
          </span>
        </div>
        {/* 天气信息 */}
        {
          this.state.hideWeather ? null : (
            <div className="weather-item weather-info">
              <img className="item-icon" src={this.state.icon} alt="--" />
              <span className="item-font">
                {this.state.city}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {this.state.condTxt} 
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`${this.state.tmp}°C`} 
                &nbsp;&nbsp;&nbsp;&nbsp;
                {this.state.windDir}
              </span>
            </div>
          )
        }
      </div>
    )
  }
}