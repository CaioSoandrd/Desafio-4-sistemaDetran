import api from './api';

export const criarMulta = async (multa) => {
    const response = await api.post('/multas', multa);
    return response.data;
};

export const listarMultas = async () => {
    const response = await api.get('/multas');
    return response.data;
};