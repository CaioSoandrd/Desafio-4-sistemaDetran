import api from './api';

export const criarMulta = async (multa) => {
    try {
        const response = await api.post('/api/multas', multa);
        if (!response) {
            throw new Error('Falha ao criar multa');
        }
        return response;
    } catch (error) {
        console.error('Erro ao criar multa:', error);
        throw error;
    }
};

export const listarMultas = async () => {
    try {
        const response = await api.get('/api/multas');
        if (!response) {
            throw new Error('Falha ao listar multas');
        }
        return response;
    } catch (error) {
        console.error('Erro ao listar multas:', error);
        throw error;
    }
};