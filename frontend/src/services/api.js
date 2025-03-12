const API_URL = "http://localhost:5001";

export async function fecthData(endpoint) {
    try {
        const response = await fetch (`${API_URL}/${endpoint}`);
        return await response.json();
    } catch(error) {
        console.error("Erro ao buscar dados:", error);
        return [];
    }
}

export async function postData(endpoint, data) {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        });
        return await response.json();
    }   catch (error) {
        console.error("Erro ao enviar dados:", error);
        return null;
    }
}