const fs = require("fs");
// Chamadas assíncronas apenas invocam suas
// funções em uma ordem de que você não tem controle, 
// e você só sabe quando uma chamada terminou quando seu callback
// é executado.
for(let i = 1; i <= 5; i++) {
    const file = `async-txt${i}.txt`;
    fs.writeFile(file, 'Hello Node.js!', (err, out) => {
        console.log(out);
    });
}


// As chamadas assíncronas executam suas funções em paralelo sem
// travar o processamento das outras e, principalmente, sem
// bloquear o sistema principal.