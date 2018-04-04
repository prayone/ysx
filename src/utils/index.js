function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

class Validator {
  constructor () {
    this.cache = [] // 保存校验规则
    this.strategys = {
      isEmpty: (value, errorMsg) => {
        if (value === '') {
          return errorMsg
        }
      },
      // 限制最小长度
      minLength: (value, length, errorMsg) => {
        if (value.length < length) {
          return errorMsg
        }
      },
      // 手机号码格式
      illegalPhone: (value, errorMsg) => {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
          return errorMsg
        }
      }}
  }
  addRule (name, rules) {
    for (let i = 0; i < rules.length; i++) {
      let [rule, strategyAry, errorMsg] = [rules[i], rules[i].strategy.split(':'), rules[i].errorMsg]
      let strategy = strategyAry.shift()
      console.log(77, strategy)
      strategyAry.unshift(name)
      strategyAry.push(errorMsg)
      console.log(88, strategyAry, this.strategys[strategy])
      // strategyAry.push(errorMsg)
      // console.log('888', strategyAry, strategy)
      // this.cache.push(() => {
      //   let strategy = strategyAry.shift()
      //   strategyAry.unshift(name)
      //   strategyAry.push(errorMsg)
      //   return this.strategys[strategy].apply(name, strategyAry)
      // })
      console.log(999, [rule, strategyAry, errorMsg])
    }
  }
  check () {
    let cache = this.cache
    for (let i = 0; i < cache.length; i++) {
      let msg = cache[i]() // 开始效验 并取得效验后的返回信息
      if (msg) {
        return msg
      }
    }
  }
}
class Base {
}
var base = new Base()
console.log(base)
export { Validator }
export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

