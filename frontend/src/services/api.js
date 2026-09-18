import axios from 'axios'
import token from './token'


const backendUrl = import.meta.env.VITE_API_BASE_URL

const api = axios.create({

    baseURL : backendUrl,
    withCredentials: true
})


api.interceptors.request.use((config) => {

    const access = token.getToken()

if(access){

    config.headers.Authorization = `Bearer ${access}`
    
}
return config

})


export default api