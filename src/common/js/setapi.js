function setapi () {
  let handler = {
    get (target, key) {
      if (key.substr(0, 2) !== 'on' && !/[\s\S]+Sync$/.test(key)) {
        return obj => {
          // 创建promise对象
          return new Promise((resolve, reject) => {
            obj = obj || {}
            obj.success = (...args) => {
              resolve(...args)
            }
            obj.fail = (...args) => {
              reject(...args)
            }
            obj.complete = (...args) => {
              // 空函数
            }
            // 对wx对象的api进行调用，并且传播promise状态
            wx[key](obj)
          })
        }
      }
    }
  }
  let target = Object.keys(wx).filter((v) => {
    return v.substr(0, 2) !== 'on' && !/[\s\S]+Sync$/.test(v)
  })
  return new Proxy(target, handler)
}
let ysx = setapi()
export default ysx
