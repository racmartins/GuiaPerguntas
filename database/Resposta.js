const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("respostas", {
  corpo: {
    type: Sequelize.TEXT, //textos longos
    allowNull: false,
  },
  perguntaId: {
    type: Sequelize.INTEGER, //relacionamento cru (relaciona a resposta com a pergunta)
    allowNull: false,
  },
});
Resposta.sync({ force: false }).then(() => {
  console.log("Tabela criada");
});

module.exports = Resposta;
