// Importar o módulo mysql2
const mysql = require('mysql2');

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',      // Endereço do banco de dados
    user: 'host',    // Usuário do banco de dados
    password: 'Tocador08',  // Senha do banco de dados
    database: 'detranDB' // Nome do banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }
});

// Exportar a conexão para ser usada em outras partes do back-end
module.exports = connection;