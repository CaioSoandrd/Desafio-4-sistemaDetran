import api from './api';

export const criarVeiculo = async (veiculo) => {
    try {
        const response = await api.post('/api/veiculos', veiculo);
        if (!response) {
            throw new Error('Falha ao criar veículo');
        }
        return response;
    } catch (error) {
        console.error('Erro ao criar veículo:', error);
        throw error;
    }
};

export const listarVeiculos = async () => {
    try {
        const response = await api.get('/api/veiculos');
        if (!response) {
            throw new Error('Falha ao listar veículos');
        }
        return response;
    } catch (error) {
        console.error('Erro ao listar veículos:', error);
        throw error;
    }
};