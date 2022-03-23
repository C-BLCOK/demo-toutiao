import request from '@/utils/request.js'
// 按需导出一个API
// 文章列表请求函数，两个形参接收get请求参数数据
export const getArticalListAPI = (_page, _limit) => {
  // 发起axios请求
  return request.get('/articles', {
    // 请求参数
    params: {
      // _page: _page,
      // _limit: _limit
      // 属性和值相同可简化
      _page,
      _limit
    }
  })
}
