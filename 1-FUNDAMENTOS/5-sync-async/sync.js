// O que é desenvolvimento Sicrono?
// O carregamento totalmente sequencial dos codigos. 
// Assim, o codigo espera ser totalmente executado para prosseguir.

const fs = require("fs");
const path = require("path");
console.log("inicio");
const pathfile = path.join( __dirname, "arquivo-sync.txt");
fs.writeFileSync( pathfile, "hello world");
console.log("fim");