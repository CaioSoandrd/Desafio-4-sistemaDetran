const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',   //geralmente o use vai ter nome de root mesmo
    password: 'coloque-sua-senha-aqui', //Se quiser rodar e gerenciar o banco de dados na sua maqruina, precisa o rodar o mysql na sua maquina e colocar a senha do seu banco de dados
    database: 'detran' //o nome da nossa database é "detran"
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados detran');
});

module.exports = connection;