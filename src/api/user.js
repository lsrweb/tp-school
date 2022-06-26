import request from '@/utils/request'

/**
 * 登录
 * @param data
 * @returns {*}
 */
export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

/**
 * 注册
 * @param data
 * @returns {*}
 */
export function register(data) {
  return request({
    url: '/auth/reg',
    method: 'POST',
    data
  })
}

/**
 * 获取信息
 * @param token
 * @returns {*}
 */
export function getInfo() {
  return request({
    url: 'auth/info',
    method: 'POST'
  })
}

/**
 * 提交审核
 * @param data
 * @returns {*}
 */
export function subMitCheckInfo(data) {
  return request({
    url: '/auth/apply',
    method: 'post',
    data
  })
}
