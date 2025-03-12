import api from './api';

export const criarMotorista = async (motorista) => {
    const response = await api.post('/motoristas', motorista);
    return response.data;
};

export const listarMotoristas = async () => {
    const response = await api.get('/motoristas');
    return response.data;
};