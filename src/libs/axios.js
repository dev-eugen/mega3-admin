import axios from 'axios'
const axiosIns = axios.create({
   baseURL: 'https://api.mega3.uk/v1/',
   headers: { Authorization: "Bearer " + localStorage.access_token }
})
export default axiosIns