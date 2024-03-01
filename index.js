const express = require("express");
const app = express();

const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

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

// Body Parser - agora usando as funções integradas do Express
app.use(express.urlencoded({ extended: true })); // Analisa corpos codificados em URL
app.use(express.json()); // Analisa corpos JSON

//Rotas
app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true, order: [["id", "DESC"]] }).then((perguntas) => {
    res.render("index", {
      perguntas: perguntas,
    });
    console.log(perguntas);
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/guardarpergunta", (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});

app.get("/pergunta/:id", (req, res) => {
  let id = req.params.id;
  Pergunta.findOne({
    where: { id: id },
  }).then((pergunta) => {
    if (pergunta != undefined) {
      Resposta.findAll({
        where: { perguntaId: pergunta.id },
        order: [["id", "DESC"]],
      }).then((respostas) => {
        res.render("pergunta", {
          pergunta: pergunta,
          respostas: respostas,
        });
      });
    } else {
      res.redirect("/");
    }
  });
});

app.post("/responder", (req, res) => {
  let corpo = req.body.corpo;
  let perguntaId = req.body.pergunta;
  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId,
  }).then(() => {
    res.redirect("/pergunta/" + perguntaId);
  });
});

app.listen(3000, () => {
  console.log("App em execução!");
});
