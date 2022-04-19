// o que são modulos?
// Modulos são um conjunto de codigos/scripts que são reaproveitaveis
// Existem 3 categorias de modulos:
// Internos - Módulos que desenvolvemos
// Core Modules - Módulos que vem com o node.js
// Externos - Módulos que instalamos via npm


// Aqui são modulos internos
// Estamos Importando eles utilizando o método require e especificando o local do modulo
const soma = require("./modulos/soma.js");
const subtracao = require("./modulos/sub.js");
const multiplicacao = require("./modulos/multi.js");
const divisao = require("./modulos/divisao.js");

const { Person } = require("./modulos/person.js");
const person = new Person("Angela");
console.log(soma(10,2));
console.log(subtracao(10,2));
console.log(multiplicacao(10,2));
console.log(divisao(10,2));
console.log(person.sayMyName());