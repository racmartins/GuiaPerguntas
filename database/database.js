// Importa o módulo Sequelize, que é um ORM para Node.js
const Sequelize = require("sequelize");


// Cria uma nova conexão com a base de dados usando Sequelize.
// "guiaperguntas" é o nome da base de dados,
// "root" é o utilizador da base de dados,
// "rootroot" é a senha do utilizador
// O objeto adicional contém opções específicas para a conexão com a base de dados.
const connection = new Sequelize("guiaperguntas", "root", "root", {
  host: "localhost", // O endereço do servidor de bases de dados, que é o localhost
  port:8889,
  dialect: "mysql", // O tipo de base de dados, que é MySQL neste caso
});

// Exporta a conexão para que possa ser usada noutras partes do aplicativo
module.exports = connection;


