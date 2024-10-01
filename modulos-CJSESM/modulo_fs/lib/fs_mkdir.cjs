//IMPORTAR FS E PATH
const fs = require("fs");
const path = require("path");

function criarPasta(nomePasta) {
  fs.mkdir(nomePasta, function(err) {
    console.log("Errouuu: \n" + err)
  })
}
//CRIAÇÃO DINÂMICA DE PASTAS
function criarPastaDinamica(nomePasta) {
  if (!fs.existsSync(path.join(__dirname, nomePasta))) {
    fs.mkdirSync(path.join(__dirname, nomePasta));
    console.log(`Pasta ${nomePasta} foi criada com sucesso`)
  } else {
    console.log(`Pasta ${nomePasta} já existe`)
  }

}

module.exports = { criarPasta, criarPastaDinamica }