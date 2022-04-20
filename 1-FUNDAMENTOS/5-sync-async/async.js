const fs = require("fs");
const path = require("path");
// Chamadas assíncronas apenas invocam suas
// funções em uma ordem de que você não tem controle, 
// e você só sabe quando uma chamada terminou quando seu callback
// é executado.
const pathfile = path.join( __dirname, "arquivo-sync.txt");
for(let i = 1; i <= 3; i++) {
    const file = `async-txt${i}.txt`;
    fs.writeFile(pathfile, "Hello Node.js!", (err, out) => {
        if(err) { 
            console.log(err);
            return 
        }
        console.log(out);
    });
}


// As chamadas assíncronas executam suas funções em paralelo sem
// travar o processamento das outras e, principalmente, sem
// bloquear o sistema principal.