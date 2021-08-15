  
import axios from 'axios'
const getToken = function() {
  if (process.server) {
    // server side
    return
  }
  if (window.$nuxt) {
    // console.log(window.$nuxt.$auth.strategy.token.get())
    return window.$nuxt.$auth.strategy.token.get()
  }
}

export async function request(method, url, data, auth = false) {
  const headers = {}
  if (auth) {
    // headers['token'] = getToken()
    headers.Authorization =  `${getToken()}`
  }
  try {
    // call api
    const response = await axios({
      method,
      url,
      data,
      headers
    })
    return response
  } catch (e) {
    return e
  }
}