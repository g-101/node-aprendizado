const readline  = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
    // vai receber e mostrar dados
});

// readline.question("Qual o seu nome: ", (out) => {
//     console.log(`Oh, seu nome é ${out}`);
    
//     readline.close();
// });

const out = readline.question("Qual o seu nome: ", (output) => readline.close());
console.log("Nome: " + out);