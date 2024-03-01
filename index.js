const express = require("express");
const app = express();

const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

//Database
connection
  .authenticate()
  .then(() => {
    console.log("conexão com a base de dados efetuada com sucesso!");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

//Estamos a dizer ao express para usar EJS como view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// Body Parser (Express built-in)
app.use(express.urlencoded({ extended: false })); // Para dados de formulários
app.use(express.json()); // Para dados JSON

//Rotas
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});
app.post("/guardarpergunta", (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  Pergunta.create({
    //equivalente a um Insert Into table(...) values (...)
    titulo: titulo,
    descricao: descricao,
  }).then(() => {

    res.redirect("/");
  });
});
app.listen(8080, () => {
  console.log("App em execução!");
});
