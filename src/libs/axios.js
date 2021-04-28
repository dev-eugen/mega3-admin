import axios from 'axios'
const axiosIns = axios.create({
   baseURL: 'https://api.mega3.uk/v1/',
  // headers: {'X-Custom-Header': 'foobar'}
})
export default axiosIns