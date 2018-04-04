import ajax from '@/common/js/ajax'
export function payment (code) {
  const [url, data] = ['/v1/order/mini_pro/login.htm', {code: code}]
  return ajax({url, data})
}

export function crorder () {
  const url = '/v1/order/mini_pro/wx_create_order.htm'
  return ajax({ url })
}
