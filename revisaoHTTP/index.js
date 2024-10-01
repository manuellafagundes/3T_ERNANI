//UTILIZANDO MÓDULOS CJS
// const fs = require("node:http");
const http = require("node:http");
// const os = require("node:os");
const PORT = 8000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(PORT, () => {
  console.log(´Servidor rodando na porta ${PORT}´);
});
