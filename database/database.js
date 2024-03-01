//importa o módulo Sqlite
const sqlite3 = require('sqlite3').verbose();

//importa o módulo path
const path = require('path');

//usa o módulo path para criar um caminho absoluto para database.sqlite
const dbPath = path.resolve(__dirname, 'database.sqlite');

//cria e abre uma conexão com uma bd SQLite usando a biblioteca sqlite3 no Node.js
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Conexão com a base de dados estabelecida.');
  }
});

//exporta o módulo db
module.exports = db;
