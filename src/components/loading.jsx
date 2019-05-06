/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @LastEditors: etongfu
 * @Description: 为了防止页面加载途中的闪烁
 * @youWant: add you want info here
 * @Date: 2019-05-06 16:04:14
 * @LastEditTime: 2019-05-06 16:10:02
 */
import React from 'react'

export default function PageLoading({ error, pastDelay }) {
  if (error) {
    return <div>加载出现错误</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}
