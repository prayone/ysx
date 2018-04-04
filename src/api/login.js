import ajax from '@/common/js/ajax'
export function login (code) {
  const [url, data] = ['/v1/order/mini_pro/login.htm', {code: code}]
  return ajax({url, data})
}

export function getUserInfo (obj) {
  let sessionId = wx.getStorageSync('3rd_session')
  const [url, data] = ['/v1/order/mini_pro/decrypt_user_info.htm', Object.assign({}, obj, {sessionId})]
  return ajax({ url, data, verification: true })
}
