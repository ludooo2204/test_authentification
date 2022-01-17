import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:3004'
})

instance.defaults.headers.post['Content-Type'] = 'application/json'

instance.interceptors.request.use(config => {
    const token = window.localStorage.getItem('token');
console.log(token)
console.log(token)
console.log(token)
console.log(token)
    if (token) {
      config.headers['X-Auth-Token'] = token;
    }

    return config;
  },
  error => {
    return Promise.reject(error)
  });
export default instance