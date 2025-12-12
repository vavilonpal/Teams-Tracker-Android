import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.0.2.2:8080/api/v1', // адрес сервера
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    async (config) => {
        //заглущка для токена
        const token = null;
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
