import request from '@/utils/request.js'
// 创建axios请求函数，并按需到出
// 由于服务器 暂无用户数据，函数不完整
export const getUserMsgAPI = () => {
  return request.get('', {
    params: {}
  })
}
