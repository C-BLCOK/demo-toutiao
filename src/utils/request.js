import axios from 'axios'

const request = axios.create({
  // 指定请求根路径
  baseURL: 'https://www.escook.cn'
})

// 向外共享axios
export default request
