import ysx from '@/common/js/setapi'
import {login, getUserInfo} from '@/api/login'
export async function getlogin () {
  const code = await ysx.login().then((res) => res.code)
  await login(code).then((res) => {
    wx.setStorageSync('3rd_session', res.data.data)
  })
  const obj = await ysx.getUserInfo({withCredentials: true}).then((res) => {
    console.log(res)
    return {
      encryptedData: res.encryptedData,
      iv: res.iv
    }
  })
  await getUserInfo(obj).then((res) => {
    console.log(res)
  })
}
