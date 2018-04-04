export default function ajax (params, noRefetch) {
  let url = params.setUpUrl === false ? params.url : 'https://pay.yunshuxie.com' + params.url
  if (!params.type) {
    params.type = 'get'
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      heaeder: {
        'content-type': 'application/json'
      },
      success (res) {
        if (params.dataType === 'jsonp') {
          res.data = JSON.parse(res.data.replace(/^callback\(|\)$/g, ''))
        }
        if (!params.verification) {
          if (res.data.returnCode === '0') {
            resolve(res)
          } else {
            console.log(url, ' => 错误原因 => ', res.data.returnCode, res.data.returnMsg)
            reject(res.data.returnMsg)
          }
        }
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })
  })
}
