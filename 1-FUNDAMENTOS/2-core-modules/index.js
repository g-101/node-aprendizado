// o que são modulos?
// Modulos são um conjunto de codigos/scripts que são reaproveitaveis
// Existem 3 categorias de modulos:
// Internos - Módulos que desenvolvemos
// Core Modules - Módulos que vem com o node.js
// Externos - Módulos que instalamos via npm

// Core Modules - Módulos que vem com o node.js
const path = require("path"); // importa o modelo interno path
const extension = path.extname("main.py"); // com o path importado, temos acesso ao metodo extname()
console.log(`Qual a extensão desse arquivo? ${extension}`); // informa qual a extensão do arquivo.