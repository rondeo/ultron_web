import Cookies from 'js-cookie'
/**
 * cookie 设置关闭浏览器清除
 */
// key for cookie
const TokenKey = 'ultron'
// get cookie
export function getToken () {
  // Cookies.setMaxAge(-1);
  return Cookies.get(TokenKey, {
    secure: true
  })
}
// set cookie
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}
// delete cookie
export function removeToken () {
  return Cookies.remove(TokenKey)
}
