import axios from 'axios';

const api = axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getDados = async () => {
    const response = await api.get('/dados');
    return response.data;
}

export default api;