import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL

const axiosFetch = axios.create({ baseURL });

axiosFetch.interceptors.request.use( config => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token')
  }
  return config
})

export default axiosFetch;