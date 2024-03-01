//importar o modulo express
const express = require("express");

//criar uma instância do express
const app = express();

//Estamos a dizer ao express para usar EJS como view engine
app.set("view engine", "ejs");

//Instruir o express a usar os conteúdos de public
app.use(express.static('public'));



//Criação de Rotas
app.get("/", (req, res) => { //rota raiz
res.render("index");
});
app.get("/perguntar", (req, res) => {
res.render("perguntar");
});

//abertura da app web na porta 8080 através de localhost:8080
app.listen(8080, () => { 
    console.log("App em execução!");
});