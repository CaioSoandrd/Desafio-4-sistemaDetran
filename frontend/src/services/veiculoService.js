import api from '.api';

export const criarVeiclo = async (veiculo) => {
    const response = await api.post('/veiculos', veiculo);
    return response.data;
};

export const listarVeiulos = async () => {
    const response = await api.get('/veiculos', veiculo);
    return response.data;
};