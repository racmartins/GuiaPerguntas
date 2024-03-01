//importar o modulo express
const express = require("express");

//criar uma instância do express
const app = express();

const db = require('./database/database');

// Cria uma tabela se ela não existir
db.run('CREATE TABLE IF NOT EXISTS perguntas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, descricao TEXT)', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Tabela de perguntas criada com sucesso');
});


//Estamos a dizer ao express para usar EJS como view engine
app.set("view engine", "ejs");

//Instruir o express a usar os conteúdos de public
app.use(express.static('public'));

//Recebe e Processa Formulários enviados em requisições
app.use(express.urlencoded({ extended: true }));

//Recebe e processa dados JSON enviados em requisições
app.use(express.json());

//Rotas
app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/perguntar", (req, res) => {
   res.render("perguntar");
  });
  app.post("/guardarpergunta", (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    
    // Query SQL para inserir os dados na base de dados
    const query = `INSERT INTO perguntas (titulo, descricao) VALUES (?, ?)`;
    
    // Executa a query SQL para inserir os dados
    db.run(query, [titulo, descricao], (err) => {
      if (err) {
        console.error('Erro ao inserir na base de dados', err.message);
        // Enviar uma resposta de erro ou redirecionar para uma página de erro
        res.send("Erro ao salvar a pergunta.");
      } else {
        console.log('Pergunta inserida com sucesso');
        // Redirecionar para a página inicial ou de confirmação após a inserção com sucesso
        res.redirect("/");
      }
    });
  });
  
  app.listen(8080, () => {
    console.log("App em execução!");
  });
  