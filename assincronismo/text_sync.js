// O que é desenvolvimento Sicrono?
// O carregamento totalmente sequencial dos arquivos. 
// Assim, ao terminar a leitura completa de um arquivo, 
// será realizada a leitura do próximo até terminar a
// execução desse código.

const fs = require("fs");
for(let i = 1; i <= 5; i++) {
    const file = `sync-txt${i}.txt`;
    const out = fs.writeFileSync(file, 'Hello Node.js!');
    console.log(out);
}