//importa o módulo sequelize
const Sequelize = require('sequelize');

// Importa a configuração de conexão com a base de dados.
const connection = require("./database");

// Define o modelo 'Pergunta' para corresponder à tabela 'pergunta' na base de dados.
const Pergunta = connection.define("pergunta", {
  // Define um campo 'titulo' que armazenará strings.
  // Este campo não permite valores nulos, ou seja, o seu preenchimento é obrigatório.
  titulo: {
    type: Sequelize.STRING, // Apropriado para textos curtos
    allowNull: false,       // Impede valores nulos (NULL) neste campo
  },
  // Define um campo 'descricao' que armazenará textos mais longos.
  // Este campo também é obrigatório.
  descricao: {
    type: Sequelize.TEXT,   // Apropriado para textos longos
    allowNull: false,       // Impede valores nulos (NULL) neste campo
  },
});

// Sincroniza o modelo 'Pergunta' com a base de dados, criando a tabela se ela não existir.
// A opção 'force: false' impede que a tabela seja recriada se já existir.
Pergunta.sync({ force: false }).then(() => {
  console.log("Tabela criada com Sucesso"); // Mostra na consola quando a tabela é criada com sucesso.
});

// Exporta o modelo 'Pergunta' para que ele possa ser usado noutras partes do aplicativo.
module.exports = Pergunta;
