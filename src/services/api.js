import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.1.9.230:8000',
})

export default api;