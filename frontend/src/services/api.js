import axios from 'axios'


const backendUrl = import.meta.env.VITE_API_BASE_URL

const api = axios.create({

    baseURL : backendUrl
})


export default api