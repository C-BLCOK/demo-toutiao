import request from '@/utils/request.js'
// 创建axios请求函数，并按需导出
// 参数不完整
export const getWoreMsgAPI = () => {
  return request.get('', {
    params: {}
  })
}
