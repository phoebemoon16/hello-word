import axios from 'axios'
// import router from '../router'
// import { LOCAL_URL } from '../../env'
// import { Message } from 'element-ui'

const http = axios.create({
  // baseURL: LOCAL_URL
})

http.interceptors.request.use(
  config => {
    if ( localStorage.token ) {
      config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  res => {
    return res
  }, 
  err => {
    const { response } = err
    if ( response.data.message ) {
      Message({
        type: 'error',
        message: err.response.data.message
      })
    }
    if ( response.status == 401 ) {
      router.push('/login')
    }

    return Promise.reject(err)
  }
)

function Axios (options) {
  // return 一个promise
  return new Promise((resolve, reject) => {
    let baseUrl = '/admin/api'
    http({
      headers: Object.assign({ loading: true }, options.headers) || { loading: true },
      method: options.method || 'post',
      url: '',
      // url: baseUrl + options.url || '',
      params: options.params || '',
      data: options.data || {}
    })
      .then(response => {
        let data = response.data || {}
        if ( response.status === 200 && data.code == 1 ) {
          resolve(data)
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export { Axios as axios }