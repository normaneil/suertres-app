import axios from 'axios'
import store from './store/index'

let apios = axios.create({
  baseURL: 'http://52.3.66.22:3005'
})

apios.interceptors.request.use(function (config) {
  if (!store.state.token) return config
  config.headers.common.Authorization = 'Bearer ' + store.state.token
  return config
})

export default apios
