/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-20 17:35:27
 * @LastEditors: etongfu
 * @LastEditTime: 2019-05-21 17:15:15
 * @Description: Util 文件
 * @youWant: add you want info here
 */
const initDateStr = str => (str >= 0 && str <= 9) ? `0${str}` : str 
export default class Util {
  
  /**
   * @author: etongfu
   * @description: 获取当前时间
   * @param {format}  {*} 格式 date:YYYY-MM-DD time: hh:mm:ss full:YYYY-MM-DD hh:mm:ss
   * @returns: {*String}
   */
  static getCurrentDate (format = "YYYY-MM-DD hh:mm:ss") {
    const types = ["YYYY-MM-DD", "YYYY-MM-DD hh:mm:ss", "hh:mm:ss"]
    if (types.indexOf(format) === -1) format = types[0]
    const date = new Date() ,seperator1 = "-" , seperator2 = ":"
    let month = initDateStr(date.getMonth() + 1) , strDate = initDateStr(date.getDate()), hours = initDateStr(date.getHours()), minutes = date.getMinutes()
    let currentdate = ""
    switch (types.indexOf(format)) {
      case 0:
        currentdate =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        break;
      case 1:
        currentdate =
          date.getFullYear() +
          seperator1 +
          month +
          seperator1 +
          strDate +
          " " +
          hours +
          seperator2 +
          minutes +
          seperator2 +
          date.getSeconds();
        break;
      case 2:
        currentdate =
          hours + seperator2 + minutes + seperator2 + date.getSeconds();
        break;
      default:
        currentdate =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        break;
    }
    return currentdate
  }
}
