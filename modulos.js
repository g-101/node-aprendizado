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