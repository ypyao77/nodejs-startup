// import request from '@/utils/request'

export function requestLogin(data) {
  data = { 'msg': 'welcome', 'code': '200', 'user': 'admin' }
  return data
//   return request({
//     url: '/login',
//     method: 'post',
//     data
//   })
}
